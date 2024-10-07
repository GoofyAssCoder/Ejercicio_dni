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
            alert("La letra de tu DNI es una T");
            break;
        case 1:
            alert("La letra de tu DNI es una R");
            break;
        case 2:
            alert("La letra de tu DNI es una W");
            break;
        case 3:
            alert("La letra de tu DNI es una A");
            break;
        case 4:
            alert("La letra de tu DNI es una G");
            break;
        case 5:
            alert("La letra de tu DNI es una M");
            break;
        case 6:
            alert("La letra de tu DNI es una Y");
            break
        case 7:
            alert("La letra de tu DNI es una F");
            break;
        case 8:
            alert("La letra de tu DNI es una P");
            break;
        case 9:
            alert("La letra de tu DNI es una D");
            break;
        case 10:
            alert("La letra de tu DNI es una X");
            break;
        case 11:
            alert("La letra de tu DNI es una B");
            break;
    
        default:
            alert("Ha ocurrido un error :(");
            break;
    }




