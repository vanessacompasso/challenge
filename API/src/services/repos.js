//Função que retorna a lista de repositórios do perfil takenet no git hub
const { default: axios } = require("axios")
module.exports = async function () {
    var infos = await axios.get("https://api.github.com/users/takenet/repos?q=&type=public&sort=created&direction=asc&per_page=50?").then(function (response) {
        return response.data
    }).catch(function (error) {
        if (error)
            return error
    })
    return infos
}

