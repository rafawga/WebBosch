function exibirValores() {
    var quantidadeCaracteres = document.getElementById("caracteres").value;
    var incluirMaiusculas = document.getElementById("upper").checked;
    var incluirMinusculas = document.getElementById("low").checked;
    var incluirNumeros = document.getElementById("num").checked;
    var incluirSimbolos = document.getElementById("simbol").checked;
  
    var caracteresPermitidos = '';
    if (incluirMaiusculas) {
      caracteresPermitidos += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (incluirMinusculas) {
      caracteresPermitidos += "abcdefghijklmnopqrstuvwxyz";
    }
    if (incluirNumeros) {
      caracteresPermitidos += "0123456789";
    }
    if (incluirSimbolos) {
      caracteresPermitidos += "!@#$%^&*()";
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
  