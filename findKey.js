//Find Key
//takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined
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

module.exports = findKey;

