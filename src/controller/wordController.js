import Word from "../models/Word";

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home" });
}

export const search = (req, res) => {
    res.render("search", { pageTitle: "Search" });
}

export const detail = (req, res) => {
    res.render("detail", { pageTitle: "Word Detail" });
}

export const getEdit = (req, res) => {
    res.render("edit", { pageTitle: "Word Edit" });
}

export const postEdit = (req, res) => {
    res.render("detail", { pageTitle: "Word Detail" });
}

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Upload" });
}

export const postUpload = (req, res) => {
    const { word, pronun, mean, example } = req.body;
    console.log(word, pronun, mean, example);
    res.redirect("/");
}

export const deleteWord = (req, res) => {
    res.redirect("/");
}


