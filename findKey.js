//Find Key

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

