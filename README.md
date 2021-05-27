# assessment_veirta-informatika

## Prasetya Rinaldi


---
* **instruction:**
1. access API (in email) and create a new field ("geometry_locs")
2. asign/input the data in the new field based on the field ("coordinates")
---

* **expectation:**
  ```javascript
    {
        "type": "FeatureCollection",
        "crs": {
            "type": "name",
            "properties": {
            "name": "EPSG:4326"
            }
        },
        features": [
    {
      "type": "Feature",
      "id": 1,
      "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [
                        106.968553778361,
                        -6.12690437188397,
                        0
                    ],
                    [
                        106.968496344573,
                        -6.1283771423847,
                        0
                    ],
                    [
                        106.968657356808,
                        -6.12836964323575,
                        0
                    ]
                ]
            ]
        },
        "properties": {
                "FID": 1,
                "OBJECTID": 1,
                "Luas_Ha": 20.3711638065,
                "WADMKK": "Kota Jakarta Utara",
                "WADMPR": "DKI Jakarta",
                "Shape_Leng": 3790.52316929,
                "Shape_Le_1": 3790.52316929,
                "Shape_Area": 203711.638065,
                "Qname_2019": "Sawah"
            }
        },
        "geometry_locs": [ // here's the answer
            "-6.12690437188397,106.968553778361",
            "-6.1283771423847,106.968496344573",
            "-6.12836964323575,106.968657356808",
        ]
    }
  ```


---
* **steps to run this application:**
1. $ npm install
2. $ npm start
3. open browser/postman to hit 'http://localhost:3030/'
4. please correct and assess, thank you
---