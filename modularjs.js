(function() {
    var people ={
    people: [],
    template:$('#people-template').html(),
    init: function(){
        this.cacheDom();
    },
    cacheDom: function(){
        this.$el = $('#peopleModule');
        this.$button = this.$el.find('button');
        this.$input = this.$el.find('input');
        this.$ul = this.$el.find('ul');
        this.$template = this.$el.find('#people-template').html();
    },
    render: function(){
        var data = {
            people: this.people,

        }
        $('#peopleModule').find('ul').html(Mustace.render(template,data));
    }
};

people.init();
})()


//var people = [];
//var template = $('#people-template').html();

(function() {

/*

$('#peopleModule').find('button').on('click', function(){
    people.push($('#peopleModule').find('input').val());
    // data for mustache template

    var data = {
        people: people,

    };

    $('#peopleModule').find('ul').html(Mustace.render(template, data));
});

$('#peopleModule').find('ul').delegate('i.del', 'click', function(e){
    var $remove = $(e.target).closest('li');
    var i = $('#peopleModule').find('ul').find('li').index($remove);

    $remove.remove();

    people.splice(i, 1);
});

*/

})()

 

 //object literal
/*
 var myModule = {
     name: 'Cay',
     age: 27,
     sayName: function(){
         alert(this.name);
     },
     setName: function(newName) {
         this.name = newName
     }
 };

 myModule.setName('Joy');

 myModule.sayName();

 */