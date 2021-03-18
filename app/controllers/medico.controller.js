require('dotenv').config()
const sql = require("../models/db.js");
const db = require("../models");
const sequelize = require('sequelize');
const MedicoModel = db.medicoModel;
const Op = require('sequelize').Op;
class MedicoController {

//POST

static postmedicodetails = async (req, res) => {
    const medicoDetails =await MedicoModel.build({
      nome: req.body.nome,
      crm: req.body.crm,
      telefonefixo: req.body.telefonefixo,
      telefonecelular: req.body.telefonecelular,
      cep: req.body.cep,
      especialidade: req.body.especialidade,      
 });
 await medicoDetails.save()
 if(!medicoDetails){
    return res.status(200).send({
      status: 404,
      message: 'No data found'
 });
 }
 res.status(200).send({
    status: 200,
    message: 'Data Save Successfully',
 });
 }

 catch(error){
    console.log(error)
    return res.status(400).send({
    message:'Unable to insert data',
    errors: error,
    status: 400
 });
 }
  
//FIND

 static getmedicodetails = async (req, res) => {
    const medicoDetails = await MedicoModel.findAll();

 if(!medicoDetails){
    return res.status(200).send({
    status: 404,
    message: 'No data found'
 });
 }
 res.status(200).json(medicoDetails).send({
    status: 200,
    message: 'Data find Successfully',
       
 });
 }
 catch(error){
    console.log(error)
    return res.status(400).send({
      message:'Unable to find data',
      errors: error,
      status: 400
 });
 } 

//UPDATE

static updatedetails = async (req, res) => {
    const id=req.body.id;
    const medicoDetails =await MedicoModel.update({
      nome: req.body.nome,
      crm: req.body.crm,
      telefonefixo: req.body.telefonefixo,
      telefonecelular: req.body.telefonecelular,
      cep: req.body.cep,
      especialidade: req.body.especialidade,   
 },
 {where: {id: req.body.id}});
 
 if(!medicoDetails){
    return res.status(200).send({
      status: 404,
      message: 'No data found'
 });
 }
 res.status(200).send({
    status: 200,
    message: 'Data Update Successfully'
 });
 }
 catch(error){
    console.log(error)
    return res.status(400).send({
    message:'Unable to update data',
    errors: error,
    status: 400
 });
 }

//DELETE

static deletedetails = async (req, res) => {
    const id= req.body.id;
    const medicoDetails = await MedicoModel.destroy({
    where: { id: id }
 });
 if(!medicoDetails){
    return res.status(200).send({
      status: 404,
      message: 'No data found'
 });
 }
 res.status(200).send({
    status: 200,
    message: 'Data Delete Successfully'
 });
 }
 catch(error){
    console.log(error)
    return res.status(400).send({
      message:'Unable to Delete data',
      errors: error,
      status: 400
 });
 }
}
module.exports = MedicoController