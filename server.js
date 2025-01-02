import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
    homeRoute,
    addNote,
    editNote,
    renderEditNote,
    deleteNote,
    viewNote,
} from "./services/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;

// form data parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting up a public static file
app.use(express.static(path.join(__dirname, "public")));

// setting up view engine
app.set("view engine", "ejs");

// home route
app.get("/", homeRoute);

// Add note route
app.post("/add-note", addNote);

// Viewing single notes
app.get("/note/:id", viewNote);

// Deleting a note
app.get("/delete-note/:id", deleteNote);

// Edit form render
app.get("/edit-note/:id", renderEditNote);

// Main edit route
app.post("/edit-note/:id", editNote);

// Listening for requests
app.listen(port, () => {
    console.log(`Server running at => http://localhost:${port}`);
});
