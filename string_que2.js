let nonRepeatedletters = function(str){

    str = str.toLowerCase();
    let notRebeted = [];

    for(let i = 0; i<str.length;i++){
        let isRepeat = false;

        for(let j = 0;j<str.length;j++){
            if(i!==j && str[i]== str[j]){
                isRepeat = true;
                break;
            }
        }
        if(!isRepeat){
            notRebeted.push(str[i])
        }
    }
    console.log(notRebeted.join(','));
    return null;
}


nonRepeatedletters("Srikishantharuban")

//console.log(str);
