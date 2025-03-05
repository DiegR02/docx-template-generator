import fs from 'fs';

/**
 * Recursively searches for a specific key in an object and collects its values.
 *
 * @param {Object} obj - The object to search in.
 * @param {string} clave - The key to search for.
 * @param {Array} [resultados=[]] - An array to store the found values.
 * @returns {Array} An array containing the values associated with the specified key.
 */
export function searchKeys(obj, clave, resultados = []) {
    if (typeof obj !== "object" || obj === null) return resultados;

    if (clave in obj) resultados.push(obj[clave]);

    for (let key in obj) {
        searchKeys(obj[key], clave, resultados);
    }

    return resultados;
}

/**
 * Retrieves the first JSON file from a specified directory.
 *
 * @param {string} directory - The directory to search for JSON files.
 * @returns {string|null} The name of the first JSON file found, or null if no JSON file is present.
 */
export function getJSONFile(directory) {
    const files = fs.readdirSync(directory).filter(file => file.endsWith('.json'));
    return files.length > 0 ? files[0] : null;
}