import os

filepath = 'src/App.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the og:image tag to use the absolute URL
content = content.replace(
    "{ property: 'og:image', content: profileImage },",
    "{ property: 'og:image', content: `https://drbiveksingh.com${profileImage}` },"
)

# 2. Add the twitter:image tag right below the twitter:card tag
if 'twitter:image' not in content:
    content = content.replace(
        "{ name: 'twitter:card', content: 'summary_large_image' },",
        "{ name: 'twitter:card', content: 'summary_large_image' },\n      { name: 'twitter:image', content: `https://drbiveksingh.com${profileImage}` },"
    )

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Social media tags patched successfully in src/App.tsx!")
