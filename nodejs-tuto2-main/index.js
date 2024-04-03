// Importation du module Express.js
const express = require('express');

// Création d'une instance d'application Express
const app = express();

// Middleware pour parser le corps des requêtes JSON
app.use(express.json());

// Route GET pour la page d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil !');
});

// Route GET avec un paramètre dynamique
app.get('/utilisateur/:id', (req, res) => {
  // Récupération du paramètre d'URL
  const userId = req.params.id;
  res.send(`Vous demandez les détails de l'utilisateur avec l'ID : ${userId}`);
});

// Route POST pour traiter les données envoyées
app.post('/utilisateur', (req, res) => {
  // Récupération des données envoyées dans le corps de la requête
  const userData = req.body;
  // Traiter les données (par exemple, enregistrer dans une base de données)
  console.log('Nouvel utilisateur ajouté :', userData);
  // Envoyer une réponse de confirmation
  res.send('Utilisateur ajouté avec succès !');
});

// Définition du port sur lequel le serveur écoutera les requêtes
const port = 3000;

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
