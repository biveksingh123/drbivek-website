import re

filepath = 'src/App.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# This identifies the placeholder cards (Photos 1 through 6) and removes them
# We search for the specific "Coming Soon" text and remove that entire Card block
cleaned_content = re.sub(r'<Card[^>]*>\s*<div[^>]*>\s*<div[^>]*>\s*<div[^>]*Photo \d+.*?Coming Soon.*?</div>\s*</Card>', '', content, flags=re.DOTALL)

# Also clean up any extra empty Card blocks that might be left over
cleaned_content = re.sub(r'<Card[^>]*>\s*<div[^>]*>\s*<ImageIcon[^>]*>.*?Photo \d+.*?Coming Soon.*?</div>\s*</Card>', '', cleaned_content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(cleaned_content)

print("✅ Placeholder boxes removed from App.tsx!")
