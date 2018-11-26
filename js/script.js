let menuscroll = () => {
    console.log("pepe");
    let $navmenu = document.getElementById('nav-menu');
    let $window = document.documentElement;
    if ($window.scrollTop > 50) {
        $navmenu.classList.add("is-scrolling");
    } else {
        $navmenu.classList.remove("is-scrolling");
    }
}
