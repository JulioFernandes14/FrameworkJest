const fn = require('./funcoes.js');

test('Contagem de caracteres',function(){

    expect(fn.contarCaracteres('Final da Champions League.')).toBe(26);

}) ;

test('Maior número',function(){

    expect(fn.mostrarMaiorNumero([1,3,2,4,5,9,8])).toBe(9);

}) ;

test('É par',function(){

    expect(fn.checarSeEhPar(2)).toBeTruthy;

}) ;