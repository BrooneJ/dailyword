export const getJoin = (req, res) => {
    res.render("join");
}

export const postJoin = (req, res) => {
    res.redirect("/");
}

export const logout = (req, res) => {
    res.redirect("/");
}

export const getEdit = (req, res) => {
    res.render("edit-profile");
}

export const postEdit = (req, res) => {
    res.redirect("/");
}


export const getChangePassword = (req, res) => {
    res.render("users/change-password");
}

export const postChangePassword = (req, res) => {
    res.redirect("/")
}

export const see = (req, res) => {
    res.render("users/profile");
}