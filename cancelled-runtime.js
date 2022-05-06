// // Im proud of writing the function like this
// // but its actually interfering with the runtime

// const perf = require('execution-time')();


// function doublerAppend(nums){

//     let new_nums = [];

//     for (let i=0; i<nums.length; i++){
//         let num = nums[i] * 2;
//         new_nums.push(num);
//     }

// }

// function doublerInsert(nums){

//     let new_nums = [];

//     for (let i=0; i<nums.length; i++){
//         let num = nums[i] * 2;
//         new_nums.unshift(num);
//     }

// }

// function getSizedArray(size){
//     let array = [];
//     for (let i=0; i<size; i++){
//         array.push(i);
//     }
//     return array
// }

// const arrays = {
//     supaTeenyArray: getSizedArray(1),
//     tinyArray: getSizedArray(10),
//     smallArray: getSizedArray(100),
//     mediumArray: getSizedArray(1000),
//     largeArray: getSizedArray(10000),
//     extraLargeArray: getSizedArray(100000),
// }

// Object.entries(arrays).forEach(keyval => {
    
//     let name = keyval[0]
//     let arr = keyval[1]

//     perf.start();                     
//     doublerAppend(arr);
//     let resultsAppend = perf.stop(); 

//     perf.start();
//     doublerInsert(arr);
//     let resultsInsert = perf.stop();

//     console.log(`Results for the ${name}`);
//     console.log("insert", resultsInsert.preciseWords);
//     console.log("append", resultsAppend.preciseWords);
// })