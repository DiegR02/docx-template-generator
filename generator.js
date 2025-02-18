import fs from 'fs';
import { createReport } from 'docx-templates';

const data = {
    nombre: "Juan Pérez",
    fecha: new Date().toLocaleDateString(),
    reporte: "Este es el informe del mes de febrero."
};

async function generarDocumento() {
    const template = fs.readFileSync("Document.docx", null);
    const buffer = await createReport({
        template,
        data,
        cmdDelimiter: ['{{', '}}'],
    });

    fs.writeFileSync("report.docx", buffer);
    console.log("Documento generado exitosamente.");
}

generarDocumento();