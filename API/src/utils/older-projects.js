//Retornando um novo array de objetos com as 5 últimas posições do array de objetos ordenados de forma crescente
const orderedList = require('./ordered-list')
module.exports = async () => {
    let infos = await orderedList()
    let olderList = []
    let position = infos.length - 5
    for (let i = position; i < infos.length; i++) {
        var newObj = {
            "full_name": `${infos[i].full_name}`,
            "description": `${infos[i].description}`,
            "created_at": `${infos[i].created_at}`
        }
        olderList.push(newObj)
    }
    return olderList
}