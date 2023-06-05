//Comparacao
/*
== igual a / comparando apenas o valor (string e numero com o mesmo valor (ex: 2)) - verifica o valor
=== estritamente igual / verifica o tipo da variavel
!= diferente de
> maior que
>= maior ou igual que
< menor que
<= menor ou igual que
*/

// ==
const nome_do_cartao = "Leticia"; //nome legitimo
const nome_do_site = "Luana";

const sao_iguais = nome_do_cartao == nome_do_site;
console.log(sao_iguais);

const nome_do_cartao2 = "Joao"; //nome legitimo
const nome_do_site2 = "Joao";

const sao_iguais2 = nome_do_cartao2 == nome_do_site2;
console.log(sao_iguais2);

// ===

const saldo = 100;
const saldo_string = "100";

const sao_iguais3 = saldo === saldo_string;
console.log(sao_iguais3);

// !=
const nome_do_cartao3 = "Leticia"; //nome legitimo
const nome_do_site3 = "Luana";

const sao_diferentes = nome_do_cartao3 != nome_do_site3;
console.log(sao_diferentes);

const saldo_do_banco = 100;
const saque_do_banco = 200;

const pode_sacar = saldo_do_banco >= saque_do_banco;
console.log(pode_sacar)

/*
Operadores Logicos
&& - E
// - OU
! - Negacao
*/
