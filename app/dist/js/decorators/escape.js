export function escape(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        let expRegular = /<script>[\s\S]*?<\/script>/;
        if (typeof (retorno === 'string')) {
            retorno = retorno.replace(expRegular, '');
        }
        return retorno;
    };
    return descriptor;
}
