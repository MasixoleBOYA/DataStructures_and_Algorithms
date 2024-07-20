lsit1 = [1,2,3,4]
lis2 = ["a","b","c","d"]

dict1 = dict(zip(lsit1, lis2))

print(dict1)


for i in dict1:
    print(f"i =  {i}: {dict1[i]}")