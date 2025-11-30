    const burger = document.getElementById("burgerBtn");
    const navLinks = document.getElementById("navLinks");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        burger.classList.toggle("active");
    });

