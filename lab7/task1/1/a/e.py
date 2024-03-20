v, t = int(input()), int(input())
res = v * t
res = (res % 109 + 109) % 109
print(res)