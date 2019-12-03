function PlayersService() {
  this.httpService = new HttpService();
  this.idPlayer = 10;
  this.players = [];
}

PlayersService.prototype.getPlayers = function() {
  return this.httpService
    .getAllPlayers()
    .then(players => players.json())
    .catch();
};

PlayersService.prototype.initPlayers = function() {
  return this.getPlayers().then(players => {
    this.players = players.map(player => new Player(player));
    ++this.idPlayer;
    return this.players;
  });
};

PlayersService.prototype.findPlayer = function(player) {
  return this.players.find(
    _player => _player.name === player.name && _player.alias === player.alias
  );
};

PlayersService.prototype.isPlayer = function(player) {
  return this.players.some(
    _player => _player.name === player.name && _player.alias === player.alias
  );
};

PlayersService.prototype.createPlayer = function(player) {
  if (this.isPlayer(player)) {
    throw new Error('Usuario actualmente existe');
  }
  player.id = ++this.idPlayer;
  this.players = [...this.players, new Player(player)];
};

PlayersService.prototype.updatePlayer = function(player) {
  const selectedPlayer = this.findPlayer(player);
  if (!selectedPlayer) {
    throw new Error('Usuario no encontrado');
  }
  selectedPlayer.age = player.age;
  selectedPlayer.role = player.role;
  selectedPlayer.club = player.club;
  selectedPlayer.story = player.club;
};

PlayersService.prototype.deletePlayer = function(player) {
  this.players = this.players.filter(
    _player => player.name != _player.name && player.alias != _player.alias
  );
};
