//Filtragem dos repositórios em C#
const repos = require('../services/repos')
module.exports = async () => {
    let reposFilter = await repos()
    return reposFilter.filter(reposFilter => reposFilter.language == "C#")
}