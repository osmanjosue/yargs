import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    destination?: string;
    fileDestination?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor(

    ) { }

    execute({
        fileContent,
        destination = 'outputs',
        fileDestination = 'table'
    }: Options): boolean {

        try {
            fs.mkdirSync(destination, { recursive: true });
            fs.writeFileSync(`${destination}/${fileDestination}.txt`, fileContent);
            return true;

        } catch (error) {
            console.error(error)
            return false;
        }
    }
}