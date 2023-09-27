//import { validarClave , validarClaveGet } from "../validations/index.js"; 

export const getAllData = (Model) => async (req, res, next) => {
    try{
        //validarClaveGet(req, res);
        const response = await Model.findAll();
        res.json(response);
    }catch(err){
        res.json({message: err.message});
        next(err)
    }
}

export const getDataById = (Model) => async (req, res, next) => {
    try{
        //validarClaveGet(req, res);
        const response = await Model.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(response);
    }catch(err){
        res.json({message: err.message});
        next(err)
    }
}

export const updateData = (Model) => async (req, res, next) => {
    try{
        //validarClave(req, res);
        const resultado = await Model.update(req.body , {
            where: {
                id: req.params.id
            }
        });
        res.json({
            status: true,
            resultado,
            message:"actualizado con exitos"
        });
    }catch(err){
        res.json({message: err.message});
        next(err)
    }
}

export const createData = (Model) =>  async (req, res, next) => {
    try{
        //validarClave(req, res);
        const resultado = await Model.create(req.body);
        res.json({
            status: true,
            resultado,
            message:"creado con exitos"
        });
    }catch(err){
        res.json({message: err.message});
        next(err)
    }
}

export const deleteData = (Model) =>  async (req, res, next) => {
    try{
        //validarClave(req, res);
        await Model.destroy({
            where: {id: req.params.id}
        });
        res.json({
            status: true,
            resultado,
            message:"Borrado con exitos"
        });
    }catch(err){
        res.json({message: err.message});
        next(err)
    }
}