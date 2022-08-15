import express from "express";
import EditoraController from "../controllers/editorasController.js";

const router = express.Router();

router
    .get("/editoras", EditoraController.listareditoras)
    .get("/editoras/:id", EditoraController.listarEditorasPorId)
    .post("/editoras", EditoraController.cadastrareditora)
    .put("/editoras/:id", EditoraController.atualizarEditora)
    .delete("/editoras/:id", EditoraController.excluirEditora)

export default  router;