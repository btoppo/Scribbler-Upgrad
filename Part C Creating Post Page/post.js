var btnval = "editSave";
var numberOfLikes = 0;
function myFunction() {
    var x = document.getElementById('myP');
    if (btnval == "editSave") {
        btnval = "saveEdit";
        x.contentEditable = "true";
        
        document.getElementById('buttonText').innerHTML = "Save";
        document.getElementById('buttonSymbol').setAttribute('class', 'fa fa-save');
    }
    else if (btnval == "saveEdit") {
        btnval = "editSave";
        x.contentEditable = "false";
        
        document.getElementById('buttonText').innerHTML = "Edit";
        document.getElementById('buttonSymbol').setAttribute('class', 'fa fa-edit');
    }
}

//like and comment button
function addComments(id) {
    var addEventName = id.value + '<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML += '<p class="com">' + addEventName + '</p>';
    a.value = a.defaultValue;
}
var numberOfClicks=0;
function postLiked(){
    document.getElementById("likeBlog").innerHTML = "Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!==0){
        if (numberOfClicks==1){
            document.getElementById('commentCount').innerHTML = "<br>"+numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('commentCount').innerHTML = "<br>" +numberOfClicks + " people have liked this!";
        }
        }
    }
