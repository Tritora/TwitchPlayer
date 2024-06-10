document.getElementById('twitchButton').addEventListener('click', function() {
  const clientId = '6oibtqptiouosp60jt4cub73tq3b5c';
  const redirectUri = 'https://tritora.github.io/TwitchPlayer/';
  const scope = 'user:read:email';
  const responseType = 'code';

  const twitchAuthUrl = `https://id.twitch.tv/oauth2/authorize?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  window.location.href = twitchAuthUrl;
});

// Listen for the redirect from Twitch after authentication
window.addEventListener('load', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  if (code) {
    // Successfully authenticated with Twitch, proceed with the code to exchange for token
    // Here, you can send the code to your server to exchange for an access token

    // After processing, redirect to the next HTML page
    window.location.href = 'next.html'; // Replace with your next page URL
  } else {
    // Redirect to the next page even if there's no code (authentication failed or cancelled)
    window.location.href = 'next.html'; // Replace with your next page URL
  }
});
