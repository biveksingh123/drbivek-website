import os

file_path = 'src/App.tsx'

if os.path.exists(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # This targets the specific broken ending we see in your grep
    broken_ending = '            </div>\n              </p>'
    fixed_ending = '            </div>'
    
    if broken_ending in content:
        content = content.replace(broken_ending, fixed_ending)
        with open(file_path, 'w') as f:
            f.write(content)
        print("VERIFIED: Ghost </p> tag removed successfully.")
    else:
        print("ERROR: Could not find the ghost tag. It might have a different indentation.")
else:
    print("ERROR: src/App.tsx not found.")
