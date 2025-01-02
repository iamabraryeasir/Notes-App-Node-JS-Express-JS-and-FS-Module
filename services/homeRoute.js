import fs from "fs";

export function homeRoute(req, res) {
    fs.readdir("./notes", (err, notes) => {
        if (err) return;

        const newNotesPromises = notes.map((note) => {
            return new Promise((resolve, reject) => {
                fs.readFile(`./notes/${note}`, "utf8", (err, data) => {
                    if (err) reject(err);

                    data = data.split("\n");

                    const noteObject = {
                        id: note.slice(0, -4),
                        title: data[0],
                    };

                    resolve(noteObject);
                });
            });
        });

        // Wait for all files to be read before rendering
        Promise.all(newNotesPromises)
            .then((newNotes) => {
                res.render("index", { notes: newNotes });
            })
            .catch((err) => {
                res.status(500).send("Error reading files");
            });
    });
}
