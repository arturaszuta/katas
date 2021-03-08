function doubleton(num){
    // Is a number a doubleton?
    const isDoubleton = (num) => {
        let answer = false;
        const numString = num.toString();
        const digitCount = numString.length;
        const digits = {};
        for (i = 0; i < digitCount; i++) {
            if (numString[i] in digits) {
                digits[numString[i]] ++;
            } else {
                digits[numString[i]] = 1;
            }
        }
        Object.keys(digits).length == 2 ? answer = true : answer = false;
        return answer;
    }
   num++;
   while (isDoubleton(num) === false) {
    num++;
   }
   return num;
}  

console.log(doubleton(121213));