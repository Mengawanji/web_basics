// console.log('Hello Senior Developer');


// let num = 11;
// let string = 'Good Job';
// let sleep = true;

// if (num == 10){
//     console.log('Great buddy');
// }else{
//     console.log('Get to work');
// }

// document.getElementById('box').innerHTML = string

// document.getElementById('box').addEventListener('click', function(){
//     alert('CLick me'); 
// })  




// for(var i = 0; i < 11; i++){
//     console.log(i);
// }


// let cars = ['Toyota','Mercedes','Kia','Chervrolette']
 
// function carNames(){
//     for (let i=0; i<cars.length; i++ ){
//         console.log(cars[i])
//     }
// }

// carNames();

//    let arr = [1, 4, 7, 10]

//    for(i=0; i <= arr.length ; i++){
//     console.log(arr[i]);
//    }

let basket = ['Apple','Oranges','Mangos','avocado'];


for(let i = 0 ; i < basket.length ; i++){
    console.log(basket[i]);
}

basket.forEach( item => {
    console.log(item);
})

// for of
// Iterating - Arreys , strings

for (item of basket){
    console.log(item);
}

// for in
// Enumerating - Objects

let personAge ={
    Jery : 4,
    Mary: 7,
    John: 6     
}


for (item in personAge){
    console.log (item);
}


const loginName = ' John';
const greet = document.getElementById('Hi-msg');

greet.textContent += loginName === ''? 'Guest': loginName ;