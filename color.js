function color() {
    texto = document.getElementById("texto").value;

    numero = parseInt(texto)
    if (numero <=10 ){
        document.getElementById("caja").style.backgroundColor = "blue";
    }
    else if (numero <=20){
        document.getElementById("caja").style.backgroundColor = "red";
    }
    else if (numero <=30){
        document.getElementById("caja").style.backgroundColor = "yellow";
    }   
    else if (numero <=40){
        document.getElementById("caja").style.backgroundColor = "black";
    } 
    else if (numero <=50){
        document.getElementById("caja").style.backgroundColor = "magenta";
    } 
    else if (numero <=60){
        document.getElementById("caja").style.backgroundColor = "green";
    } 
    else if (numero <=70){
        document.getElementById("caja").style.backgroundColor = "orange";
    } 
    else if (numero <=80){
        document.getElementById("caja").style.backgroundColor = "pink";
    } 
    else if (numero <=90){
        document.getElementById("caja").style.backgroundColor = "gray";
    } 
    else{
        document.getElementById("caja").style.backgroundColor = "white";
    }
}