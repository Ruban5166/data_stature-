const array = [1,2,3,4,5,6,7,22,29]
let target = 22
let left =0;
let right =array.length
let mid;



while(left <= right){
   mid = Math.floor((left+right) / 2)
    if(array[mid] === target){
        console.log(array[mid])
    } if(array[mid] < target){
        left = mid + 1
    }else{
        right = mid - 1
    }

   
     
}