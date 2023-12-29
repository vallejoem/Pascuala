const db = require("../models");
const { Op } = require("sequelize");


const getAllClients = async (req, resp) => {
    try {
        console.log("Entrando en getAllClients");
        let clients = await db.client.findAll();
        
        resp.status(200).json({ error: false, message: 'Listado Clientes', data:clients });
    }
    catch (e) {
        console.error("Error en getAllClients:", e);
        resp.status(400).json({ error: true, message: e });
    }

}

const CreateClient = async (req, resp) => {

    try {
        let client = await db.client.create(req.body);
        resp.status(200).json({ error: false, message: 'Cliente Creado exitosamente', data: client });
    }
    catch (e) {
        resp.status(400).json({ error: true, message: e });
    }

}

const deleteClient = async (req, resp) => {

    try {
        let id = req.params.id;
        await db.client.findAll({ where: { id: id } }).then(async (result) => {
            if (result.length > 0) {
                await db.client.destroy({ where: { id: id } });
                resp.status(200).json({ error: false, message: 'Cliente eliminado exitosamente', data: null });
            }
            else {
                resp.status(404).json({ error: true, message: 'ID clientes no se encuentra', data: null });
            }

        })


    }
    catch (e) {
        console.error("Error en deleteClient:", e);
        resp.status(400).json({ error: true, message: e });
    }

}

const updateClient = async (req, resp) => {
    try {
        let id = req.params.id;
        console.log(id);
        let client = await db.client.findByPk(id);

        console.log("Consulta exitosa. Resultados:", client);
        if(client){
            await db.client.update(req.body, { where: { id: id } });
            resp.status(200).json({ error: false, message: 'Cliente Modificado exitosamente', data: null });
        }
        else{
            resp.status(404).json({ error: true, message: 'ID cliente no se encuentra', data: null });
        }
        
    }
    catch (e) {
        console.error("Error al actualizar cliente", e);
        resp.status(400).json({ error: true, message: e });
    }

}

module.exports = { getAllClients, CreateClient, deleteClient, updateClient }