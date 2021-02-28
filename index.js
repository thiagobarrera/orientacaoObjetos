import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Thiago", 11122233309);
const cliente2 = new Cliente("Eduarda", 99922233309);

const contaCorrenteThiago = new ContaCorrente(1001, cliente1);
contaCorrenteThiago.depositar(500);
contaCorrenteThiago.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteThiago.transferir(valor, conta2);

console.log(contaCorrenteThiago);