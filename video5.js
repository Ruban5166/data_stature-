let arr = [6,5,4,3,9,8,0]
let target =10;

function result (arr,target){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
           if(target == arr[i] +arr[j]){
           console.log(arr[i],arr[j])
            break;
           }
            
        }
        
    }

}

result(arr,target)



function twonumbersum(arr,target){
    let nums = new Set();
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
       let match = target - num ;
       if(nums.has(match)){
        return [num,match];
       }
       else{
            nums.add(num)
       }
    }   
}
 

console.log(twonumbersum(arr,target))



let numbers = [6,1,6,8,10,4,15,6,3,2,6]
let b = 6;

function moveLast(array,sel){
    for (let i = 0; i < array.length; i++) {
       if(array[i]==sel){

        for(let j = array.length-1; j>i ; j--){
            if(array[j] != sel){
                let temp = array[j];
                array[j] = array[i] ;
                array[i] = temp;
            }
        }
       }
    }

   
        return(array);
}


console.log(moveLast(numbers,b));







