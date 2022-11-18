const findKey = function(object, callback) {
  //let keyList = Object.keys(object);
  //console.log(object["Blue Hill"]);
  for (let key in object) {
    //console.log("key =", key)
    //console.log("callback key =", callback(object[key]))
    if (callback(object[key])) {
      return key;
    }
  }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

//let obj = { "test" : { hello : 2}}
//console.log(obj["test"]);