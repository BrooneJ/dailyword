import User from "../models/User";
import bcrypt from "bcrypt";

export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "Login" });
}

export const postLogin = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).render("login", {
            pageTitle: "Login",
            errorMessage: "유저가 존재하지 않습니다.",
        })
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
        return res.status(404).render("login", {
            pageTitle: "Login",
            errorMessage: "잘못된 비밀번호 입니다.",
        })
    }
    req.session.loggedIn = true;
    req.session.user = user;

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
            avatarUrl: "https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg",
            // avatarUrl: "uploads/avatars/default_img.png",
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
    req.session.destroy();
    return res.redirect("/");
}

export const getEdit = (req, res) => {
    res.render("edit-profile", { pageTitle: "User Edit" });
}

export const postEdit = async (req, res) => {
    const {
        session: {
            user: { _id, avatarUrl }
        },
        body: { username, email },
        file,
    } = req;
    console.log(file);
    const updatedUser = await User.findByIdAndUpdate(_id, {
        avatarUrl: file ? file.location : avatarUrl,
        username,
        email,
    }, { new: true });
    req.session.user = updatedUser;
    return res.redirect("/users/edit");
}


export const getChangePassword = (req, res) => {
    res.render("users/change-password", { pageTitle: "Change Password" });
}

export const postChangePassword = async (req, res) => {
    const { oldpassword, newpassword, checknewpassword } = req.body;
    const { session: { user: { _id, password } } } = req;

    // 비밀번호가 틀릴 경우
    const ok = await bcrypt.compare(oldpassword, password);
    if (!ok) {
        return res.status(404).render("users/change-password", { pageTitle: "Change Password", errorMessage: "비밀번호가 일치하지 않습니다." })
    }

    // 확인 비밀번호가 일치 하지 않을 경우
    if (newpassword !== checknewpassword) {
        return res.status(404).render("users/change-password", { pageTitle: "Change Password", errorMessage: "새 비밀번호와 확인 비밀번호가 일치하지 않습니다." });
    }

    // 유저 id를 찾아서 비밀번호 변경
    const userinfo = await User.findById(_id);
    userinfo.password = newpassword;
    await userinfo.save();
    res.redirect("/")
}

export const see = async (req, res) => {
    const { id } = req.params;
    const wordsData = await User.findById(id).populate({
        path: "words",
        options: {
            sort: {
                createdAt: "desc"
            },
            limit: 10,
        }
    });

    return res.render("users/profile", { pageTitle: "My Word", words: wordsData.words });
}

export const mypageLoading = async (req, res) => {
    const { body: { pageCounter } } = req;
    const { id } = req.params;
    const wordsData = await User.findById(id).populate({
        path: "words",
        options: {
            sort: {
                createdAt: "desc"
            },
            limit: 10,
            skip: (pageCounter - 1) * 10,
        }
    });
    if (wordsData.words.length === 0) {
        return res.sendStatus(404);
    }
    return res.status(201).json({ words: wordsData.words });
}