let countingTheDublicate = function(str){
    let arr = {};

    for(i=0;i<str.length;i++){
      if(arr[str[i]]){
        arr[str[i]]= arr[str[i]]+1
      }else{
        arr[str[i]] = 1;
      }
    }
   return arr;
    

}


let str = "srikishantharuban";
let count = countingTheDublicate(str);
console.log(count)
