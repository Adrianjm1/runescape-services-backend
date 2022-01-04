// const Payment = require('../domain');
const { hiscores } = require('osrs-json-api');


async function getAll(req, res){
  try {
    const data = await Payment.all();
    res.send(data)
  } catch (e) {
    res.status(400).send({error: e.message})
  }
}


async function getSkills(req, res){
  try {

    const rsn  = req.params.rsn;


    const data = hiscores
    .getPlayer(`${rsn}`)
    .then((datos)=>{  
      console.log(datos.skills); 
      let hola = JSON.stringify(datos)
      res.send(hola)     
    })
    .catch(console.error);




  } catch (e) {
    res.status(400).send({error: e.message})
  }
}






module.exports = {
  getAll,
  getSkills
}
