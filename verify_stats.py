import os

found = False
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.jsx', '.tsx', '.js')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                if 'Quick Stats' in content and 'Citations' in content:
                    found = True
                    print(f"\n✅ Found in: {filepath}")
                    print("--- CURRENT CODE BLOCK ---")
                    idx = content.find('Quick Stats')
                    # Print the chunk around Quick Stats
                    start = content.rfind('<div', 0, idx)
                    if start == -1: start = content.rfind('s.jsx', 0, idx)
                    end = content.find('17 (Top 4% globally)', idx) + 150
                    print(content[start:end])
                    print("--------------------------\n")

if not found:
    print("❌ Could not find 'Quick Stats' in any src file.")
