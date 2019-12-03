function PlayersController(playersService, playersView) {
  this.service = playersService;
  this.view = playersView;
}

PlayersController.prototype.handlerInitEvents = function() {
  this.service.initPlayers().then(players => {
    this.view.bindPlayers(players);
    this.view.bindCrudPlayerEvent(this.handlerActionPlayer.bind(this));
  });
};

PlayersController.prototype.handlerActionPlayer = function(event) {
  const playerAction = this.view.bindToPlayer(event);
  this[playerAction.action](playerAction);
  this.view.bindPlayers(this.service.players);
};

PlayersController.prototype.update = function(player) {
  this.service.updatePlayer(player);
};

PlayersController.prototype.delete = function(player) {
  this.service.deletePlayer(player);
};

PlayersController.prototype.create = function(player) {
  this.service.createPlayer(player);
};
