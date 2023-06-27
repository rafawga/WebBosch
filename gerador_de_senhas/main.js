function exibirValores() {
  var quantidadeCaracteres = document.getElementById("caracteres").value;
  var incluirMaiusculas = document.getElementById("upper").checked;
  var incluirMinusculas = document.getElementById("low").checked;
  var incluirNumeros = document.getElementById("num").checked;
  var incluirSimbolos = document.getElementById("simbol").checked;
  var forte = 0;

  var caracteresPermitidos = '';
  if (incluirMaiusculas) {
    caracteresPermitidos += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    forte = forte + 1;

  }
  if (incluirMinusculas) {
    caracteresPermitidos += "abcdefghijklmnopqrstuvwxyz";
    forte = forte + 1;
  }
  if (incluirNumeros) {
    caracteresPermitidos += "0123456789";
    forte = forte + 1;
  }
  if (incluirSimbolos) {
    caracteresPermitidos += "!@#$%^&*()";
    forte = forte + 1;
  }

  if (forte == 0 || forte == 1) {
    $('.senha').removeClass('corG corY').addClass('corR');
  }
  else if (forte == 2) {
    $('.senha').removeClass('corR corG').addClass('corY');
  }
  else if (forte == 3 || forte == 4) {
    $('.senha').removeClass('corR corY').addClass('corG');
  }

  var totalCaracteresPermitidos = caracteresPermitidos.length;
  var senha = '';

  for (var i = 0; i < quantidadeCaracteres; i++) {
    var indiceAleatorio = Math.floor(Math.random() * totalCaracteresPermitidos);
    var caractereAleatorio = caracteresPermitidos.charAt(indiceAleatorio);
    senha += caractereAleatorio;
  }
  document.getElementById("senhaGerada").textContent = senha;


}
