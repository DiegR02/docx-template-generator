export function buscarTodasLasClaves(obj, clave, resultados = []) {
    if (typeof obj !== "object" || obj === null) return resultados;

    if (clave in obj) resultados.push(obj[clave]);

    for (let key in obj) {
        buscarTodasLasClaves(obj[key], clave, resultados);
    }

    return resultados;
}