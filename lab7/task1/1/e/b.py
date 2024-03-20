def power(a, n):
    return a**n

a, n = map(float, input().strip().split())
print(power(a, n))