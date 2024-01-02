function fibonac(n){

    let array = [0,1];

    while(array.length<n){
        array.push((array[array.length -1])+(array[array.length -2]));

    }

    return array;
}



console.log(fibonac(10));