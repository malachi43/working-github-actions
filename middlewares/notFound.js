const notFound = (req, res) => {
    res.status(404).send(`<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin: auto; height: 100vh"><h3>PAGE NOT FOUND </h3> <a href="/">Back Home </a></div>`)
}

module.exports = notFound;