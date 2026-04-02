import os

TARGET_DIR = "/Users/zahir/San-Diego-Injury-Prevention-Website/apps/website/src"

def patch_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content
    content = content.replace('#1a3a5c', '#1B2A53')
    content = content.replace('#1A3A5C', '#1B2A53')
    content = content.replace('#7f1d1d', '#E2231A')
    content = content.replace('#7F1D1D', '#E2231A')
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Patched {filepath}")

for root, _, files in os.walk(TARGET_DIR):
    for f in files:
        if f.endswith('.tsx') or f.endswith('.ts'):
            patch_file(os.path.join(root, f))
