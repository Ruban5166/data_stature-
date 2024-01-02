
//Remove Duplicates from Sorted Array


var removeDublicates = function(nums){
    let i = 0;
    for(let j =0;j<nums.length;j++){
        if(nums[i]!== nums[j]){
            nums[++i]=nums[j]
        }
    }
    return ++i
    
}
let nums = [1,1,2];

console.log(removeDublicates(nums));