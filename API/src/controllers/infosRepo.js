//Retornando para o body:
// 5 mais antigos repositórios em C#
// Avatar perfil takenet
const list = require('../utils/older-projects')
const avatar = require('../services/avatar-url')
module.exports = async (req, res) => {
  let infos = await list()
  let avatar_perfil = await avatar()
  return res.json({
    "list": infos,
    "avatar_url": avatar_perfil
  })
}