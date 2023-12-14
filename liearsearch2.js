function linearSearch(string,target){
    let array = string.split('');
    lowerTarget = target.toLowerCase();
    console.log(array);
    let found = false;
    for(i = 0;i<array.length;i++){
   
        if(lowerTarget === array[i].toLowerCase()){
            console.log(`${target} found index ${i}`);
            found = true
            break;
        }



    }
    if(!found== true){
        console.log(`${target} id not found`)
    }


}

let sting = "srikishantharuban"
let target = "S"

linearSearch(sting,target);
