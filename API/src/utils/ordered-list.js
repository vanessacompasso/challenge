//Ordenando de forma crescente o array de objetos filtrados 
const listC = require('./filter-repos')
module.exports = async () => {
    let orderedList
    let infos = await listC()
    for (let i = 0; i < infos.length ; i++) {
        orderedList = infos.filter(info => info.full_name)
            .sort((a, b) => a.created_at - b.created_at)
    }
    return orderedList
}