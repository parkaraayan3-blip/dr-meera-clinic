import os
from PIL import Image

assets_dir = "/Users/aayanparkar/Desktop/portnew/public/assets"

print("Starting asset optimization (Option A: WebP)...")
print("-" * 50)

total_original_size = 0
total_new_size = 0
converted_count = 0

for file_name in os.listdir(assets_dir):
    if file_name.lower().endswith('.png'):
        png_path = os.path.join(assets_dir, file_name)
        base_name = os.path.splitext(file_name)[0]
        webp_path = os.path.join(assets_dir, base_name + ".webp")
        
        orig_size = os.path.getsize(png_path)
        total_original_size += orig_size
        
        try:
            # Open image and save as WebP
            img = Image.open(png_path)
            img.save(webp_path, format="webp", quality=80)
            
            new_size = os.path.getsize(webp_path)
            total_new_size += new_size
            
            print(f"Optimized: {file_name} -> {base_name}.webp")
            print(f"  Size: {orig_size / 1024:.1f} KB -> {new_size / 1024:.1f} KB (Saved {(orig_size - new_size)/orig_size*100:.1f}%)")
            
            # Delete original PNG file
            os.remove(png_path)
            converted_count += 1
        except Exception as e:
            print(f"Error optimizing {file_name}: {e}")

print("-" * 50)
print(f"Optimization Complete!")
print(f"Converted {converted_count} files.")
print(f"Total Original Size: {total_original_size / 1024 / 1024:.2f} MB")
print(f"Total Optimized Size: {total_new_size / 1024 / 1024:.2f} MB")
print(f"Net Savings: {(total_original_size - total_new_size) / 1024 / 1024:.2f} MB (Saved {(total_original_size - total_new_size)/total_original_size*100:.1f}%)")
