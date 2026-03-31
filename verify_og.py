import os

filepath = 'src/App.tsx'
found = False

if os.path.exists(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        if 'og:image' in content:
            found = True
            print(f"\n✅ Found in: {filepath}")
            print("--- CURRENT CODE BLOCK ---")
            idx = content.find('og:image')
            # Grab the block around the og:image tag
            start = content.rfind('{', 0, idx)
            end = content.find('}', idx) + 150
            print(content[start:end])
            print("--------------------------\n")

if not found:
    print("❌ Could not find 'og:image' in src/App.tsx.")
