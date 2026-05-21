function solution(n) {
  let answer = 0;
  let stringArr = n.toString().split("");
  let numArr = stringArr.map((num) => Number(num));

  return numArr.reduce((i, l) => i + l, 0);
}
