
  const express = require("express")
  const app = express()

  app.get("/", (req, res) => {

    res.json([

      {

        id: "001",
        name: "atul",
        role: "DevOps",

      },

    ])

  })

  app.listen(8080, () => {

    console.log("listning from port 8080")

  })