function shifter(s){
    const shifterLetters = ["H", "I", "N", "O", "S", "X", "Z", "M", "W"];
    const isShifterWord = (word) => {
        let isShifter = true;
        for (i = 0; i < word.length; i++) {
            if (!shifterLetters.includes(word[i])) {
                isShifter = false;
            }
        }
        return isShifter;
    }

    const arrayOfWords = s.split(" ");
    const filtered = arrayOfWords.filter(isShifterWord);
    const wordMap = {};


    arrayOfWords.forEach((e) => {
        if (e in wordMap) {
            wordMap[e] += 1;
        } else {
            wordMap[e] = 1;
        }
    })

    console.log(wordMap);
    console.log(filtered);
  }

  shifter("WHO IS WHO");