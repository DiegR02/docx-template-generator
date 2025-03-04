import fs from 'fs';
import { createReport } from 'docx-templates';
import { data } from './data/data.js';
import { searchKeys } from './utils/helpers.js';

const rapidos = searchKeys(data.envio, "rapido");
data.rapidos = rapidos;

async function generateDocument() {
    const template = fs.readFileSync("templates/template.docx", null);
    const buffer = await createReport({
        template,
        data,
        cmdDelimiter: ['{{', '}}'],
    });

    const outputFileName = `report-from-js_${new Date().toISOString().replace(/[-T:.Z]/g, "").slice(0, 14)}.docx`;
    const outputPath = `reports/${outputFileName}`;

    if (!fs.existsSync("reports")) {
        fs.mkdirSync("reports");
    }

    fs.writeFileSync(outputPath, buffer);
    console.log(`Document successfully generated at: ${outputPath}`);
}

generateDocument();