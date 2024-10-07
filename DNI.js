/*  -Pide DNI al usuario(con letra)
    -comprueba la letra
    -da un alert diciendo si ok
    -nuevo repositorio git, archivo index.html, js
    -commit repositorio en github, git push
    -enviar enlace a repositorio   */
    
    function comprobarDNI() {
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        
        let dniCompleto = prompt("Introduce tu DNI con la letra (ej. 12345678A):");
        
        // Separo número y letra:
        let numeroDNI = dniCompleto.substring(0, dniCompleto.length - 1);
        let letraDNI = dniCompleto.substring(dniCompleto.length - 1).toUpperCase();
        
        if (isNaN(numeroDNI) || numeroDNI.length != 8) {
            alert("El número de DNI no es válido");
            return;
        }
        
        let resto = numeroDNI % 23;
        let letraCorrecta = letras[resto];
        
        if (letraCorrecta === letraDNI) {
            alert("El DNI es correcto.");
        } else {
            alert(`La letra del DNI es incorrecta. Debería ser: ${letraCorrecta}`);
        }
    }
    
    comprobarDNI();
    




