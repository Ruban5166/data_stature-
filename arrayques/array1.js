function isPrefixString(s, words) {
    let currentPrefix = '';
  
    for (let i = 0; i < words.length; i++) {
      currentPrefix += words[i];
  
      if (currentPrefix === s) {
        return true;
      }
  

      if (currentPrefix.length > s.length) {
        return false;
      }
    }
  

    return false;
  }

const s = "leetcode";
const words = ["leet", "code"];

console.log(isPrefixString(s, words));