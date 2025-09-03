// FOR LOOP

for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 7) {
        // console.log("7 is better number");

    }
    // console.log(element);


}

for (let i = 1; i <= 10; i++) {

    // console.log(`outer loop ${i}`);

    for (let j = 1; j <= 10; j++) {

        // console.log(`inner loop ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i * j);


    }

}


let myArray = ["Iron man ", "Captain America", "Thor"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);

}


// BREAK AND CONTINUE

// for (let i = 1; i <= 20; i++) {

//     if (i == 5) {
//         console.log(`Detected 5`);
//         break

//     }
//     console.log(`Value of i is ${i}`);

// }


for (let i = 1; i <= 20; i++) {

    if (i == 5) {
        console.log(`Detected 5`);
        continue

    }
    console.log(`Value of i is ${i}`);

}