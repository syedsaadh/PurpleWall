(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<purple-header></purple-header><br><br><hero-form></hero-form>'
    })
    .Class({
      constructor: function() {this.name ="Purple Wall"},
      greet:function(){ console.log('My name is', this.name);}
    });
   app.HeaderComponent = ng.core
   .Component({
   	selector:'purple-header',
   	templateUrl:'header.html'
   })
   .Class({
   	constructor:function(){this.navbarTitle = "Purple Wall"}
   });
})(window.app || (window.app = {}));