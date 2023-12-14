function maxGoodInteger(num) {
    let maxGood = "";
  
    for (let i = 0; i <= num.length - 3; i++) {
      const currentSubstring = num.substring(i, i + 3);
  
      
      if (isGood(currentSubstring) && currentSubstring > maxGood) {
        maxGood = currentSubstring;
      }
    }
  
    return maxGood.length === 3 ? maxGood : "";
  }
  
  function isGood(substring) {
   
    return new Set(substring.split('')).size === 1;
  }

  const num1 = "123";
  console.log(maxGoodInteger(num1)); 
  
  const num2 = "423333";
  console.log(maxGoodInteger(num2)); 
  
  const num3 = "987";
  console.log(maxGoodInteger(num3)); 
  