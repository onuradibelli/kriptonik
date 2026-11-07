import os
import math
from PIL import Image, ImageDraw, ImageFont

public_dir = '/root/.gemini/antigravity/scratch/kriptonik/public'

def draw_diamond(draw, cx, cy, radius, fill=None, outline=None, width=1):
    points = [
        (cx, cy - radius),
        (cx + radius, cy),
        (cx, cy + radius),
        (cx - radius, cy)
    ]
    if fill:
        draw.polygon(points, fill=fill)
    if outline:
        draw.polygon(points, outline=outline, width=width)

def create_app_icon(size, is_maskable=False):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Background rounded rect
    corner_radius = 0 if is_maskable else int(size * 0.22)
    bg_color = (11, 14, 20, 255)
    border_color = (34, 41, 56, 255)
    
    draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=corner_radius, fill=bg_color, outline=border_color, width=max(1, int(size * 0.015)))
    
    cx, cy = size // 2, size // 2
    r_outer = int(size * 0.30)
    r_inner = int(size * 0.18)
    r_center = int(size * 0.06)
    
    # Outer diamond
    draw_diamond(draw, cx, cy, r_outer, outline=(41, 98, 255, 255), width=max(2, int(size * 0.045)))
    # Inner diamond
    draw_diamond(draw, cx, cy, r_inner, fill=(0, 192, 135, 255))
    # Center circle
    draw.ellipse([cx - r_center, cy - r_center, cx + r_center, cy + r_center], fill=(11, 14, 20, 255))
    
    return img

# Generate App Icons
create_app_icon(180).save(os.path.join(public_dir, 'apple-touch-icon.png'))
create_app_icon(192).save(os.path.join(public_dir, 'icon-192.png'))
create_app_icon(512).save(os.path.join(public_dir, 'icon-512.png'))
create_app_icon(512, is_maskable=True).save(os.path.join(public_dir, 'icon-maskable-512.png'))
create_app_icon(32).save(os.path.join(public_dir, 'favicon-32x32.png'))

# Generate OG Image (1200x630)
og = Image.new('RGBA', (1200, 630), (11, 14, 20, 255))
og_draw = ImageDraw.Draw(og)

# Background subtle grid/lines
for x in range(0, 1200, 60):
    og_draw.line([(x, 0), (x, 630)], fill=(18, 23, 34, 255), width=1)
for y in range(0, 630, 60):
    og_draw.line([(0, y), (1200, y)], fill=(18, 23, 34, 255), width=1)

# Glow badge background
og_draw.rounded_rectangle([80, 70, 480, 115], radius=22, fill=(41, 98, 255, 30), outline=(41, 98, 255, 100), width=2)
og_draw.ellipse([100, 88, 112, 100], fill=(0, 230, 153, 255))

# Draw Brand Icon on right side
cx, cy = 960, 315
draw_diamond(og_draw, cx, cy, 180, outline=(41, 98, 255, 255), width=16)
draw_diamond(og_draw, cx, cy, 110, fill=(0, 192, 135, 255))
og_draw.ellipse([cx - 40, cy - 40, cx + 40, cy + 40], fill=(11, 14, 20, 255))

# Draw Border
og_draw.rectangle([0, 0, 1199, 629], outline=(34, 41, 56, 255), width=4)

og.convert('RGB').save(os.path.join(public_dir, 'og-image.png'), quality=95)
print("Assets generated successfully!")
