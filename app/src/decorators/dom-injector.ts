export function domInjector(seletor: string ){
    return function(target: any, propertyKey: string){

        let elemento: HTMLElement

        const getter = function(){
            
            if (!elemento) {
                elemento = document.querySelector(seletor);
                //console.log('buscando elemento no dom');                 
            }

            return elemento;
        }

  

        Object.defineProperty(
            target,
            propertyKey,
            {get:getter}
        );
    }
}