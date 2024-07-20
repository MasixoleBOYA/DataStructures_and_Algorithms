var reverseString=(word) => {
    let reversed =  [];
    
    let i = word.length -1;
    while (i >= 0){
        reversed.push(word[i]);

        i = i-1;

    }
    let finalReversed = reversed.join("")
    return finalReversed
}


console.log(reverseString("hello")); 
console.log(reverseString("world")); 
