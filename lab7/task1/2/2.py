#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
    ans = ""
    
    if n % 2 != 0:
        ans = "Weird"
    elif 2 <= n <= 5:
        ans = "Not Weird"
    elif 6 <= n <= 20:
        ans = "Weird"
    else:
        ans = "Not Weird"
        
    print(ans)