//Nødvendig moduler
import path from "path";
import express from "express"; //Express er et rammeverk for å lage webservere i Node.js
import { MongoClient } from "mongodb"; //MongoDB er en NoSQL database som lagrer data i JSON-lignende format
//DB-client for kommunikasjon med database server.
const uri = "mongodb://localhost:27017"; //Adressen til din lokal database
const client = new MongoClient(uri); //klient for å kommuniserer med database

//Hjelpe funksjon for å koble seg til en database som heter 'navn_til_din_database'
let db; //Variable for selve database
async function connect() {
  await client.connect();
  db = client.db("bokhandel"); //Her skriver du navn til din database, f.eks. 'bokhandler'
  console.log("mongodb ✅");
}

//Funksjon som konfigurerer og starter WebServer
async function startWebServer() {
  const PORT = 3000; //webserveren serves HTML-content at port 3000
  const app = express(); //Selve Webserver app'en
  app.use(express.json());


  // Koble seg til database og henter nødvedig collections (I MongoDB objekter er 'documents' inn i en 'collection'). Her skriver du navn til din collection, f.eks. boker
  await connect();
  const collection = db.collection("boker");

  // Konfigurerer webserver API endepunkter for DB-objekter

  app.get("/api/velkommen", (req, res) => {
    res.json({ message: "Velkommen til bokhandler" });
  });
  // GET-endepunkt  : henter objekter fra database
  app.get("/api/boker", async (req, res) => {
    const data = await collection.find().toArray(); //Henter alle dokumenter i denne collection, f.eks. alle bøker
    res.json(data); //Sender alle dokumenter (som JSON) til klienten.
  });

  // POST-endepunkt : legge til en ny objekt til database
  app.post("/api/boker", async (req, res) => {
    const bok = req.body; //Henter info i JSON format from klienten. Bruk en passende variabelnavn, f.eks. bok
    const result = await collection.insertOne(bok); //Legger til den nye objektet i database
    res.json({ bok });
  });

  // DELETE - Slett et document
  app.delete("/api/boker/:id", async (req, res) => {
    console.log("DELETE ble kalt med id:", req.params.id);
    try {
      const bokid = Number(req.params.id);
      const result = await collection.deleteOne({
        id: bokid,
      });
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: "Fant ikke dokumentet å slette" });
      }
      res.json({ message: "Bok slettet" });
    } catch (err) {
      res.status(500).json({ error: "Noe gikk galt ved sletting" });
    }
  });

  // Webserver starter å lytte for requests
  app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
  });
}

startWebServer().catch(console.error); //Start webserver, koble til DB-server og hvis det skjer en feil, logg den til konsollen
