const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const CLIENT_ID = '6oibtqptiouosp60jt4cub73tq3b5c';
const CLIENT_SECRET = 'g38bh2zo1obbocaif50crzx5z9qup6'; // Ersetze durch deinen Twitch-Client-Secret
const REDIRECT_URI = 'https://tritora.github.io/TwitchPlayer/';

async function getAccessToken(code) {
  const response = await axios.post('https://id.twitch.tv/oauth2/token', null, {
    params: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: REDIRECT_URI
    }
  });

  return response.data.access_token;
}

app.post('/get-twitch-token', async (req, res) => {
  const code = req.body.code;
  try {
    const accessToken = await getAccessToken(code);
    res.json({ access_token: accessToken });
  } catch (error) {
    console.error('Fehler beim Abrufen des Access Tokens:', error);
    res.status(500).json({ error: 'Fehler beim Abrufen des Access Tokens' });
  }
});

app.listen(3000, () => {
  console.log('Server läuft auf Port 3000');
});
