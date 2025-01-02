import fs from "fs";

export function deleteNote(req, res) {
    const id = req.params.id;

    fs.unlink(`./notes/${id}.txt`, () => {
        res.redirect("/");
    });
}
