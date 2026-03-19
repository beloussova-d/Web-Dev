v = int(input())
t = int(input())
if v < 0:
    print((109 + v*t) % 109)
else:
    print((0 + v*t) % 109)
    