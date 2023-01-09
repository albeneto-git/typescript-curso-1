export function domInjector (selector: string){
    return function (target: any, propertKey: string){
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertKey}`);
        let elemento: HTMLElement;
        const getter = function(){
            if(!elemento){
                elemento = <HTMLElement> document.querySelector(selector)
                console.log(`Buscando elemento do DOM com o seletor 
                ${selector} para injetar em propertyKey ${propertKey}`);
            }
            return elemento;
        }
        Object.defineProperty(
            target,
            propertKey,
            {get: getter}
        );
    }
}