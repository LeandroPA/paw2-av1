function selectMenu(menuIndex) {
    console.log(menuIndex);

    var elements = document.getElementsByClassName("sub-menu");

    for (i = 0; i < elements.length; i++) {
        elements[i].style.display = "none"; 
    }

    var element = document.getElementById(menuIndex);
    if (element)
        element.style.display = "flex";
}

//Página principal
selectMenu(0);