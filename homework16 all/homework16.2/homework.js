// -----------------1--------------------
// function symmetry() {

//     const split = string.split('').reverse().join('');

//     if (string == split ) {

//         alert('true')
//     } else {
//         alert('false')

//     }
// }

// const string = prompt('Enter a palidrome');

// symmetry();
// ---------------------2----------------------
// ????
// function number(){

// }
// -----------------------3-------------------------
// function first(){
//     const words=['Adam','Sarah','Malkom']
//     const first=words.map(word=> word.substr(0,1))
//     const join=first.join('')
//     console.log(join);

// }
// first()

// --------------------------4-----------------------
function swap(str) {
    return str.split('').map(function(char) {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      })
      .join('');
  }
  
  let str = 'Hello  World!';
  let swappedStr = swap(str);
  console.log(swappedStr); 


// ----------------------------5------------------------------

// function number() {
//     const condition = /\d{1,5}$/
//     const string = prompt('Enter the number')
//     if (condition.test(string)) {
//         alert('true')
//     } else {
//         alert('false')
//     }
// }
// number()
