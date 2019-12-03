function Player({ id, name, alias, role, story, age, club, photo }) {
  this.id = id;
  this.name = name;
  this.alias = alias;
  this.role = role;
  this.story = story;
  this.age = age;
  this.club = club;
  this.photo = photo;
}

Player.prototype = {
  get id() {
    return this._id;
  },
  set id(id) {
    this._id = id;
  },
  get name() {
    return this._name;
  },
  set name(name) {
    this._name = name;
  },
  get alias() {
    return this._alias;
  },
  set alias(alias) {
    this._alias = alias;
  },
  get role() {
    return this._role;
  },
  set role(role) {
    this._role = role;
  },
  get story() {
    return this._story;
  },
  set story(story) {
    this._story = story;
  },
  get age() {
    return this._age;
  },
  set age(age) {
    this._age = moment(age);
  },
  get club() {
    return this._club;
  },
  set club(club) {
    this._club = club;
  },
  get photo() {
    return this._photo;
  },
  set photo(photo) {
    this._photo = photo || DEFAULT_PLAYER_PHOTO;
  }
};

Player.prototype.equals = function({ name, club }) {
  return this.name === name && this.club === club;
};

Player.prototype.toString = function() {
  return `${this.name}, alias ${this.alias}, tiene ${this.age} y es ${this.role} perteneciente al club ${this.club}`;
};
