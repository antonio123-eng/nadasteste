import mongoose from "mongoose"

export const connectDB = async() => {
   await mongoose.connect("mongodb+srv://patricio:tJD97wEdwaOKbwUi@partydeploy.tjfhlm7.mongodb.net/?retryWrites=true&w=majority")
   console.log("Conectou com sucesso")
}
