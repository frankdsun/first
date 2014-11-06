Todo.Tododata = DS.Model.extend({
	desc: DS.attr("string"),
	isCompleted: DS.attr("boolean")
});

Todo.Tododata.FIXTURES = [
	
	{
		id: 1,
		desc: "hello world!",
		isCompleted: false
	},

	{
		id: 2,
		desc: "hello world!!",
		isCompleted: false
	},

	{
		id: 3,
		desc: "hello world!!!",
		isCompleted: true
	},

	{
		id: 4,
		desc: "hello world!!!!",
		isCompleted: false
	}

];


