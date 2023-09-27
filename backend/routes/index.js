import {getAllData ,getDataById ,updateData ,createData ,deleteData } from "../controllers/controllers.js"
import { Model } from '../models/models.js'
import express from 'express'

export const Router = express.Router()

Router.get('/', getAllData(Model));
Router.get('/:id', getDataById(Model));
Router.post('/', createData(Model));
Router.delete('/:id', deleteData(Model));
Router.put('/:id', updateData(Model));