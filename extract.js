function domainName(url){
    //your code here
      let firstOccurance;
      let lastOccurance
      let answer;
      const wwwIndex = url.indexOf("www");
      const slashIndex = url.indexOf("//");

      if (wwwIndex < 0 && slashIndex < 0) {
          firstOccurance = url.indexOf(".");
          answer = url.substring(0, firstOccurance);
      } else if (wwwIndex < 0) { 
            firstOccurance = url.indexOf("//");
            lastOccurance = url.indexOf(".");
            answer = url.substring(firstOccurance + 2, lastOccurance);
      } else {
          firstOccurance = url.indexOf(".");
          lastOccurance =  url.indexOf(".", firstOccurance + 1);
          answer = url.substring(firstOccurance + 1, lastOccurance);
      }
      return answer;
  }
