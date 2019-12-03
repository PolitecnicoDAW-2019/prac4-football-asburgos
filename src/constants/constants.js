const GUI = {
  divPlayers: window.document.getElementById('divPlayers'),
  classPlayer: window.document.getElementsByClassName('player'),
  buttonUpdate: window.document.getElementById('buttonUpdate'),
  buttonDelete: window.document.getElementById('buttonDelete'),
  buttonCreate: window.document.getElementById('buttonCreate'),
  inputName: window.document.getElementById('inputName'),
  inputAlias: window.document.getElementById('inputAlias'),
  inputAge: window.document.getElementById('inputAge'),
  inputRole: window.document.getElementById('inputRole'),
  inputStory: window.document.getElementById('inputStory'),
  inputClub: window.document.getElementById('inputClub')
};

// THE BELOW DATA CONTAINERS ARE JUST FOR THE START OF THE PROJECT BEFORE DOCKER IMPLEMENTATION ON IT

const DEFAULT_PLAYER_PHOTO = 'assets/images/player.png';

const PLAYER_CRUD = {
  update: 'update',
  delete: 'delete',
  create: 'create'
};
