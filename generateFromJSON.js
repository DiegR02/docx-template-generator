import fs from 'fs';
import { createReport } from 'docx-templates';
import data from "./data/data.json" assert { type: "json" };

async function generarDocumento() {
    const template = fs.readFileSync("templates/template1.docx", null);
    const buffer = await createReport({
        template,
        data,
        cmdDelimiter: ['{{', '}}'],
    });

    // 📌 Timestamp
    const outputFileName = `report-from-json_${new Date().toISOString().replace(/[-T:.Z]/g, "").slice(0, 14)}.docx`;
    const outputPath = `reports/${outputFileName}`;

    if (!fs.existsSync("reports")) {
        fs.mkdirSync("reports");
    }

    fs.writeFileSync(outputPath, buffer);
    console.log(`Documento generado exitosamente en: ${outputPath}`);
}

generarDocumento();