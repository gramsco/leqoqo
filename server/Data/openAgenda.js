let axios = require("axios")
const fs = require('fs');
let mongoose = require('mongoose')
let EventModel = require("../models/Event")
let path = require("path")
const baseURL = "https://openagenda.com/agendas/49405812/events.json?lang=fr&key=aa7d7eac3dc04a5fa98924368f080baf";
const pageLimit = 178;
require('dotenv').config({ path: path.join(__dirname, '../.env') })


mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log("connected!"))
    .catch(err => console.log(err))


function filterData(e) {
    if (e == undefined) return
    return {
        name: e.title.fr,
        address: e.address,
        image: e.image,
        keywords: e.keywords,
        range: e.range.fr,
        image_url: e.image,
        location: { coordinates: [e.latitude, e.longitude] },
        year: 2019,
        event_begin: e.timings[0].start,
        event_end: e.timings[e.timings.length - 1].end,
        location: e.location.name
    }
        
}

async function recursiveGet(url, page, finalRes) {
    const res = await axios.get(baseURL + `&page=${page}`)
    finalRes = finalRes.concat(res.data.events);
    page += 1;
    console.log(page + " : " + finalRes.length)
    if (page < pageLimit) return recursiveGet(url, page, finalRes);
    else return finalRes;
}

(async function getData() {
    const finalCall = await recursiveGet(baseURL, 0, []);
    EventModel
        .insertMany(finalCall.map(filterData))
        .then(() => console.log("mash'allah"))
        .catch(err => console.log(err))
    // console.log(finalCall.map(filterData));
}());











// setTimeout(() => {
//     console.log(final_data)
// }, 10000);


// setTimeout(() => {
//     fs.writeFile("fulldata", final_data, (err => {
//         if (err) throw err;
//     }))
//     console.log("c bon")
// }, 1000);


// console.log(final_data)