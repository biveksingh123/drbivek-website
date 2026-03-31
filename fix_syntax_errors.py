import re

filepath = 'src/App.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove the stray closing bracket and extra div/section issues found at line 287
# This regex looks for the pattern that likely remained after the loop deletion
content = re.sub(r'\}\)\)\}\s*<\/div>\s*<\/div>\s*<\/section>', '</div></div></section>', content, flags=re.DOTALL)

# 2. Fix the broken JSX closing structure
# We ensure the Footer and the main container div close correctly
if '</footer>' in content and '</div>' not in content[content.find('</footer>'):]:
    content = content.replace('</footer>', '</footer>\n    </div>\n  );')

# 3. Final cleanup of any stray "}" characters that Vite complained about
content = content.replace('      </div>\n    );\n  }\n}', '      </div>\n    );\n  }')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Syntax errors repaired in App.tsx!")
