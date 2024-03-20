n = int(input())
a = list(map(int, input().strip().split()))[:n]

count = 0
for i in a:
    if i > 0:
        count += 1

print(count)