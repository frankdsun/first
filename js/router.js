Todo.Router.map(function (){
	this.resource("todolist", {path: "/"});
});

Todo.TodolistRoute = Ember.Route.extend({

	// model: function(){
	// 	return this.store.find("todoitems");
	// }

});

// Todo.indexRoute = Ember.Route.extend({



// });