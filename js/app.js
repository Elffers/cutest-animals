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


var kittens = [{
  title: "Mew?",
  url: "http://critterbabies.com/wp-content/gallery/kittens/cats-animals-kittens-background-us.jpg"
}, {
  title: "Rawr!",
  url: "http://critterbabies.com/wp-content/gallery/kittens/Kitten-pic-cute-kittens-16292210-1024-768.jpg"
}, {
  title: "Quack?",
  url: "http://images2.fanpop.com/image/photos/10500000/Cute-Wallpapers-cute-kittens-10501750-1024-768.jpg"
}];

var puppies = [{
  title: "I am so small",
  url: "http://blog-photos.dogvacay.com/wp-content/uploads/2012/03/cute-dog-puppy-white-Favim.com-267645.jpg"
}, {
  title: "Nom!",
  url: "http://i.imgur.com/PUgn8nH.jpg"
}, {
  title: "Little help?",
  url: "https://lh3.googleusercontent.com/-DQF6lzxrNgg/Uv14piu3UPI/AAAAAAAAJ5o/1VzlRPn8HMY/w533-h713/145e60e4-2a6e-4de9-a849-a2f2b84d4c67"
}];

var bunnies = [{
  title: "HUG HIM YOU MONSTER",
  url: "http://i.imgur.com/istyEnq.jpg"
}, {
  title: "My ears are so heavy",
  url: "http://images4.fanpop.com/image/photos/19800000/baby-bunnies-baby-bunnies-19896687-1024-768.jpg"
}, {
  title: "Patty cake, patty cake...",
  url: "http://readjack.files.wordpress.com/2012/02/cute_bunny.jpg"
}];