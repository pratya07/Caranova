const connectDB = require('./config/db');
const express = require('express');
const formidable = require('formidable');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const image2base64 = require('image-to-base64');
const vehicleModel = require('./models/Home');
const showroomModel = require('./models/Showrooms');
const path = require('path');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

connectDB()
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.error(err);
  });

vehicleModel
  .createCollection()
  .then(() => {
    console.log('vehicle model created');
  })
  .catch((err) => console.error(err));

showroomModel
  .createCollection()
  .then(() => {
    console.log('showroom model created');
  })
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/add.html'));
});

app.get('/sh', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/addt.html'));
});

app.post('/datata', (req, res, next) => {
  const form = formidable({
    multiples: true,
  });
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    showroomModel
      .create({ ...fields, _id: mongoose.Types.ObjectId() })
      .then(() => {
        console.log('document created');
      })
      .catch((err) => console.error(err));
    res.json({
      ...fields,
    });
  });
});

app.post('/car_data', (req, res, next) => {
  const form = formidable({
    multiples: true,
    uploadDir: path.join(__dirname + '/.uploads'),
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    fs.rename(
      files.file.path,
      __dirname + '/.uploads/' + files.file.name,
      (err) => {
        if (err) res.status(500).send(err);
        console.log('renaming complete');
        image2base64(__dirname + '/.uploads/' + files.file.name)
          .then((base64) => {
            console.log('base64 complete');
            fs.unlink('./.uploads/' + files.file.name, (err) => {
              if (err) console.log(err);
              else console.log('file removed');
            });
            vehicleModel
              .create({
                ...fields,
                Image: `data:${files.file.type};base64, ${base64}`,
                _id: mongoose.Types.ObjectId(),
              })
              .then(() => {
                console.log('document created');
              })
              .catch((err) => console.error(err));
            res.json({
              ...fields,
              Image: `data:${files.file.type};base64, ${base64}`,
            });
          })
          .catch((err) => res.status(500).send(err));
      }
    );
  });
});

//error handler
const errorHandler = (
  res,
  error,
  message = 'something Went Wrong',
  code = 500
) => {
  return res.status(code).json({ message, error });
};

// car query

app.get('/cars', (req, res, next) => {
  vehicleModel
    .find()
    .exec()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res = errorHandler(res, err);
      console.log(err);
    });
  return res;
});

app.get('/cars/:Brand', (req, res, next) => {
  const Brand = req.params.Brand;
  vehicleModel
    .find({ Brand })
    .exec()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res = errorHandler(res, err);
    });
  return res;
});

app.get('/vahan/:Body', (req, res, next) => {
  const Body = req.params.Body;
  vehicleModel
    .find({ Body })
    .exec()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res = errorHandler(res, err);
    });
  return res;
});

app.get('/ride/:Seats', (req, res, next) => {
  const Seats = req.params.Seats;
  vehicleModel
    .find({ Seats })
    .exec()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res = errorHandler(res, err);
    });
  return res;
});

app.get('/vehicle/:Fuel', (req, res, next) => {
  const Fuel = req.params.Fuel;
  vehicleModel
    .find({ Fuel })
    .exec()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res = errorHandler(res, err);
    });
  return res;
});

app.get('/automobile/:Model', (req, res, next) => {
  const Model = req.params.Model;
  vehicleModel
    .find({ Model })
    .exec()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res = errorHandler(res, err);
    });
  return res;
});

app.post('/range', (req, res, next) => {
  const { lessthan, greaterthan } = req.body;
  vehicleModel
    .find({ Price: { $gte: greaterthan, $lte: lessthan } })
    .exec()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res = errorHandler(res, err);
    });
  return res;
});

app.get('/gaadi/:id', (req, res, next) => {
  const id = req.params.id;
  vehicleModel
    .findById({ _id: id })
    .exec()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res = errorHandler(res, err);
    });
  return res;
});

app.get('/showrooms/:brand', (req, res, next) => {
  const Brand = req.params.brand;
  showroomModel
    .find({ Brand })
    .exec()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res = errorHandler(res, err);
    });
  return res;
});

app.listen(port, () => console.log(`listening on port:${port}`));
