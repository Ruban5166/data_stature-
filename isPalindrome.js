function isPalindromeTailReconcive(str){

    function palindrome(start,end){
        if(start>= end){
        return true;
    }


    if(str[start] !== str[end]){
        return false;
    }

    return palindrome(start +1 ,end -1)

    }

    return palindrome(0,str.length -1)

}


let str = "Malayalam"


console.log(isPalindromeTailReconcive(str));
