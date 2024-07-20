let check_palindrome = (inputWord) =>{
    var word = inputWord.toLowerCase();
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    normalWord = [];
    reversedWord = [];

    //pushing for normal word
    for (let i of word){
        if (alphabets.includes(i)){
            normalWord.push(i);
        }
        
    }
    console.log(`Normal word: ${normalWord}`);

    //pushing for the reversed word
    i = word.length-1;
    while (i>=0){
        if (alphabets.includes(word[i])){
            reversedWord.push(word[i]);
        }
        
        i = i-1;
    }
    console.log(`Reversed word : ${reversedWord}`);
    
    let paliCounter = 0;

    let x = 0;
    while (x <= word.length-1){
        if (normalWord[x] == reversedWord[x]){
            paliCounter = paliCounter +1;
        }
        x = x+1;

    }
    if (paliCounter == word.length){
        return true;
    }else{
        return false;
    }

}

console.log(check_palindrome("Ma sixole"));