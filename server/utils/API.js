const router = require("express").Router();
require("dotenv").config();
const {createClient} = require("pexels");
const client = createClient(process.env.PEXEL_CLIENT_ID)
router.get("/api/images/:query", async (req, res) => {
  try {
    const results = await client.photos.search({query:req.params.query, per_page: 10, totalResults:80 })
    res.json(results)
  }
  catch (err) {
    res.json({msg: "failed to find " + req.params.query + " images"})
  }
})

module.exports = router