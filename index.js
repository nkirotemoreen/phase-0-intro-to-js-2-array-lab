// Write your solution here!
//the code on phase1
let cats = ["Milo", "Otis", "Garfield"]

 let destructivelyAppendCat = function (name) {
    cats.push(name)
 }

let destructivelyPrependCat = function (name) {
        cats.unshift(name)
}

let destructivelyRemoveLastCat = function () {
    cats.pop()
}

let destructivelyRemoveFirstCat = function () {
    cats.shift()
}

let appendCat = function (name) {
    let copy = [...cats, name]
    return copy
}

let prependCat = function (name) {
    let copy = [name, ...cats]
    return copy
}

let removeLastCat = function () {
    let copy = [...cats]
    copy.pop()
    return copy
}

let removeFirstCat = function () {
    let copy = [...cats]
    copy.shift()
    return copy
}

 