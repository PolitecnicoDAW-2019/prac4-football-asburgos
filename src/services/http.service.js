function HttpService() {}

HttpService.prototype.getAllPlayers = function() {
  return fetch('./players.json');
};

HttpService.prototype.removePlayer = function() {
  return new Promise();
};

HttpService.prototype.addPlayer = function() {
  return new Promise();
};

HttpService.prototype.updatePlayer = function() {
  return fetch('');
};
