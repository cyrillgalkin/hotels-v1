class MultiplicationTable {
  create(number) {
    for (let i = 1; i <= number; i++) {
      let row = '';
      for (let j = 1; j <= number; j++) {
        row += (i * j).toString().padStart(4, ' ');
      }
      console.log(row);
    }
  }
}

const multiplicationTable = new MultiplicationTable();
multiplicationTable.create(3);
