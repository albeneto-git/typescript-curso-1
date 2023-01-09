export function domInjector(selector) {
    return function (target, propertKey) {
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
                console.log(`Buscando elemento do DOM com o seletor 
                ${selector} para injetar em propertyKey ${propertKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertKey, { get: getter });
    };
}
