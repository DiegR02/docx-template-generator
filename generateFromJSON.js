import fs from 'fs';
import { createReport } from 'docx-templates';
import path from 'path';
//import data from "./data/data.json" with { type: "json" };
import { searchKeys } from './utils/helpers.js';

const dataDirectory = './data/';

function getJSONFile(directory) {
    const files = fs.readdirSync(directory).filter(file => file.endsWith('.json'));
    return files.length > 0 ? files[0] : null;
}

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