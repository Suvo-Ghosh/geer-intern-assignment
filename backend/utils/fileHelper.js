import fs from 'fs';

export const readFile = (filePath) => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};

export const writeFile = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
