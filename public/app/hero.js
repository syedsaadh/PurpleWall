(function(app) {
  app.Hero = Hero;
  function Hero(id, name, gender, email) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.email = email;
  }
})(window.app || (window.app = {}));