function descreverCarro(marca: string, aro?: number) { // ?: Argumentos opcionais
    if(aro){
        console.log("O carro é da marca " + marca + " e tem um aro " + aro);
    } else {
        console.log("O carro é da marca " + marca);
    }

}

descreverCarro("BMW", 20)
descreverCarro("VW")

