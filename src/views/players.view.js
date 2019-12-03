function PlayersView() {}

PlayersView.prototype.bindPlayers = players => {
  GUI.divPlayers.innerHTML = '';
  for (const player of players) {
    GUI.divPlayers.innerHTML += `<div class="player" id="${
      player.id
    }"><img href=${player.photo}/><p>Nombre: ${player.name}</p><p>Alias: ${
      player.alias
    }</p>
    <p>Edad: ${moment().diff(player.age, 'years')}</p><p>Posicion: ${
      player.role
    }</p>
    <p>Club: ${player.club}</p><p>Historial: ${player.story}</p>
    </div>`;
  }
};

PlayersView.prototype.bindCrudPlayerEvent = handler => {
  GUI.buttonUpdate.addEventListener('click', handler);
  GUI.buttonCreate.addEventListener('click', handler);
  GUI.buttonDelete.addEventListener('click', handler);
};

PlayersView.prototype.bindToPlayer = function(event) {
  const action = {
    buttonUpdate: PLAYER_CRUD.update,
    buttonCreate: PLAYER_CRUD.create,
    buttonDelete: PLAYER_CRUD.delete
  };
  return {
    action: action[event.target.id],
    name: GUI.inputName.value,
    alias: GUI.inputAlias.value,
    age: GUI.inputAge.value,
    role: GUI.inputRole.value,
    club: GUI.inputClub.value,
    story: GUI.inputStory.value
  };
};
