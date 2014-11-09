Todo.EditItemView = Ember.TextField.extend({
	didInsertElement: function(){
		this.$().focus();
	}
});

Ember.Handlebars.helper('edit-item', Todo.EditItemView); 