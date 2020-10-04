// Testing JavaScript knowledge

let add = function ( a, b, c ){

   return a + b + c;
}


let result = add( 5, 5, 5 );

console.log(result);


// Unix Epoch - January 1st 1970 00:00:00

const now = new Date()
const timestamp = now.getTime()

const myDate = new Date()

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth}`)
// console.log(`Day of month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

console.log(now.toString());

console.log(moment().subtract(6, 'days').calendar());

