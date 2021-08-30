console.log( "welcome" );
shownotes();
// if users add a note
let addBtn = document.getElementById( "addBtn" );
addBtn.addEventListener( "click", function ( e ) {
    let addTxt = document.getElementById( "addTxt" );

    let notes = localStorage.getItem( "notes" );
    if ( notes == null ) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse( notes );
    }
    notesobj.push( addTxt.value );
    localStorage.setItem( "notes", JSON.stringify( notesobj ) );
    addTxt.value = "";
    console.log( notesobj );
    shownotes();
} );
// function to show elements from local storage
function shownotes() {
    let notes = localStorage.getItem( "notes" );
    if ( notes == null ) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse( notes );
    }
    html = "";
    notesobj.forEach( function ( element, index ) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    } );
    let htmlelm = document.getElementById( "notes" );
    if ( notesobj.length != 0 ) {
        htmlelm.innerHTML = html;

    }
    else if ( notesobj.length == 0 ) {
        let htmleml2 = document.getElementById( "notes" );
        htmleml2.innerHTML = `<div>
        Nothing to show .Use Add note section to Add note</div>`
    }
}
// function to delete note
function deletenote( index ) {
    console.log( "I am delteting", index );
    let notes = localStorage.getItem( "notes" );
    if ( notes == null ) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse( notes );
    }
    notesobj.splice( index, 1 );
    localStorage.setItem( "notes", JSON.stringify( notesobj ) );
    shownotes();


}
search = document.getElementById( "searchtxt" );
search.addEventListener( "input", function () {
    console.log( "input event fire" );
    let inputval = search.value;
    // console.log(inputvar);
    let notecards = document.getElementsByClassName( "noteCard" );
    // console.log(notecards);
    Array.from( notecards ).forEach( function ( element ) {
        let cardtxt = element.getElementsByTagName( "p" )[0].innerText;
        if ( cardtxt.includes( inputval ) ) {
            element.style.display = "block";

        }
        else {
            element.style.display = "none";

        }
    } )

} )