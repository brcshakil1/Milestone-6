// make a even array from an odd array
// for loop
const oddArray = [1, 3, 5, 7, 9];
let evenArray = []
for(let i = 0; i < oddArray.length; i++) {
    const evenNum = oddArray[i] + 1;
    evenArray.push(evenNum);
}
// console.log(evenArray)
// map
const evenArray2 = oddArray.map(oddNum => oddNum + 1);
// console.log(evenArray2)