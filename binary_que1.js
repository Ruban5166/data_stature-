// Given a sorted array of distinct integers and a target value, return the 
// index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.
nums = [1,3,5,6]
target = 5;


var searchInsert = function(nums, target) {
   let left = 0;
    let right  = nums.length;

    while(left <= right){
       
        let min = Math.floor((left + right)/2);
        
        if(target === nums[min]){
            return min;
        }
        if(target>nums[min]){
            left = min + 1;
        }
        else{
            right = min -1 
        }
    }

    return left;
    
};


let position =searchInsert(nums,target)

console.log(position)

