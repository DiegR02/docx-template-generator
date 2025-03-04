export function searchKeys(obj, clave, resultados = []) {
    if (typeof obj !== "object" || obj === null) return resultados;

    if (clave in obj) resultados.push(obj[clave]);

    for (let key in obj) {
        searchKeys(obj[key], clave, resultados);
    }

    return resultados;
}