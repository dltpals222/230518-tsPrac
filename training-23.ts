const pokemonList = ['피카츄','라이츄','파이리','꼬부기']

pokemonList.splice(0,2,"야도란","또가스");

function exampleOne(array : string[], change1 : string, change2 : string):string{
  const result = array.splice(0,2,change1,change2)
  return result.join("")
}
const result = exampleOne(pokemonList, '야도란','또가스')
console.log(result)