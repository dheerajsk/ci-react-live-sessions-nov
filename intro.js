
// // Synchrnous program.
// // console.log("1");
// // console.log("2");
// // console.log("3");

// console.log("1");

// setTimeout(()=>{
//     console.log("2")
// }, 1000);

// console.log("3");


// // ex: reading file, calling apis, setTimeout.
// // technique to read response in future from async operations.
// // to read response from async operations.

// useState
// for this state when value changes, 
// component will refresh without destorying data.

let counter=1;
function updateCOunter(){

    counter++;
    console.log(counter);
}

updateCOunter();
updateCOunter();
updateCOunter();
updateCOunter();
updateCOunter();