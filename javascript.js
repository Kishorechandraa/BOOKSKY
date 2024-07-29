var popupoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton=document.querySelector(".addbutton")
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var cancelpop=document.getElementById("cancelpop")
cancelpop.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var container = document.querySelector(".container")
var addbook= document.getElementById("addbook")
var booktitle= document.getElementById("booktitle")
var bookauthor= document.getElementById("bookauthor")
var bookdesc= document.getElementById("bookdesc")

addbook.addEventListener("click", function(event){
    event.preventDefault() 
    var div=document.createElement("div")
    div.setAttribute("class", "bookcontainer")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdesc.value}</p>
    <button onclick="deletebook(event)">delete</button>`

    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}