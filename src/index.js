require('dotenv').config();

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

async function init() {
  const dbConn = await MongoClient.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

  const dbo = dbConn.db('dockercounter');

  // await dbo.collection('counter').remove();

  // await dbo.collection('counter').insert({ count: 1 });

  app.get('/count', async (req, res) => {
    const counter = await dbo
      .collection('counter')
      .find({})
      .project({ _id: 0 })
      .toArray();

    return res.send(counter[0]);
  });

  app.post('/count', async (req, res) => {
    await dbo.collection('counter').updateOne({}, { $inc: { count: 1 } }, { new: true });

    const counter = await dbo
      .collection('counter')
      .find({})
      .project({ _id: 0 })
      .toArray();

    return res.send(counter[0]);
  });

  app.listen(3000, () => {
    console.log('Listinening on PORT 3000.');
  });
}

init();
