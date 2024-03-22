def caught_speeding(speed, is_birthday):
  speed -= int(is_birthday) * 5
  if speed <= 60: return 0
  elif speed <= 80: return 1
  else: return 2
