let a = 0;
let b = 1;

for (let i = 1; i < 40; i++) {
  soma_a_e_b = a + b;
  a = b;
  b = soma_a_e_b;

  console.log(soma_a_e_b);
}
