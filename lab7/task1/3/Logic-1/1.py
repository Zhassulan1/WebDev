def cigar_party(cigars, is_weekend):
  if not is_weekend:
    return 40 <= cigars <= 60
  else:
    return 40 <= cigars