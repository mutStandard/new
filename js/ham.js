 /* ---------- FULLSCREEN MENU ---------- */
        const menuBtn = document.getElementById("menuBtn");
        const spans = menuBtn.querySelectorAll("span");
        const fsMenu = document.getElementById("fsMenu");
        const fsLinks = fsMenu.querySelectorAll("li");

        let open = false;

        /* FULLSCREEN MENU TIMELINE */
        const menuTL = gsap.timeline({ paused: true });

        menuTL
            .to(fsMenu, {
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.25
            })
            .from(fsLinks, {
                y: 40,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: "power3.out"
            }, "-=0.1");

        /* HAMBURGER → X */
        const iconTL = gsap.timeline({ paused: true });

        iconTL
            .to(spans[0], { y: -10, rotation: -45, duration: 0.25 })
            .to(spans[1], { y: 8, rotation: -45, duration: 0.25 })
            .to(spans[2], { y: 9, rotation: 45, duration: 0.25 }, 0);

        /* TOGGLE */
        menuBtn.addEventListener("click", () => {
            open = !open;
            open ? menuTL.play() : menuTL.reverse();
            open ? iconTL.play() : iconTL.reverse();
            document.body.style.overflow = open ? "hidden" : "";
        });

        /* CLOSE ON LINK CLICK */
        fsLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuTL.reverse();
                iconTL.reverse();
                open = false;
                document.body.style.overflow = "";
            });
        });