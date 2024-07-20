const findLagerst = (givenArray) => {
    let newList = [];

    while (givenArray.length>0){
        if (givenArray[0] < givenArray[0+1]){
            newList.push(givenArray[0])
            givenArray.splice(givenArray[0],1)
        }else{
            newList.push(givenArray[0+1])
            givenArray.splice(givenArray[0+1],1)
        }
    }

    return newList
}



const myList = [1, 3, 5, 2, 4];
const myList2 = [-1, -5, -3]; 

console.log(findLagerst(myList));

