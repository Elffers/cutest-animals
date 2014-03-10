App = Ember.Application.create();

App.Router.map(function(){
  this.resource('home');
  this.resource('kittens');
  this.resource('puppies');
  this.resource('bunnies');
})

App.KittensRoute = Ember.Route.extend({
  model: function() {
    return kittens;
  }
});


var kittens = [{
  title: "Tickles",
  url: "http://critterbabies.com/wp-content/gallery/kittens/cats-animals-kittens-background-us.jpg"
}, {
  title: "Rawr",
  url: "http://critterbabies.com/wp-content/gallery/kittens/Kitten-pic-cute-kittens-16292210-1024-768.jpg"
}, {
  title: "Quack?",
  url: "http://images2.fanpop.com/image/photos/10500000/Cute-Wallpapers-cute-kittens-10501750-1024-768.jpg"
}];