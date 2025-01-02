import fs from "fs";

export function renderEditNote(req, res) {
    const id = req.params.id;

    fs.readFile(`./notes/${id}.txt`, "utf8", (err, data) => {
        const [title, ...description] = data.split("\n");
        res.render("edit", { id, title, description: description.join("\n") });
    });
}
