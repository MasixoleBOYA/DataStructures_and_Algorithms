
def mergeAlternately(word1:str, word2:str)->str:
    """
    :type word1: str
    :type word2: str
    :rtype: str
    """

    mergedList:list = []


    if not len(word1) < 1 and len(word2) <= 100:
        for x in range(len(word1)):
            mergedList.append(word1[x])
            mergedList.append(word2[x])


        # print(f"The merged: {mergedList}")
        returnAnswer = ""
        for i in mergedList:
            returnAnswer = returnAnswer+i  

        return returnAnswer
    else:
        print(f"word one length is {len(word1)}")

    
print(mergeAlternately("ab","pqrs"))

    