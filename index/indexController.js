exports.get = (req, res) => {
    const response = 'Bem vindo!';
    res.status(200).send(response);
}