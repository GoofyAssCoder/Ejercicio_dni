/*  -Pide DNI al usuario(con letra)
    -comprueba la letra
    -da un alert diciendo si ok
    -nuevo repositorio git, archivo index.html, js
    -commit repositorio en github, git push
    -enviar enlace a repositorio   */
    
    let dialog_ = prompt("Dame tu DNI, sin la letra:");
    resto = dialog_%23;

    switch (resto) {
        case 0:
            console.log("T");
            break;
        case 1:
            console.log("R");
            break;
        case 2:
            console.log("W");
            break;
        case 3:
            console.log("A");
            break;
        case 4:
            console.log("G");
            break;
        case 5:
            console.log("M");
            break;
        case 6:
            console.log("Y");
            break
        case 7:
            console.log("F");
            break;
        case 8:
            console.log("P");
            break;
        case 9:
            console.log("D");
            break;
        case 10:
            console.log("X");
            break;
        case 11:
            console.log("B");
            break;
    
        default:
            console.log("Ha ocurrido un error");
            break;
    }

    //console.log(user);
    




