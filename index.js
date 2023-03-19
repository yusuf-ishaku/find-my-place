let numbers = [0, 1, 2,3, 3, 5, 6, 7,8,9,10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
let generatedArray = []
let pos = Math.floor(Math.random() * 31);
for(i=0; i< 7; i++){
   generatedArray.push(numbers[pos])
}

console.log(generatedArray);