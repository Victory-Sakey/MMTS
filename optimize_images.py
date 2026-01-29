import os
from PIL import Image
import sys

def optimize_images(directory):
    try:
        # Extensions to look for
        extensions = ['.jpg', '.jpeg', '.png']
        
        print(f"Scanning {directory}...")
        
        for filename in os.listdir(directory):
            if any(filename.lower().endswith(ext) for ext in extensions):
                filepath = os.path.join(directory, filename)
                size_mb = os.path.getsize(filepath) / (1024 * 1024)
                
                # Only process images larger than 1MB
                if size_mb > 1.0:
                    print(f"Optimizing {filename} ({size_mb:.2f} MB)...")
                    
                    try:
                        with Image.open(filepath) as img:
                            # Convert to RGB if needed (for PNGs)
                            if img.mode in ('RGBA', 'P'):
                                img = img.convert('RGB')
                                
                            # Resize if dimension is too large (max 1920px width)
                            max_width = 1920
                            if img.width > max_width:
                                ratio = max_width / img.width
                                new_height = int(img.height * ratio)
                                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                            
                            # Save with optimization
                            output_path = filepath # Overwrite
                            img.save(output_path, quality=80, optimize=True)
                            
                            new_size_mb = os.path.getsize(output_path) / (1024 * 1024)
                            print(f"  -> Reduced to {new_size_mb:.2f} MB")
                            
                    except Exception as e:
                        print(f"  Failed to optimize {filename}: {e}")
                        
        print("Optimization complete!")
        
    except ImportError:
        print("Error: Pillow library not found. Please run 'pip install Pillow' to use this script.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    target_dir = r"c:\Users\HomePC\Documents\MMTS\frontend\public\images"
    optimize_images(target_dir)
