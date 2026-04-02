import os
import re

TARGET_DIR = "/Users/zahir/San-Diego-Injury-Prevention-Website/apps/website/src/app"

# Regex patterns
import_pattern = re.compile(r'import\s+GrainientWhiteSection\s+from\s+"@/components/ui/GrainientWhiteSection";\n?')
dynamic_import_pattern = re.compile(r'const\s+GrainientWhiteSection\s*=\s*dynamic\([^)]+\);\n?', re.MULTILINE | re.DOTALL)
component_pattern = re.compile(r'<GrainientWhiteSection\s*/>\n?')
section_pattern = re.compile(r'<section className="[^"]*rounded-t-\[[^"]+[^"]*">')

def patch_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    original = content
    # Remove imports
    content = import_pattern.sub('', content)
    content = dynamic_import_pattern.sub('', content)
    # Remove component
    content = component_pattern.sub('', content)

    # Simplify the section class
    def replace_section(m):
        cls = m.group(0)
        # remove -mt-12, -mt-16, -mt-20
        cls = re.sub(r'-mt-\d+', '', cls)
        # remove rounded-t-[2rem] etc
        cls = re.sub(r'rounded-t-\[[^\]]+\]', '', cls)
        cls = re.sub(r'sm:rounded-t-\[[^\]]+\]', '', cls)
        cls = re.sub(r'md:rounded-t-\[[^\]]+\]', '', cls)
        cls = re.sub(r'lg:rounded-t-\[[^\]]+\]', '', cls)
        # remove shadows
        cls = re.sub(r'shadow-\[[^\]]+\]', '', cls)
        # replace bg-grainient-white with bg-white
        cls = cls.replace('bg-grainient-white', 'bg-white')
        # fix multiple spaces
        cls = re.sub(r'\s+', ' ', cls)
        cls = cls.replace('className=" ', 'className="')
        return cls

    content = section_pattern.sub(replace_section, content)

    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Patched {filepath}")

for root, _, files in os.walk(TARGET_DIR):
    for f in files:
        if f.endswith('.tsx') or f.endswith('.ts'):
            patch_file(os.path.join(root, f))
