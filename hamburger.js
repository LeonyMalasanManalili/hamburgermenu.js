let bottone1 = document.getElementById("burgermenu")
let bottone2 = document.getElementById("xbutton")
let navmobile = document.getElementById("nav2")

bottone1.addEventListener("click", ()=>
{
    bottone1.style="display:none"
    navmobile.style="display:flex"
    bottone2.style="display:block"
})

bottone2.addEventListener("click", ()=>
{
    bottone1.style="display:block"
    navmobile.style="display:none"
    bottone2.style="display:none"
})
