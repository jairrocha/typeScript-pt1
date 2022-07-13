export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            let t2 = performance.now();
            let divisor = 1000;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1;
                unidade = 'segundos';
            }
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}.`);
            return retorno;
        };
        return descriptor;
    };
}
