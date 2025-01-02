import fs from "fs";

export function addNote(req, res) {
    const note = req.body;

    const fileName = Date.now();

    fs.writeFile(
        `./notes/${fileName}.txt`,
        `${note.title}\n${note.description}`,
        (err) => {
            res.redirect("/");
        }
    );
}
