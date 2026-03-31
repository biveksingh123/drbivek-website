import os

filepath = 'src/App.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()
    
    start_idx = content.find('A collection of moments')
    end_idx = content.find('More photos will be added soon')
    
    if start_idx != -1 and end_idx != -1:
        print("\n✅ Found the Gallery boundaries!")
        print("--- CURRENT GALLERY CODE ---")
        # Print the exact code between the heading and the footer
        print(content[start_idx-50:end_idx+100])
        print("----------------------------\n")
    else:
        print("❌ Could not find the exact text boundaries.")
