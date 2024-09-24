
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

/*marvel_heros.push(dc_heros)
// push will directly push one array into another
console.log(marvel_heros);
console.log(marvel_heros[3][1]);
*/

/*
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
cancat will add one array elements to the another array.
const all_new_heros = [...marvel_heros, ...dc_heros]
// it is sprade operator that work like the cancate
console.log(all_new_heros);
*/


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// It will make array Flate means it will make single array
console.log(real_another_array);

/*
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))// It will convert the Hitesh to array
console.log(Array.from({name: "hitesh"})) // interesting
*/
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
