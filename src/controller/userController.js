import User from "../models/User";

export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "Login" });
}

export const postLogin = (req, res) => {
    res.redirect("/");
}

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
}

export const postJoin = (req, res) => {
    res.redirect("/");
}

export const logout = (req, res) => {
    res.redirect("/");
}

export const getEdit = (req, res) => {
    res.render("edit-profile", { pageTitle: "User Edit" });
}

export const postEdit = (req, res) => {
    res.redirect("/");
}


export const getChangePassword = (req, res) => {
    res.render("users/change-password", { pageTitle: "Change Password" });
}

export const postChangePassword = (req, res) => {
    res.redirect("/")
}

export const see = (req, res) => {
    res.render("users/profile", { pageTitle: "Profile" });
}