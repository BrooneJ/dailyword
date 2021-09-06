import User from "../models/User";
import Word from "../models/Word";

export const home = async (req, res) => {
    let nowPage = parseInt(req.query.page || 1);
    let startPage = nowPage;
    if (!(nowPage % 10)) {
        startPage = nowPage - 1;
    }
    let start = Math.floor(startPage / 10) * 10;
    let end = Math.ceil(nowPage / 10) * 10;

    if (nowPage < 1) {
        return res.sendStatus(404);
    }

    try {
        const words = await Word.find({}).sort({ createdAt: "desc" }).limit(10).skip((nowPage - 1) * 10);
        // DB에 있는 모든 단어들을 홈화면에 보여줌
        const postCount = await Word.countDocuments();
        // count가 사라질 예정이라고 해서 count 대신 countDocuments을 사용
        const lastPage = Math.ceil(postCount / 10);
        end = end > lastPage ? lastPage : end;

        return res.render("home", { pageTitle: "Home", words, start, end, nowPage, lastPage });
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
    const { title, pronun, mean, example, from } = req.body;
    const { id } = req.params;

    const word = await Word.exists({ _id: id });

    if (!word) {
        res.status(404).redirect("/");
    }

    await Word.findByIdAndUpdate(id, {
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
    console.log(words);
    if (words.length === 0) {
        return res.sendStatus(404);
    }
    return res.status(201).json({ words });
}