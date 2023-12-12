function showMenu() {
    var menu = document.getElementById("menu");
    var burger = document.getElementById("burger");
    var list = document.getElementById("menu-list");
    
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        burger.classList.remove("open");
        list.classList.remove("displayed");
    } else {
        menu.classList.add("open");
        burger.classList.add("open");
        list.classList.add("displayed");
    }
}
