function fibs(n) {
  let a = 0,
    b = 1,
    c;
  if (n == 1) console.log(0);
  else if (n == 2) console.log(0 + " " + 1);
  else {
    console.log(0);
    console.log(1);
    for (let i = 3; i <= n; i++) {
      c = a + b;
      console.log(c + " ");
      a = b;
      b = c;
    }
  }
}
fibs(8);
