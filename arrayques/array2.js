function percentageOfCharacters(s, letter) {
    let letterCount = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === letter) {
        letterCount++;
      }
    }
  
 
    const percentage = Math.floor((letterCount / s.length) * 100);
  
    return percentage;
  }
  

  const example1 = percentageOfCharacters("foobar", "o");
  console.log(example1); 
  
  const example2 = percentageOfCharacters("jjjj", "k");
  console.log(example2); 
  