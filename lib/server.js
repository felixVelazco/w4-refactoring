const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "Welcome"});
});

app.get("/v1/explorers/:mission", (req,res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorerByMission(mission);
    res.json(explorersInMission);
});

app.get("v1/explorers/amount/:mission", (req,res) => {
    const mission = req.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmountByMission(mission);
    res.json(explorersAmountInMission);
});

app.listen(port, () => {
    console.log(`Fizzbuzz API in localhost ${port}`);
});