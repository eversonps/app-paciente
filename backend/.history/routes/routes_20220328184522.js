const express = require("express")
const router = express.Router();

router.get('/pacientes', function(req, res) {
    res.send('Birds home page');
});

router.get('/pacientes/:id', function(req, res) {
    res.send('About birds');
});

router.post('/pacientes', function(req, res) {
    res.send('About birds');
});

router.put('/pacientes:id', function(req, res) {
    res.send('About birds');
});

router.delete('/pacientes:id', function(req, res) {
    res.send('About birds');
});
  
module.exports = router;