let friends = ["Nathan", "Anna", "Chrystal", "Victoria", "Tamara"];

friendsLoop: for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
  songLoop: for (let j = 99; j > 0; j--) {
    if (j > 1) {
      console.log(
        j +
          " lines of code in the file, " +
          j +
          " lines of code; " +
          friends[i] +
          " strikes one out, clears it all out, "
      );
    } else {
        console.log(j + ' line of code in the file, ' + j + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
    }
    
  }
}
