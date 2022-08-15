import { Router } from "express";

import {
  createTable,
  insertPessoa,
  updatePessoa,
  selectPessoa,
  selectPessoas,
  deletePessoa,
} from "./controller/Pessoa.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    statuscode: 200,
    msg: "API rodando.",
  });
});

router.get("/pessoas", selectPessoas);
router.get("/pessoa", selectPessoa);
router.post("/pessoa", insertPessoa);
router.put("/pessoa", updatePessoa);
router.delete("/pessoa", deletePessoa);

export default router;
