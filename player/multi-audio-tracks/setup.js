var conf = {
  key: '11098301-26c1-4f1d-a822-f45640d8c0f0'
};

var source = {
  hls: 'https://cdn3.wowza.com/1/MXViRGN6Vjl6MUhQ/Uk5WV2R2/hls/live/playlist.m3u8',
};

var playerContainer = document.getElementById('player-container');
var player = new bitmovin.player.Player(playerContainer, conf);

player.load(source);
