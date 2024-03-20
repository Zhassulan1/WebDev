# n = int(input())
# a = list(map(int, input().strip().split()))[:n]

a, b = int(input()), int(input())

for i in range(a, b+1):
    if i % 2 == 0 and i != 0:
        print(i, end=' ')