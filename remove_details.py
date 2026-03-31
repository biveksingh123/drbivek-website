import os

filepath = 'src/App.tsx'
if not os.path.exists(filepath):
    print("❌ Error: src/App.tsx not found!")
    exit()

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Phrases to remove
to_remove = [
    "Reg. No. 16863",
    "Gender: Male",
    "Nationality: Nepali",
    "DOB: March 8, 1988"
]

new_lines = []
for line in lines:
    # If the line contains any of our target phrases, skip it
    if any(phrase in line for phrase in to_remove):
        continue
    new_lines.append(line)

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("✅ Personal details removed from App.tsx!")
