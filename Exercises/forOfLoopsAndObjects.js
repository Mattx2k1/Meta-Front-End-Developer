// Implementing a for of loop over an object

// This is the example Meta gives:

// var clothingItem = {
//     price: 50,
//     color: 'beige',
//     material: 'cotton',
//     season: 'autumn'
// }

// for( key of Object.keys(clothingItem) ) {
//     console.log(keys, ":", clothingItem[key])
// }

// This is the actual working example:

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

// keys was not recognized which throws a ReferenceError. Correcting 'keys' as 'key', will resolve the error

