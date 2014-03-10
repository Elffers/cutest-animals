App = Ember.Application.create();

App.Router.map(function(){
  this.resource('home');
  this.resource('kittens');
  this.resource('puppies');
  this.resource('bunnies');
  this.resource('kitten', { path: ':kitten_id' });
  this.resource('puppy', { path: ':puppy_id' });
  this.resource('bunny', { path: ':bunny_id' });
});

App.KittensRoute = Ember.Route.extend({
  model: function() {
    return kittens;
  }
});

App.PuppiesRoute = Ember.Route.extend({
  model: function() {
    return puppies;
  }
});

App.BunniesRoute = Ember.Route.extend({
  model: function() {
    return bunnies;
  }
});