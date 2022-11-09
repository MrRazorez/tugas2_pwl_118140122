var express = require('express');
var router = express.Router();

var { getDatabase, ref, onValue, push, update, set } = require('firebase/database');
var firebase = require('../configFirebase');
var db = getDatabase(firebase);

var player = ref(db, 'player');


router.get('/', function(req, res, next) {
  res.status(200).json({title: "Tic-Tac-Toe Killer"});
});

router.get('/read', function(req, res, next) {
  try {
    var data = [];
    onValue(player, async (snap) => {
      await data.push(snap.val());
    }, (error) => {
      res.status(404).json({status: error});
    });
    if (data[0] != null) {
      res.status(200).json({dataPlayer : data});
    } else {
      res.status(404).json({status: "Terjadi persiapan load data. Silahkan refresh request!"});
    }
  } catch (error) {
    res.status(404).json({status: error});
  }
});

router.post('/write', function(req, res, next) {
  try {
    push(player, {
      nama: req.body.nama,
      nilai: Number(req.body.nilai)
    });
    res.status(200).json({status: "Data Berhasil Masuk"});
  } catch (error) {
    res.status(404).json({status: error});
  }
});

router.put('/update', function(req, res, next) {
  try {
    var updates = {};
    updates[req.body.uid] = {
      nama: req.body.nama,
      nilai: Number(req.body.nilai)
    };

    update(player, updates);
    res.status(200).json({status: "Data Berhasil Diganti"});
  } catch (error) {
    res.status(404).json({status: error});
  }
});

router.delete('/delete', function(req, res, next) {
  try {
    var deleteData = ref(db, 'player/'+req.body.uid);

    set(deleteData, null);
    res.status(200).json({status: "Data Berhasil Dihapus"});
  } catch (error) {
    res.status(404).json({status: error});
  }
})

module.exports = router;
