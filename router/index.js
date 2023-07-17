const express = require(`express`);
const router = express.Router();

router.get('/', (req, res) => {

    res.send(toursData)

})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('Done')
})

module.exports = router;
