export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const search = (req, res) => res.render("search");

export const detail = (req, res) => {
    res.render("detail");
}

export const getEdit = (req, res) => {
    res.render("edit");
}

export const postEdit = (req, res) => {
    res.render("detail");
}

export const getUpload = (req, res) => {
    res.render("upload");
}

export const postUpload = (req, res) => {
    res.redirect("/");
}

export const deleteWord = (req, res) => {
    res.redirect("/");
}


