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
		},

		saveItem: function(){
			var item = this.get('model');
			if(Ember.isEmpty(this.get('this.desc'))){
				this.send('deleteItem');
			}
			else {
				item.save();
			}
			this.set('isEditing', false);
		}
	}

});

Todo.TodolistController = Ember.ArrayController.extend({
	actions: {
		createItem: function(){
			var desc = this.get('newDesc');
			if(!desc) {return false;}
			if(!desc.trim()) {return;}
			var item = this.store.createRecord('tododata', {
				desc: desc.trim(),
				isCompleted: false
			});
			this.set('newDesc', '');
			item.save();
		},
		clearCompleted: function(){
			var items = this.filterBy('isCompleted', true);
			items.forEach(function(item){
				item.destroyRecord();
			});
		}
	},
	remaining: function(){
		return this.filterBy('isCompleted', false).get('length');
	}.property('@each.isCompleted'),
	completed: function(){
		return this.filterBy('isCompleted', true).get('length');
	}.property('@each.isCompleted'),
	todos: function(){
		return this.get('remaining') > 1? 'todos' : 'todo';
	}.property('remaining'),
	hasCompleted: function(){
		return !!this.get('completed');
	}.property('completed'),

	toggleAll: function(key, value){
		if(value === undefined){
			return !!this.get('length') && this.isEvery('isCompleted', true);
		}
		else {
			this.setEach('isCompleted', value);
			this.invoke('save');
			return value;
		}
	}.property('@each.isCompleted')
});