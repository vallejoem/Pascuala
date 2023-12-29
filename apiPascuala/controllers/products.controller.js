
const db = require("../models")
const { Op } = require("sequelize");
const fs = require('fs');

const Products = db.product;


const getAll = async (req, res) => {

    try {
        let products = await Products.findAll();
        res.status(200).json({ error: false, message: 'Listado de Productos', data: products });
    }
    catch (e) {
        console.error('Error fetching products:', e);
        res.status(400).json({ error: true, message: e });
    }

}

const createProduct = async (req, res) => {

    try {
        console.log(req.body);
        let body = req.body;

        if (req.files && req.files.length === 3) {
            body.images = req.files.map(file => file.filename);
        }
        let products = await Products.create(body);
        res.status(200).json({ error: false, message: 'Producto Añadido Exitosamente', data: products });


    }
    catch (e) {
        res.status(400).json({ error: true, message: e });
    }
}

const updateProduct = async (req, res) => {

    try {
        let id = req.params.id;
        console.log(id);
        let product = await Products.findByPk(id);
        if (product) {
            let body = req.body;
            if (req.files) {
                body.images = req.files.map(file => file.filename);

                if (product.images) {
                    const imagePaths = JSON.parse(product.images);
                    imagePaths.forEach(imagePath => {
                        const fullPath = 'public/products/'+imagePath;
                        fs.unlinkSync(fullPath);
                    });
                }

            }
            await Products.update(body, { where: { id: id } });
            res.status(200).json({ error: false, message: 'Producto Modificado Exitosamente', data: null });
        }
        else {
            res.status(404).json({ error: true, message: 'El id de producto no existe.!' });
        }

    }
    catch (e) {
        res.status(400).json({ error: true, message: e });
    }

}

const deleteProduct = async (req, res) => {

    try {
        let id = req.params.id;

        let product = await Products.findByPk(id);

        if (product) {
            await Products.destroy({ where: { id: id } });
            res.status(200).json({ error: false, message: 'Producto Eliminado Exitosamente', data: null });
        }
        else {
            console.error('Error fetching products:', e);
            res.status(404).json({ error: true, message: 'El id de producto no existe.!' });
        }
    }
    catch (e) {
        console.error('Error fetching products:', e);
        res.status(400).json({ error: true, message: e });
    }

}

module.exports = { getAll, createProduct, updateProduct, deleteProduct }