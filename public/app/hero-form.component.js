(function(app) {
  app.HeroFormComponent = ng.core
    .Component({
      selector: 'hero-form',
      templateUrl: 'signup.html'
    })
    .Class({
      constructor: [function() {
        this.genders = ['Male', 'Female','Other'
        ];
        this.model = new app.Hero(18, 'Dr IQ', this.genders[0],
          'abc@abc.com');
        this.submitted = false;
      }],
      onSubmit: function() {
        var formData = this.loginForm.value;
        console.log(formData);
      },
    });
})(window.app || (window.app = {}));
