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

export const postJoin = async (req, res) => {
    const { username, email, password, password2, language } = req.body;

    if (password !== password2) {
        return res.status(404).render("join", {
            pageTitle: "Join",
            errorMessage: "비밀번호가 일치하지 않습니다.",
        })
    }

    const exists = await User.exists({ $or: [{ username }, { email }] });

    if (exists) {
        return res.render("join", {
            pageTitle: "Join",
            errorMessage: "이미 존재하는 Username 혹은 email이 있습니다.",
        })
    }

    try {
        await User.create({
            username,
            email,
            password,
            language,
        })
        return res.redirect("/login");
    } catch (error) {
        console.log(error);
        res.render("join", {
            pageTitle: "Join",
            errorMessage: error._message,
        })
    }
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