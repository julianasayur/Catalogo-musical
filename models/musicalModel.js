const musical = [
    {id: 1, artista: 'Bruno', tipo: 'pop'},
    {id: 2, artista: 'Gabi', tipo: 'rock'},
    {id: 3, artista: 'Le', tipo: 'rock-pop'},

];

const getMusical = () => musical;
const getMusicalById = (id) => musical.find(p => p.id === parseInt(id));
const createMusical = (artista, tipo) => musical.push(musical.length+1, artista, tipo)

module.exports = {getMusical, getMusicalById, createMusical};
