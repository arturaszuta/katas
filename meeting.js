function meeting(s) {
    // your code
  const upperCase = s.toUpperCase();
  const arrayOfNames = s.split(";");
  const sortedArray = arrayOfNames.sort(function (a,b) {
      const aIndex = a.indexOf(":");
      const bIndex = b.indexOf(":");
      return a[aIndex + 1] - b[bIndex + 1]
  })
  
}