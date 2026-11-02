import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section className="py-32 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <p className="text-green-600 font-bold uppercase tracking-widest mb-4">404</p>
                <h1 className="text-4xl md:text-5xl font-berkshire text-gray-800 mb-6">
                    We couldn't find that page
                </h1>
                <p className="text-lg text-gray-600 mb-10">
                    The page you're looking for may have moved. Let's get you back on track.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition"
                    >
                        Back to Home
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-block border-2 border-green-600 text-green-700 px-8 py-3 rounded-full font-bold hover:bg-green-600 hover:text-white transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
