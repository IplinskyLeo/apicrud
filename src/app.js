// import { openDb } from "./configDB.js";
// import {
//   createTable,
//   insertPessoa,
//   updatePessoa,
//   selectPessoa,
//   selectPessoas,
//   deletePessoa,
// } from "./controller/Pessoa.js";

import express from "express";
const app = express();
app.use(express.json());

import router from "./routes.js";
app.use(router);

// createTable();

// app.get("/", (req, res) => {
//   res.send("Hello WorldY");
// });

// app.get("/pessoas", async (req, res) => {
//   let pessoas = await selectPessoas();
//   res.json(pessoas);
// });

// app.get("/pessoa", async (req, res) => {
//   let pessoa = await selectPessoa(req.body.id);
//   res.json(pessoa);
// });

// app.post("/pessoa", (req, res) => {
//   insertPessoa(req.body);
//   res.json({
//     statusCode: 200,
//   });
// });

// app.put("/pessoa", (req, res) => {
//   if (req.body && !req.body.id) {
//     res.json({
//       statusCode: "400",
//       message: "ID é obrigatório",
//     });
//   } else {
//     updatePessoa(req.body);
//     res.json({
//       statusCode: 200,
//     });
//   }
// });

// app.delete("/pessoa", async (req, res) => {
//   let pessoa = await deletePessoa(req.body.id);
//   res.json(pessoa);
// });

app.listen(3000, () => console.log("API rodando na porta 3000"));
