/**
    Codewars link:
    https://www.codewars.com/kata/55c45be3b2079eccff00010f
 */

const order = (words) => {
  let sorted = words.split(' ');
  sorted.sort((f, n) => {
    return f.match(/\d+/)[0] > n.match(/\d+/)[0] ? 1 : -1;
  });
  return sorted.join(' ');
}