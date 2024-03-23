if __name__ == '__main__':
    n = int(input())
    for i in range(0, n**2):
        if int(i**0.5) == i**0.5:
            print(i)