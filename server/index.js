const express = require(`express`);
const cors = require(`cors`);
const bodyParser = require(`body-parser`);
const app = express();
const port = process.env.PORT || 3000;
const queries = require(`./queries.js`);
const fetch = require("node-fetch");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

const google_key = process.env.GOOGLE;

async function calcDistance(long, lat, establishmentArray) {
  async function hitGoogle () {
    let fetchArray = []
    for (let i = 0; i < establishmentArray.length; i++) {
      let url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${lat},${long}&destinations=${
        establishmentArray[i][1]
      },${establishmentArray[i][0]}&key=${google_key}`;
      await fetch(url)
        .then(response => response.json())
        .then(data => {
          data.rows[0].elements[0].distance.text ? fetchArray.push(data.rows[0].elements[0].distance.text) : fetchArray.push(null)
        })
        .catch(err => {
          console.log(err);
          fetchArray.push("We're not sure how far away this is")
        });
    }
    return fetchArray  
  }
  const responseArray = await hitGoogle();
  return responseArray
}

app.get(`/v1/hello`, (req, res) => {
  res.json({ message: `Hello World!` });
});

app.get(`/v1/establishments/`, (req, res) => {
  queries
    .getEstablishmentsQuickly()
    .then(records => {
      res.json(records);
    })
    .catch(err => {
      res.json({ error: err });
    });
});

app.get(`/v1/establishments/random/:long/:lat`, (req, res) => {
  console.log(req.params.long);
  console.log(req.params.lat);
  queries
    .getEstablishments()
    .then(records => { 
      records.forEach((establishment, i) => {        
        queries.getRatings(establishment.id)
        .then(ratings => {
          const sum = ratings.reduce((accumulator, rating)=>{
            return accumulator += rating.rating
          }, 0)
          let avgRating = sum / ratings.length
          records[i]["avgRating"] = avgRating 
        })
      });

      let distanceArray = [];
      records.forEach(establishment => {
        distanceArray.push([establishment.long, establishment.lat]);
      });
      calcDistance(req.params.long, req.params.lat, distanceArray)
      .then(googleInfo => {
        console.log('THIS IS WHAT WE GET FROM GOOGLE', googleInfo);
        
        googleInfo.forEach((distance, i) => {          
          records[i]["distance"] = googleInfo[i]
        })
        res.json(records);
      })
    })
    .catch(err => {
      res.json({ error: err });
    });
});

app.get(`/v1/establishments/:id`, (req, res) => {
  queries
    .getEstablishmentsByID(req.params.id)
    .then(records => {
      res.json(records);
    })
    .catch(err => {
      res.json({ error: err });
    });
});

app.post(`/v1/ratings/:id`, (req, res) => {
  console.log('the rating', req.body.rating)
  queries
    .addRating(req.params.id, req.body.rating)
    .then(records => {
      res.json(records);
    })
    .catch(err => {
      res.json({ error: err });
    });
});

app.get(`/v1/ratings/:id`, (req, res) => {
  queries
    .getRatingsByID(req.params.id)
    .then(records => {
      res.json(records);
    })
    .catch(err => {
      res.json({ error: err });
    });
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
