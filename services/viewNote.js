import fs from "fs";

export function viewNote(req, res) {
    fs.readFile(`./notes/${req.params.id}.txt`, "utf8", (err, data) => {
        data = data.split("\n");

        const [title, ...description] = data;

        res.render("note", {
            title: title,
            description: description,
            id: req.params.id,
        });
    });
}
