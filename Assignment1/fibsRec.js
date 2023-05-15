function fibsRec(n) {
  if (n == 1) return 0;
  else if (n == 2) return 1;
  else return fibsRec(n - 2) + fibsRec(n - 1);
}
for (let i = 1; i <= 8; i++) {
  console.log(fibsRec(i));
}