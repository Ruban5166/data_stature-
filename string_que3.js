let reverseString = function(str){

    const word = str.split(' ');

    for(let i=0;i<word.length;i++){
        word[i] = reverseWord(word[i]);
    }

    const reversword = word.join(' ');
    return reversword;

}

let reverseWord = function(word) {
    return word.split('').reverse().join('');
}


let words = reverseString('life begins here');

console.log(words);