var missingNumber = function(nums) {
    
    let n = nums.length;
    let isNum ;
    let num;
    for(let i = 0 ; i<=n ;i++){
        for(let j = 0;j<n;j++){
            if(i == nums[j]){
                isNum = true
                break;
            
            }else{
                isNum =false;
                console.log(i)
                num =i;
            }
             
        }
        if(!isNum){
            console.log(num);
            break;
        
        }
       
        }
        
    };


Input: nums = [6,4,2,3,5,7,0,1,9]

    missingNumber(nums);



