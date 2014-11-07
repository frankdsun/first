Todo.TododataController = Ember.ObjectController.extend({
	isEditing: false,
	isCompleted: function(key, value){
		var model = this.get('model');

		if(value == undefined){
			return this.get('model.isCompleted');
		}
		else {
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted'),

	actions: {
		deleteItem: function(){
			var item = this.get('model');
			item.destroyRecord();
			//item.deleteRecord();
			//item.save();
		}, 

		editItem: function(){
			this.set('isEditing', true);
		}
	}

});

Todo.TodolistController = Ember.ArrayController.extend({
	
});