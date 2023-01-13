const express = require("express")
const router = new express.Router()
const menranking = require("../models/mens")
router.post("/men", async(req, res) => {
    try {
        const addingRecords = new menranking(req.body)
        console.log(req.body)
        const inserMen = await addingRecords.save()
        res.status(200).send(inserMen)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.get("/men", async(req, res) => {
    try {
        const ReadMens = await menranking.find({})
        res.status(201).send(ReadMens)
    } catch (err) {
        res.status(400).send(err)
    }

})
router.get("/men/:id", async(req, res) => {
    try {
        const readMen = await menranking.findById(req.params.id)
        console.log(req.params.id)
        res.send(readMen)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.patch("/men/:id", async(req, res) => {
    try {
        const readMen = await menranking.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        console.log(req.params.id)
        res.send(readMen)
    } catch (e) {
        res.status(500).send(e)
    }
})
router.delete("/men/:id", async(req, res) => {
    try {
        const readMen = await menranking.findByIdAndDelete(req.params.id)
        console.log(req.params.id)
        res.send(readMen)
    } catch (e) {
        res.status(500).send(e)
    }
})
module.exports = router