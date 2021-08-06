import Word from "../models/Word";

export const home = async (req, res) => {
    try {
        const words = await Word.find({})
        return res.render("home", { pageTitle: "Home", words });
    } catch {
        res.render("home", { pageTitle: "Home" });
    }
}

export const search = (req, res) => {
    res.render("search", { pageTitle: "Search" });
}

export const detail = async (req, res) => {
    const { id } = req.params;
    const words = await Word.findById(id);
    res.render("detail", { pageTitle: "Word Detail", words });
}

export const getEdit = async (req, res) => {
    const { id } = req.params;
    const words = await Word.findById(id);

    res.render("edit", { pageTitle: `${words.title} Edit`, words });
}

export const postEdit = async (req, res) => {
    const { title, pronun, mean, example } = req.body;
    const { id } = req.params;

    const word = await Word.findById(id);

    if (!word) {
        res.status(404).redirect("/");
    }

    await Word.findByIdAndUpdate(id, {
        title,
        pronun,
        mean,
        example,
    })
    return res.redirect(`/words/${id}`);

}

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Upload" });
}

export const postUpload = async (req, res) => {
    const { title, pronun, mean, example } = req.body;
    try {
        await Word.create({
            title,
            pronun,
            mean: mean.split(","),
            example,
        })
        return res.redirect("/");
    } catch (error) {
        console.log(error);
        res.render("upload", { pageTitle: "Upload", errorMessage: error._message });
    }
    res.redirect("/");
}

export const deleteWord = (req, res) => {
    res.redirect("/");
}


