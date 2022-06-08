var n_aleatorio = parseInt(Math.random()*11);
var tentativas = 3

console.log(tentativas)
console.log(n_aleatorio)
console.log(bloco)

function verificar() {
  var seu_numero = barra.value
        
  if (tentativas > 0) {
    if (seu_numero == n_aleatorio) {
      bloco.innerHTML = "você acertou!"
    }
    else if(seu_numero < n_aleatorio) {
      bloco.innerHTML = "deve ser maior!"
      tentativas = tentativas - 1
    }
    else if(seu_numero > n_aleatorio) {
      bloco.innerHTML = "deve ser menor!"
      tentativas = tentativas - 1
    }

  } else if (tentativas != seu_numero) {
    bloco.innerHTML = "Suas tentativas acabaram. O número secreto era " + n_aleatorio
  }
}
