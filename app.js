const express = require("express")
const app = express()
const PORT = 3030
const axios = require("axios")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", async (req, res, next) => {
    try {
        const { data } =  await axios.get('https://mocki.io/v1/8e889d1f-77cc-4838-9caf-97d3a421b95c')
        for (let i = 0; i < data.features.length; i++) {
            data.features[i].geometry_locs = []
            if (data.features[i].geometry.type === "Polygon") {
                for (let j = 0; j < data.features[i].geometry.coordinates.length; j++) {
                    for (let k = 0; k < data.features[i].geometry.coordinates[j].length; k++) {
                        data.features[i].geometry_locs.push(`${data.features[i].geometry.coordinates[j][k][1]},${data.features[i].geometry.coordinates[j][k][0]}`)
                    }
                }
            }
            if (data.features[i].geometry.type === "MultiPolygon") {
                for (let j = 0; j < data.features[i].geometry.coordinates.length; j++) {
                    for (let k = 0; k < data.features[i].geometry.coordinates[j].length; k++) {
                        for (let l = 0; l < data.features[i].geometry.coordinates[j][k].length; l++) {
                            data.features[i].geometry_locs.push(`${data.features[i].geometry.coordinates[j][k][l][1]},${data.features[i].geometry.coordinates[j][k][l][0]}`)
                        }
                    }
                }
            }
        }
        res.send(data)
    } catch (err) {
        console.log(err);
    }
})

app.listen(PORT, () => {
    console.log(`running in port: ${PORT}`);
})