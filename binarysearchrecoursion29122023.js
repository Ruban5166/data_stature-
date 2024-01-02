function binarysearch(array,target,start = 0,end = array.length -1){
    if(start>end){
        return -1;
    }

    let mid = Math.floor((start + end)/2)

    if(target === array[mid]){
        console.log(`this target find ${target} and index ${mid}`);
    }else if(target>array[mid]){
        return(binarysearch(array,target,mid+1,end));
    }else{
        return(binarysearch(array,target,start,mid-1));
    }
}

array=[10,15,20,25,30,35,40,45,50];
binarysearch(array,25);