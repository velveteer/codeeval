import sys
import math

test_cases = open(sys.argv[1], 'r')
for idx, test in enumerate(test_cases):
    if test is not "" and idx is not 0:
        num = int(test)
        solutions = 0
        min = int(math.sqrt(num))
        for x in range(0, min+1):
            for y in range(x, min+1):
                if x * x + y * y == num:
                    solutions += 1;


        print solutions
test_cases.close()