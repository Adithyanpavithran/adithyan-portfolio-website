from PIL import Image

img = Image.open('public/assets/profile.jpg').convert('RGB')
width, height = img.size

pixels = img.load()
min_x, max_x = width, 0
min_y, max_y = height, 0

# Find inner card bounds by detecting pixels with green glow or content brightness
for y in range(height):
    for x in range(width):
        r, g, b = pixels[x, y]
        # Ignore outer black background (r<35, g<35, b<35)
        if g > 45 or r > 45 or b > 45:
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y

print(f"Detected bounding box: min_x={min_x}, min_y={min_y}, max_x={max_x}, max_y={max_y}")

# Crop precisely around the inner card
cropped = img.crop((min_x, min_y, max_x + 1, max_y + 1))
cropped.save('public/assets/profile.jpg')
cropped.save('public/assets/profile_real.jpg')
cropped.save('public/assets/profile.png')
cropped.save('C:/Users/LENOVO/.gemini/antigravity-ide/brain/b9d1fd9c-7902-4c3c-8619-0e3b3adb51ed/cropped_profile.png')

print("Successfully cropped profile photo!")
