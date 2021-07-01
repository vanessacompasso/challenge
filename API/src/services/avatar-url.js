//Função que retorna o avatar do peril takenet do github
const { default: axios } = require("axios")
module.exports = async function () {
    var avatar = await axios.get("https://api.github.com/users/takenet").then(function (response) {
        return response.data.avatar_url
    }).catch(function (error) {
        if (error)
            return error
    })
    return avatar
}