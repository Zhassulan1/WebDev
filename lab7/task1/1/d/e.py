def ans():
    n = int(input())
    a = list(map(int, input().strip().split()))[:n]

    count = 0
    for i in range(1, n):
        if a[i] > 0 and a[i-1] > 0 or a[i] < 0 and a[i-1] < 0:
            print("YES")
            return
        
    print("NO")


ans()