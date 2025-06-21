import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { readFile, writeFile } from './utils/fileHelper.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, 'data', 'products.json');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
})

// GET all products
app.get('/api/products', (req, res) => {
    const products = readFile(dataPath);
    res.json(products);
});

// POST a new product
app.post('/api/products', (req, res) => {
    const { name, price, imageUrl } = req.body;
    const products = readFile(dataPath);

    const newProduct = {
        id: uuidv4(),
        name,
        price,
        imageUrl,
    };

    products.push(newProduct);
    writeFile(dataPath, products);
    res.status(201).json(newProduct);
});

// DELETE product by ID
app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;
    let products = readFile(dataPath);
    products = products.filter(product => product.id !== id);
    writeFile(dataPath, products);
    res.json({ message: 'Product deleted' });
});

app.listen(PORT, () => {
    console.log(`✅ Backend running at http://localhost:${PORT}`);
});
