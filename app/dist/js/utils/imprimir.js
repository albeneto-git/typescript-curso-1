export function imprimir(...objetos) {
    objetos.forEach(negociacao => {
        console.log(negociacao.paraTexto());
    });
}
