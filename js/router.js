Todo.Router.map(function (){
	this.resource("todolist", {path: "/"}, function(){
		this.route("active", {path: "/active"});
		this.route("completed");
	});
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

Todo.TodolistIndexRoute = Ember.Route.extend({
	model: function(){
		return this.modelFor('todolist');
	}
});
Todo.TodolistActiveRoute = Ember.Route.extend({
	model: function(){
		return this.store.filter('tododata', function(tododata){
			return !tododata.get('isCompleted');
		})
	},
	renderTemplate: function(controller){
		this.render('todolist/index', {controller: controller})
	}
});
Todo.TodolistCompletedRoute = Ember.Route.extend({
	model: function(){
		return this.store.filter('tododata', function(tododata){
			return tododata.get('desc');
		})
	},
	renderTemplate: function(controller){
		this.render('todolist/index', {controller: controller})
	}
});

