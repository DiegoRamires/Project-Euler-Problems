somarMultiplos_3_e_5(1000);

function somarMultiplos_3_e_5(limite) {
  let divisivel_por_3 = 0;
  let divisivel_por_5 = 0;

  for (i = 0; i <= limite; i++) {
    if (i % 3 === 0) divisivel_por_3 += 1;

    if (i % 5 === 0) divisivel_por_5 += 1;
  }

  console.log(divisivel_por_3 + divisivel_por_5);
}
