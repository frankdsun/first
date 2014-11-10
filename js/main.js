window.Todo = Ember.Application.create({
	LOG_TRANSITIONS: true, 
    LOG_TRANSITIONS_INTERNAL: true
});
//Todo.ApplicationAdapter = DS.FixtureAdapter.extend();
Todo.ApplicationAdapter = DS.LSAdapter.extend();
//Todo.ApplicationAdapter = DS.RESTAdapter.extend();