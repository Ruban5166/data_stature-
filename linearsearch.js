function linearSearch (array,target){

    for(i = 0 ;i<array.length;i++){
        if(array[i] === target){
            console.log(`${target} found location ${i}`)
        }
    }
}


let array = [34,45,26,46,78,98];
let target = 26;

linearSearch(array,target);