


function binarysearchrec(arr,target,start = 0,end = arr.length-1){

    if(start> end){
        return -1;
    }

    let mid = Math.floor((start+end)/2);

    if(target ==arr[mid]){
        return mid;
    }else if (arr[mid] > target){
        return(binarysearchrec(arr,target,start,mid-1))
    }else{
        return(binarysearchrec(arr,target,mid+1,end)) 
    }



}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 11;

let ans = binarysearchrec(arr,target);

console.log(ans)

