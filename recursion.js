function recursion(n){
    if(n === 1){
        return 1
    }

    return n * recursion(n-1)
}

const n = 5;
console.log(recursion(n))