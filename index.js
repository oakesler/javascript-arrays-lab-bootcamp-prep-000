var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name) {
  var newkittens = [...kittens, name]
  return newkittens
}

function prependKitten(name) {
  
}