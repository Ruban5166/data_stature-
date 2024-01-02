var merge = function(nums1,m,nums2,n){
    for(let i = m; i < m+n; i++){
        nums1[i]=nums2[i-m]
    }
   return  nums1.sort((a,b)=>a - b);
};



let nums1 = [1,2,3,0,0];
let m = 3;
let nums2 = [2,5,6];
let n =3;


console.log(merge(nums1,m,nums2,n));