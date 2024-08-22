//selecting popupoverlay,popupbx,button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popupbox")
var addbutton = document.querySelector(".add-button")
addbutton.addEventListener("click",function()
{
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})
const cancelpopup = document.querySelector(".cancel")
cancelpopup.addEventListener("click",function(event) {
        event.preventDefault();
       popupbox.style.display = "none"
       popupoverlay.style.display = "none"
})
//selecting contianer,input-bookname,input-kauthornmae,description
var container = document.querySelector(".contianer")
var bookname = document.querySelector(".input-bookname")
var authorname = document.querySelector(".input-authorname")
var description = document.querySelector(".input-description")
var addbook = document.querySelector(".add")
addbook.addEventListener("click",function(event){
    event.preventDefault();
    var  div = document.createElement("div")
    div.setAttribute("class","book-contianer")
    div.innerHTML=`<h2>${bookname.value}</h2>
    <h5>${authorname.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletebook(event)">delete</button>`
    container.append(div)
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"

})

function deletebook(event){
    event.target.parentElement.remove();
}
