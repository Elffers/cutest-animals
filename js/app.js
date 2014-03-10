App = Ember.Application.create();

App.Router.map(function(){
  this.resource('home');
  this.resource('kittens', function(){
    this.resource('kitten', { path: ':kitten_id' });
  });
  this.resource('puppies', function(){
    this.resource('puppy', { path: ':puppy_id' });
  });
   this.resource('bunnies', function(){
    this.resource('bunny', { path: ':puppy_id' });
  });
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