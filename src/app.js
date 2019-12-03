const controller = new PlayersController(
  new PlayersService(),
  new PlayersView()
);

controller.handlerInitEvents();
