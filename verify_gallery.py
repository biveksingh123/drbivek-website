import os

filepath = 'src/App.tsx'
found = False

if os.path.exists(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        if 'A collection of moments' in content:
            found = True
            print(f"\n✅ Found in: {filepath}")
            print("--- CURRENT CODE BLOCK ---")
            idx = content.find('[1,2,3,4,5,6].map')
            if idx != -1:
                # Grab the grid div that contains the map function
                start = content.rfind('<div', 0, idx)
                if start == -1: start = content.rfind('s.jsx("div"', 0, idx)
                end = content.find('})})', idx) + 4
                print(content[start:end])
                print("--------------------------\n")
            else:
                print("⚠️ Found the gallery text, but couldn't find the [1,2,3,4,5,6].map loop.")

if not found:
    print("❌ Could not find the Gallery section in src/App.tsx.")
