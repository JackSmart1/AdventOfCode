const ceresSearch1Input = 
`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`

const GetVerticalLines = (rows: number, cols: number, splitInput: string[]) => {
    let lines: string[] = [];
    for (let index = 0; index < rows; index++) {
        let vertString = '';
        for (let i = 0; i < cols; i++) {
            vertString += splitInput[i][index];
        }
        lines.push(vertString);
    }
    return lines;
}


const GetDiagonalLines = (rows: number, cols: number, splitInput: string[]) => {
    let lines: string[] = [];
    for (let c = 0; c < cols; c++) {
           let topLeftToMiddle = '';        
           let topRightToMiddle = '';
           
           let m = 0
        for (let i = 0; i <= c; i++) {
            let t = cols-i-1-i+m
            topLeftToMiddle += splitInput[i][c-i];
            topRightToMiddle += splitInput[i][t+i];
      
            i
            console.log(t)
            topRightToMiddle
            m++
            
        }
        topLeftToMiddle
        topRightToMiddle
        lines.push(topLeftToMiddle);
    }
    for (let c = cols-1; c >= 0; c--) {
        c
        let topRightToMiddle = '';
     for (let i = 0; i <= c; i++) {
        i
        c
         topRightToMiddle += splitInput[i][c-i];
     }
     topRightToMiddle
     lines.push(topRightToMiddle);
 }
    for (let c = cols-1; c >= 1; c--) {

        let BottomRightToMiddle = '';
        let test = 0
        for (let i = cols-1; i >= c; i--) {
            BottomRightToMiddle += splitInput[i][c - test];
            test --
        }
        lines.push(BottomRightToMiddle);
    }
return lines

}
const ceresSearch = () => {

let result = 0;
const regex = /SAMX|XMAS/g;



let rows = ceresSearch1Input.split('\n')
let rowCount = rows.length;
let colsCount = rows[0].length

let verticalLines = GetVerticalLines(rowCount, colsCount, rows);
let diagonalLines = GetDiagonalLines(rowCount, colsCount, rows);
diagonalLines

let allLines: string[] = [...verticalLines, ...rows]

console.log(result)
}

ceresSearch();


