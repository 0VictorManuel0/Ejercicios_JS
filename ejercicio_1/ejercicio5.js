let myArray = [1,2,9,3,4];

let min = myArray[0];

menor(myArray);

function menor(myArray) {
    // for (let i = 0; i < myArray.length; i++) {
    //     if (myArray[i]<min) {
    //         min=myArray[i]
    //     }
    // }
    // console.log(`el valor minimo es ${min}`);
    let min = Math.min(...myArray);
    console.log(min);
}

mayor(myArray);
function mayor(myArray) {
    // for (let i = 0; i < myArray.length; i++) {
    //     if (myArray[i]>min) {
    //         min=myArray[i]
    //     }
    // }
    // console.log(`el valor minimo es ${min}`);
    let min = Math.max(...myArray);
    console.log(min);
}