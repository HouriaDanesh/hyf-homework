//Save a note

const notes = [];
function addNote(content , id )
{
notes.push({content, id})

}

addNote (" This is first test note",1) ;
addNote (" This is second test note",2) ;
addNote (" This is third test note",3) ;

console.log(notes);

//Get a note
function getNoteFromId(id){
    for (let i=0 ; i<notes.length; i++)
    {
        if (id == notes[i].id)
        {
            
            return(notes[i]);
        }
        else{
            return("Error");
        }
    }
}
console.log(getNoteFromId(2));


//Get all notes
function allNotes() {
    return notes;
}

console.log(allNotes());


//Log out notes
function logOutNotesFormatted()
{
    for(let i= 0; i< notes.length; i++)
    {

        Console.log(`The note with id:${id} has the following note text: ${content}`);
    }

}
logOutNotesFormatted();

