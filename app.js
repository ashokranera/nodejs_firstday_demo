// console.log('window is Global Object')

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// setTimeout(() => {

//     console.log('3 seconds passed:) ')
    
// }, 3000);

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// let time = 0;
// let timer = setInterval(() => {

//     time +=2;
    
//     console.log(time + ' second have passed')

    // if(time > 5){
    //     clearInterval(timer)
    // }
    
// }, 2000);


// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------


// var time = 1
// var timer = setInterval(() => {
//     time++;

//     if(time>5){
//         clearInterval(timer);
//     }
//     console.log('hello')
// }, 2000);




// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// console.log(__dirname);
// console.log(__filename);



// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// etTimeout(() => {
//     console.log('setTimeout')
// }, 2000);

// s
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------


// let message = () => {
     
//     console.log('setTimeout using expression')
// }
// setTimeout(message, 5000);

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// console.log('1');
// setTimeout(() => {

//     console.log('2');
    
// }, 0);


// console.log('3');
// console.log('4');
// console.log('5');

// console.log(1) => event loop => execution
// console.log('2'); => setTimeout() => Event Table Store and wait to delay time ,
//                                       then time is over the event go to Event Queue console.log('2')


// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// SetImmediate()
//   use SetImmediate when you want to execute some async. but as soon as
//    possible and after finishing the current block

//    setImmediate(() =>{
//        console.log('Immediate function')
//    })
   
//    setTimeout(() => {
//     console.log('setTimeout')
//     }, 0)

//    process.nextTick(() => {
//     console.log('nextTick')
//     },)

// //    console.log('first')


// --------------------------------------------------------------------------------------------

setImmediate(() =>{
    console.log('Immediate function')
})

setTimeout(() => {
    console.log('setTimeout')
    }, 100)

//     o/p = Immediate function, setTimeout