Todo.Router.map(function (){
	this.resource("todolist", {path: "/"});
});

Todo.TodolistRoute = Ember.Route.extend({

	model: function(){
	 	// this.store.push('tododata', {
	  //     id: 10,
	  //     desc: "Fewer Moving Parts",
	  //     isCompleted: false
	  //   });
	 return this.store.find('tododata');
	},

	setupController: function(controller, tododata){
		controller.set('model', tododata);
	}

});