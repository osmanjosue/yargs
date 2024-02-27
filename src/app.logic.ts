import { yarg } from './config/plugins/args.plugin'
import fs from 'fs';

const { b: base, b: limit, s: showTable } = yarg;

let outputMessage = '';
const headerMessage = `
===================================================
                  Tabla del ${base}
===================================================\n
`;

for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (showTable) {
    console.log(outputMessage)
}

const outputPath = `outputs/folder1/folder2/folder3`;

fs.mkdirSync(outputPath, { recursive: true });


fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('File Created!');
