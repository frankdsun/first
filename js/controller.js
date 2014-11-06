Todo.TododataController = Ember.ObjectController.extend({

	isCompleted: function(key, value){
		var model = this.get('tododata');

		if(value == undefined){
			return this.get('model.isCompleted');
		}
		else {
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted')

});

Todo.TodolistController = Ember.ArrayController.extend({
	actions: {
		deleteRecord: function(){
			//todolist.destroyRecord();

			// this.store.find('tododata', id).then(function (tododata) {
			//   tododata.destroyRecord(); // => DELETE to /posts/2
			// });
		}
	}
});