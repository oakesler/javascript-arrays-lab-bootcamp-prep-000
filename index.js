var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyPrependKitten(name) {
  shift(name).destructivelyPrependKitten
}