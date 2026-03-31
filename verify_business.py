import os

found = False
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.jsx', '.tsx', '.js')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                if 'Official Business Registration' in content:
                    found = True
                    print(f"\n✅ Found in: {filepath}")
                    print("--- CURRENT CODE BLOCK ---")
                    idx = content.find('Official Business Registration')
                    # Print the exact chunk of code containing the box
                    start = content.rfind('<div', 0, idx)
                    end = content.find('</div>', idx) + 200
                    print(content[start:end])
                    print("--------------------------\n")

if not found:
    print("❌ Could not find 'Official Business Registration' in any src file.")
