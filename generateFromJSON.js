import fs from 'fs';
import path from 'path';
import { createReport } from 'docx-templates';
import { searchKeys, getJSONFile } from './utils/helpers.js';

const dataDirectory = './data/';

const jsonFile = getJSONFile(dataDirectory);

if (!jsonFile) {
    console.error("JSON file not found.");
    process.exit(1);
}

const jsonFilePath = path.join(dataDirectory, jsonFile);
const rawData = fs.readFileSync(jsonFilePath, 'utf-8');

const data = JSON.parse(rawData);
const rapidos = searchKeys(data.envio, "rapido");
data.rapidos = rapidos;

/**
 *
 * Reads a DOCX template file, processes it using the provided data (json file), and saves the generated report
 * in the "reports" directory with a timestamped filename.
 *
 * @async
 * @function generateDocument
 * @returns {Promise<void>} A promise that resolves when the document is successfully created.
 */
async function generateDocument() {
    const template = fs.readFileSync("templates/template.docx", null);
    const buffer = await createReport({
        template,
        data,
        cmdDelimiter: ['{{', '}}'],
    });

    const outputFileName = `report-from-json_${new Date().toISOString().replace(/[-T:.Z]/g, "").slice(0, 14)}.docx`;
    const outputPath = `reports/${outputFileName}`;

    if (!fs.existsSync("reports")) {
        fs.mkdirSync("reports");
    }

    fs.writeFileSync(outputPath, buffer);
    console.log(`Document successfully generated at: ${outputPath}`);
}

generateDocument();