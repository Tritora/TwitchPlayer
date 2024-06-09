document.getElementById('twitchButton').addEventListener('click', function() {
  window.location.href = 'https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=6oibtqptiouosp60jt4cub73tq3b5c&redirect_uri=https://tritora.github.io/TwitchPlayer/&scope=user:read:email';
});
