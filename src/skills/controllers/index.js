// const Payment = require('../domain');
const { hiscores } = require('osrs-json-api');


async function getAll(req, res) {
  try {
    const data = await Payment.all();
    res.send(data)
  } catch (e) {
    res.status(400).send({ error: e.message })
  }
}


async function getSkills(req, res) {
  try {

    const rsn = req.params.rsn;


    const data = hiscores
      .getPlayer(`${rsn}`)
      .then((datos) => {

          let formatData = JSON.stringify(datos);
  
  
          var json_data = datos.skills;
          var result = [];
  
          for (var i in json_data)
            result.push([i, json_data[i]]);
  
  
  
          res.send({ result })
        

      })
      .catch((e) => { 
          
        res.send({result: [  
          [
              "overall",
              {
                  "rank": "1",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "attack",
              {
                  "rank": "2",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "defence",
              {
                  "rank": "3",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "strength",
              {
                  "rank": "4",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "hitpoints",
              {
                  "rank": "5",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "ranged",
              {
                  "rank": "6",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "prayer",
              {
                  "rank": "7",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "magic",
              {
                  "rank": "8",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "cooking",
              {
                  "rank": "9",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "woodcutting",
              {
                  "rank": "10",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "fletching",
              {
                  "rank": "11",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "fishing",
              {
                  "rank": "12",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "firemaking",
              {
                  "rank": "13",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "crafting",
              {
                  "rank": "14",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "smithing",
              {
                  "rank": "15",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "mining",
              {
                  "rank": "16",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "herblore",
              {
                  "rank": "17",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "agility",
              {
                  "rank": "18",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "thieving",
              {
                  "rank": "19",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "slayer",
              {
                  "rank": "20",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "farming",
              {
                  "rank": "21",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "runecraft",
              {
                  "rank": "22",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "hunter",
              {
                  "rank": "23",
                  "level": "--",
                  "xp": "0"
              }
          ],
          [
              "construction",
              {
                  "rank": "24",
                  "level": "--",
                  "xp": "0"
              }
          ]
      ]})      
        // res.status(400).send({ error: e.message }) 
      
      
      });




  } catch (e) {
    res.status(400).send({ error: e.message })
  }
}






module.exports = {
  getAll,
  getSkills
}
