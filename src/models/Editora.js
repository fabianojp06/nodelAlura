import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String}
        
    },
    {
        versionKey: false
    }
)           

const editoras = mongoose.model('editoras', autorSchema);

export default editoras;