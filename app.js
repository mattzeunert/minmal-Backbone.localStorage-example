var Note = Backbone.Model.extend({
    defaults: function(){
        return {
            content: "Note created on " + new Date().toISOString()
        }
    }
});

var NoteCollection = Backbone.Collection.extend({
    model: Note,
    localStorage: new Backbone.LocalStorage("choose-some-identifier")
});

var myNotes = new NoteCollection();
myNotes.fetch();
var note1 = new Note();
myNotes.add(note1);
note1.save();

myNotes.models.forEach(function(model){
    console.log("Model in collection: " + model.get("content"));
});