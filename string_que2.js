let nonRepeatedletters = function(str){

    str = str.toLowerCase();

    for(i = 0; i<str.length;i++){
        let isRepeat = false;

        for(j = 0;j<str.length;j++){
            if(i!==j && str[i]== str[j]){
                isRepeat = true;
                break;
            }
        }
        if(!isRepeat){
            return str[i];
        }
    }

    return null;
}

let str = nonRepeatedletters("malayalam")

console.log(str);
