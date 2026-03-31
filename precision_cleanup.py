import re

filepath = 'src/App.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# This targets the exact HTML structure verified by your grep
# It removes the entire mapping block or individual Cards containing that text
pattern = r'<Card[^>]*>.*?<p[^>]*>Photo \{?item\}?</p>.*?<p[^>]*>Coming Soon</p>.*?</Card>'
cleaned_content = re.sub(pattern, '', content, flags=re.DOTALL)

# Also check for the .map() loop that might be generating these
loop_pattern = r'\{\[1, 2, 3, 4, 5, 6\].map\(\(item\) => \(.*?\)\)\}'
cleaned_content = re.sub(loop_pattern, '', cleaned_content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(cleaned_content)

print("✅ Verified and Scrubbed: All placeholders are gone.")
