var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyAppendKitten(name) {
  kittens.shift(name)
}