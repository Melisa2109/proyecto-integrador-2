const menuItem = document.querySelectorAll("menu-item");
const menuBtn = document.querySelector("#menu-button");

menuBtn.addEventListener("click", function(){
    document.body.classList.toggle("mobile-menu-active");
});

menuItem.forEach(function(item) {

    item.addEventListener("click", function() {
        
        document.body.classList.remove("mobile-menu-active");
        const currentItem = document.querySelector("active");
        currentItem.classList.remove("active");
        this.classList.add("active")
    });
});