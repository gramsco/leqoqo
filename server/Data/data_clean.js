var json = require('./data.json');

console.log(json.length)
console.log(json[0])

json2 = []
json.map((e, i) => {
    console.log(e)
    json2.push({
        name: e.fields.nom_du_musee,
        type:"museum",
        region: e.fields.new_regions,
        ville: e.fields.ville,
        address: e.fields.adr,
        coordonates: e.fields.coordonnees_finales,
        cp: e.fields.cp,
        location: e.geometry,
        link: e.fields.sitweb,
        })


})

console.log(json2.filter(e => e.coordonates == undefined).length)

module.exports = json2