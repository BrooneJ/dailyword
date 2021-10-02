import User from "../models/User";
import Word from "../models/Word";

export const home = async (req, res) => {
    try {
        const words = await Word.find({}).sort({ createdAt: "desc" }).limit(10);
        // DB에 있는 모든 단어들을 홈화면에 보여줌
        return res.render("home", { pageTitle: "Home", words });
    } catch {
        res.render("home", { pageTitle: "Home" });
    }
}

export const search = async (req, res) => {
    const { keyword } = req.query;
    let words = [];
    if (words) {
        words = await Word.find({
            $or: [{
                title: {
                    $regex: new RegExp(`^${keyword}`, "i"),
                    // keyword로 시작하는 부분만 찾음
                }
            }, {
                pronun: {
                    $regex: new RegExp(`^${keyword}`, "i"),
                }
            }
            ]
        })
    }

    res.render("search", { pageTitle: "Search", words });
}

export const detail = async (req, res) => {
    const { id } = req.params;
    const words = await Word.findById(id).populate("owner");
    if (!words) {
        return res.status(404).render("404", { pageTitle: "Word not found." })
    }
    return res.render("detail", { pageTitle: words.title, words });
}

export const getEdit = async (req, res) => {
    const { id } = req.params;
    const words = await Word.findById(id);

    res.render("edit", { pageTitle: `${words.title}`, words });
}

export const postEdit = async (req, res) => {
    const { language, title, pronun, mean, example, from } = req.body;
    const { id } = req.params;

    const word = await Word.exists({ _id: id });

    if (!word) {
        res.status(404).redirect("/");
    }

    await Word.findByIdAndUpdate(id, {
        language,
        title,
        pronun,
        mean: mean.split(","),
        example: example.split(","),
        from,
    })
    return res.redirect(`/words/${id}`);

}

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Upload" });
}

export const postUpload = async (req, res) => {
    const { language, title, pronun, mean, example, from } = req.body;
    const { user: { _id } } = req.session;
    try {
        const newWord = await Word.create({
            language,
            title,
            pronun,
            mean: mean.split(","),
            example: example.split(","),
            from,
            owner: _id,
        })
        const user = await User.findById(_id);
        user.words.push(newWord);
        user.save();
        return res.redirect("/");
    } catch (error) {
        console.log(error);
        res.render("upload", { pageTitle: "Upload", errorMessage: error._message });
    }
}

export const deleteWord = async (req, res) => {
    const { id } = req.params;
    await Word.findByIdAndDelete(id);
    res.redirect("/");
}


export const loadPages = async (req, res) => {
    const { body: { pageCounter } } = req;
    const words = await Word.find({}).sort({ createdAt: "desc" }).limit(10).skip((pageCounter - 1) * 10);
    if (words.length === 0) {
        return res.sendStatus(404);
    }
    return res.status(201).json({ words });
}