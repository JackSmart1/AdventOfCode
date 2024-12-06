const checkGrid = (grid: string[][]) => {
  if (
    grid[0][0] === "M" &&
    grid[0][2] === "M" &&
    grid[1][1] === "A" &&
    grid[2][0] === "M" &&
    grid[2][2] === "M"
  ) {
    return true;
  }
  return false;
};

const cresSearch2 = () => {
  const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`.split("\n");

  let cols = input[0].length;
  let rows = input.length;
let count = 0
  for (let index = 0; index < 1; index++) {
    let topLeft = 0;
    let topRight = 2;
    let middle = 1;
    let bottomLeft = 0;
    let bottomRight = 2;
    while(topRight <= cols-1 && bottomLeft <= cols){
        console.log(input[index][topLeft])
        console.log(input[index][topRight])
        console.log(input[index+1][middle])
        console.log(input[index+2][bottomLeft])
        console.log(input[index+2][bottomRight])
        if (
            input[index][topLeft] === "M" &&
            input[index][topRight] === "M" &&
            input[index+1][middle] === "A" &&
            input[index+2][bottomLeft] === "M" &&
            input[index+2][bottomRight] === "M"
          ){
        console.log(input[index][topLeft])
count++
          }
topLeft++
topRight++
middle++
bottomLeft++
bottomRight++
        }

    const element = input[index];
    element
    
  }
  count

  cols;
  rows;
};

cresSearch2();
