def make_tags(tag, word):
  return f'<{tag}>{word}</{tag}>'

print(make_tags('i', 'like'))

# this works on site with 3.8 interpreter 
# def make_tags(tag, word):
#   return '<' + tag + '>' + word + '</' + tag+ '>'


