n = int(input())
a = list(map(int, input().strip().split()))[:n]

print(*a[::-1])