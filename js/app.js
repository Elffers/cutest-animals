App = Ember.Application.create();

App.Router.map(function(){
  this.resource('home');
  this.resource('kittens');
  this.resource('puppies');
  this.resource('bunnies');
  this.resource('kitten', {path: ':kitten_id'});

})

App.KittensRoute = Ember.Route.extend({
  model: function() {
    return kittens;
  }
});

App.BunniesRoute = Ember.Route.extend({
  model: function() {
    return bunnies;
  }
});

App.PuppiesRoute = Ember.Route.extend({
  model: function() {
    return puppies;
  }
});
