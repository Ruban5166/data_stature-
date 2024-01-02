function shorting(array,target,start = 0,end = array.length -1){
    if(start>end){
        return -1;
    }

    let mid = Math.floor((start + end)/2);

    if(array[mid] === target){
        console.log(array[mid]);
    }else if(target>mid){
        return(shorting(array,target,mid+1,end));
    }else{
        return(shorting(array,target,start,mid-1));
    }
}


let array = [1,2,3,4,5,6,7,8,9,10];
let target = 8;


shorting(array,target);