import fs from "fs";

export function editNote(req, res) {
    const note = req.body;

    const fileName = req.params.id;

    fs.writeFile(
        `./notes/${fileName}.txt`,
        `${note.title}\n${note.description}`,
        (err) => {
            res.redirect(`/note/${req.params.id}`);
        }
    );
}
