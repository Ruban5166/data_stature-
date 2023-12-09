let oddoreven = (number)=>{
    if (number === 0) return ( number + "is even");
    if (number === 1) return (number +"is odd");

    return oddoreven(number - 2);
}


console.log(oddoreven(25));
console.log(oddoreven(8));