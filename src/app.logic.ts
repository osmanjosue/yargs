import {yarg} from './config/plugins/args.plugin'
import fs from 'fs';

console.log(yarg);

let outputMessage = '';
const base = 5;
const headerMessage=`
===================================================
                  Tabla del ${ base }
===================================================\n
`;

for( let i = 1 ; i<=10 ; i++){
    outputMessage+= `${ base } x ${ i } = ${ base*i}\n`;    
}

console.log(headerMessage + outputMessage)

outputMessage = headerMessage + outputMessage;

const outputPath = `outputs/folder1/folder2/folder3`;

fs.mkdirSync( outputPath, {recursive: true});


fs.writeFileSync(`${outputPath}/tabla-${ base }.txt`, outputMessage);
console.log('File Created!');
