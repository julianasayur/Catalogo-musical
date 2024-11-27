const musicalModel = require('../models/musicalModel');

const getAllMusical =(req, res) => {
    const musical = musicalModel.getMusical();
    res.render('index', { musical});

};

const getMusical = (req, res) => {
    const musical = musicalModel.getMusicalById(req.params.id);
    if (musical) {
        res.render('musical', {musical});
    }else {
        res.status
    }
};