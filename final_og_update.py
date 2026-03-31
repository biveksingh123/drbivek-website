import re

filepath = './index.html'
# This is the permanent link we just created
profile_url = "https://drbiveksingh.com/dr_bivek_profile.png"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Update both Facebook and Twitter image tags
content = re.sub(r'property="og:image" content=".*?"', f'property="og:image" content="{profile_url}"', content)
content = re.sub(r'name="twitter:image" content=".*?"', f'name="twitter:image" content="{profile_url}"', content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Social thumbnail updated to dr_bivek_profile.png!")
