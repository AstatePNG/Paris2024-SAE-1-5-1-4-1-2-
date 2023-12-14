var menu = document.getElementById("menu");
var burger = document.getElementById("burger");
var list = document.getElementById("menu-list");
var title = document.getElementById("labmenu");

function showMenu() {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        burger.classList.remove("open");
        title.classList.remove("open");
        list.classList.remove("displayed");
    } else {
        menu.classList.add("open");
        burger.classList.add("open");
        title.classList.add("open");
        list.classList.add("displayed");
    }
}

/*Javascript utilisé pour le menu, réalisé par Elsa Hamon*/
