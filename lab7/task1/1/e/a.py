def min(a):
    m = a[0]
    for i in a:
        if i < m:
            m = i
    return m

a = list(map(int, input().strip().split()))[:4]
print(min(a))