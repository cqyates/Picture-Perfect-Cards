const router = require("express").Router();
require("dotenv").config();
const {createClient} = require("pexels");
const client = createClient(process.env.PEXEL_CLIENT_ID)
router.get("/api/images/:query/:page", async (req, res) => {
  const page = parseInt(req.params.page)

  try {
    const results = await client.photos.search({query:req.params.query, per_page: 6, page, totalResults:80, orientation: "landscape"})
    res.json(results)
  }
  catch (err) {
    res.json({msg: "failed to find " + req.params.query + " images"})
  }
})

module.exports = router