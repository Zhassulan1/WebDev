n = int(input())
a = list(map(int, input().strip().split()))[:n]

count = 0
for i in range(1, n):
    if a[i] > a[i-1]:
        count += 1

print(count)