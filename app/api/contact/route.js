import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { prisma } from '@/lib/prisma';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, number, message } = body;

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        // 1. Save to Database
        let submissionId;
        try {
            const submission = await prisma.contactSubmission.create({
                data: {
                    name,
                    email,
                    number: number || null,
                    message,
                },
            });
            submissionId = submission.id;
        } catch (dbError) {
            console.error('Database error:', dbError);
            // Non-blocking error
        }

        // 2. Setup Email Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || '587'),
            secure: process.env.EMAIL_PORT === '465',
            auth: {
                user: process.env.EMAIL_HOST_USER,
                pass: process.env.EMAIL_HOST_PASSWORD,
            },
        });

        // 3. Send Notification Email to Admins
        try {
            const adminMailOptions = {
                from: `"${name}" <${process.env.EMAIL_HOST_USER}>`,
                to: process.env.ADMIN_EMAIL,
                subject: `New Contact Form Submission from ${name}`,
                text: `
Name: ${name}
Email: ${email}
Phone: ${number || 'N/A'}

Message:
${message}
                `,
                replyTo: email,
            };

            await transporter.sendMail(adminMailOptions);
        } catch (emailError) {
            console.error('Admin Email error:', emailError);
            // Non-blocking error
        }

        // 4. Send Confirmation Email to User
        try {
            const userMailOptions = {
                from: `"Meaningful Minds" <${process.env.EMAIL_HOST_USER}>`,
                to: email,
                subject: `Thank you for contacting Meaningful Minds`,
                text: `
Hi ${name},

Thank you for reaching out to us. We have received your message and our team will get back to you within 24-48 hours.

Details of your submission:
Message: ${message}

Best regards,
The Meaningful Minds Team
                `,
            };

            await transporter.sendMail(userMailOptions);
        } catch (userEmailError) {
            console.error('User Confirmation Email error:', userEmailError);
            // Non-blocking error
        }

        return NextResponse.json(
            {
                message: 'Thank you! Your message has been received successfully.',
                id: submissionId
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}