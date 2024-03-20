def xor(x, y):
    return int(x != y)

x, y = map(int, input().strip().split())
print(xor(x, y))