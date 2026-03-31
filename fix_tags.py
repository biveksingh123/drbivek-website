import os

file_path = 'src/App.tsx'

if os.path.exists(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Identify the specific broken area
    old_segment = "Harvard Medical School.\n\n            {/* EDU-STUDIO"
    new_segment = "Harvard Medical School.\n              </p>\n\n            {/* EDU-STUDIO"
    
    # Remove the orphaned closing tag that follows the patch
    if old_segment in content:
        content = content.replace(old_segment, new_segment)
        content = content.replace('</div>\n              </p>', '</div>')
        
        with open(file_path, 'w') as f:
            f.write(content)
        print("VERIFIED: Tags fixed. Paragraph now closes before the patch.")
    else:
        print("ERROR: Could not find the specific text segment to fix.")
else:
    print("ERROR: src/App.tsx not found.")
