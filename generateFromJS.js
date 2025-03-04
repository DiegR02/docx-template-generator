import fs from 'fs';
import { createReport } from 'docx-templates';
import { data } from './data/data.js';
import { buscarTodasLasClaves } from './utils/helpers.js';

const rapidos = buscarTodasLasClaves(data.envio, "rapido");

data.rapidos = rapidos;

async function generarDocumento() {
    const template = fs.readFileSync("templates/template1.docx", null);
    const buffer = await createReport({
        template,
        data,
        cmdDelimiter: ['{{', '}}'],
    });

    // 📌 Timestamp
    const outputFileName = `report-from-js_${new Date().toISOString().replace(/[-T:.Z]/g, "").slice(0, 14)}.docx`;
    const outputPath = `reports/${outputFileName}`;

    if (!fs.existsSync("reports")) {
        fs.mkdirSync("reports");
    }

    fs.writeFileSync(outputPath, buffer);
    console.log(`Documento generado exitosamente en: ${outputPath}`);
}

generarDocumento();