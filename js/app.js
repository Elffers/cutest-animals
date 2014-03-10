App = Ember.Application.create();

App.Router.map(function(){
  this.resource('home');
  this.resource('kittens');
  this.resource('puppies');
  this.resource('bunnies');


})
