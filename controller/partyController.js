import {Types} from "mongoose"
import Party from "../models/Party.js"

export const createParty = async(req, res) => {

   console.log(req.file)
   console.log(req)
   const { title, author, description, budget } = req.body
   let image
   if(req.file) {
      image = req.file
   }

   const party = {
      title, 
      author, 
      description, 
      budget, 
      image: image
   }

   const response = await Party.create(party)

   res.status(201).json({response, msg: "Festa criada com sucesso."})

}


export const getAllParties = async(req, res) => {

   const parties = await Party.find().sort("-createdAt")

   res.json(parties)

}


export const getParty = async(req, res) => {

   const { id } = req.params

   if(!Types.ObjectId.isValid(id)) {
      return res.status(422).json({msg: "Id com formato inválido"})
   }

   const party = await Party.findById(id)

   if(!party) {
      return res.status(404).json({msg: "Festa não encontrada."})
   }

   res.json(party)

}


export const deleteParty = async(req, res) => {

   const { id } = req.params

   if(!Types.ObjectId.isValid(id)) {
      return res.status(422).json("Id com formato inválido")
   }

   try {
      const party = await Party.findById(id)

      if(!party) {
         return res.status(404).json("Festa não encontrada.")
      }

      await Party.findByIdAndDelete(id)
      return res.json({msg: "Festa removida com sucesso."})
   } catch (error) {
      res.status(500).json("Erro no servidor")
   }

}


export const updateParty = async(req, res) => {

   const { id } = req.params
   const { title, author, description, budget } = req.body
   const newParty = {}

   if(!Types.ObjectId.isValid(id)) {
      return res.status(422).json("Id com formato inválido")
   }

   if(title) {
      newParty.title = title
   }

   if(author) {
      newParty.author = author
   }

   if(description) {
      newParty.description = description
   }

   if(budget) {
      newParty.budget = budget
   }

   if(req.file) {
      newParty.image = req.file.filename
   }


  try {
      const party = await Party.findByIdAndUpdate(id, newParty)
      if(!party) {
         return res.status(404).json("Festa não encontrada.")
      }
      return res.json(party)
  } catch (error) {
      res.status(500).json("Erro no servidor")
  }

}