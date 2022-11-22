//COUNT LETTERS
//Take in a string and return an object that contains the characters as Keys and the number of occurences as values

const countLetters= string => {
  let result = {};
  for (let character of string) {
    !result[character] ? result[character] = 1 : result[character] += 1; //If the object isnt already populated with the character and count, create it = zero. Else, add one to the existing count.
  } return result;
}

module.exports = countLetters;

