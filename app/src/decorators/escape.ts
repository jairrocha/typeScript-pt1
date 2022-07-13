/*Decorator responsável por mover script do do retorno. (O chrorme já trata isso nativamente)*/

export function escape(
    target:any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: Array<any>){
        let retorno = metodoOriginal.apply(this, args);
        let expRegular = /<script>[\s\S]*?<\/script>/;
        if(typeof(retorno === 'string')){
            /*console.log(`@escape em ação na classe 
                ${this.constructor.name} para o método ${propertyKey}`);*/
            retorno = retorno.replace(expRegular,'');
        }
        
        return retorno;
    }
    return descriptor;
}