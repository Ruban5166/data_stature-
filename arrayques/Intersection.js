//Intersection of Two Arrays


var Intersection = function(nums1,num2){
    const array = []

    for(let i =0 ; i<nums1.length ;i++){
        if(nums2.includes(nums1[i])){
            if(!array.includes(nums1[i])){
                array.push(nums1[i])
            }
        }
    }
    return array;
};

let nums1 = [1,2,2,1];
let nums2 = [2,2]
console.log(Intersection(nums1,nums2))
