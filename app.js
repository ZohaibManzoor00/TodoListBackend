const express = require("express");
const cors = require("cors");

const todoRouter = require('./routes/todoRouter')

const app = express();

app.use(cors());
app.use(express.json());

app.use(todoRouter)

const PORT = process.env.port || 4000;

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));
