import math
N = int(input())
i = 1
while i <= N:
    if int(math.sqrt(i))==math.sqrt(i):
        print(i)
    i += 1