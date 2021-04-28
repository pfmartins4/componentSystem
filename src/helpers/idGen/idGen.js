const idGen = (idLenght = 6) => {
  const alphabet =
    "abcdefghijklmnopqrstuvxWYzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789_-";
  const alphabetLength = alphabet.length;
  let id = "id-";
  for (let i = 0; i < idLenght; i++) {
    const random = Math.random(0, alphabetLength - 1);
    const charIndex = parseInt(random * alphabetLength - 1);
    id += alphabet.charAt(charIndex);
  }
  return id;
};
export default idGen;
