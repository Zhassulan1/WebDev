if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().strip().split()))
    mx = max(arr)
    mx2 = -102

    for i in arr:
        if (i > mx2 and i < mx): 
            mx2 = i

    print(mx2)

