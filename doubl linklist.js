function search(array,target,start = 0 ,end = array.length -1){

    if(start>end){
        return -1;
    }

    var mid = Math.floor((start + end)/2);


    if(target == array[mid]){

        return mid;
    }else if(target > array[mid]){
        return search(array,target, mid+1 ,end )
    }else{
        return search(array,target,start,mid-1 ) 
    }

}

var array = [1,2,3,4,5,6,7,8,9]
var target = 7;

console.log(search(array,target));




