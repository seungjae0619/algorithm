function solution(s) {
  let count = 0;

  for (const ch of s) {
    ch === "(" ? count++ : count--;

    if (count < 0) return false;
  }

  return count === 0;
}
