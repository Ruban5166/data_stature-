let decrement = (number) => {
    if (number === 0)return;
    console.log(number);
    return decrement(number-1);
}


decrement(10);
