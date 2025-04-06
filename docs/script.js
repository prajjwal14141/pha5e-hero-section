//author--PRAJJWAL
gsap.registerPlugin(ScrollTrigger);
gsap.to(".hero-content", { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" });

document.addEventListener("mousemove", (e) => {
    let x = (e.pageX - window.innerWidth / 2) / 50;
    let y = (e.pageY - window.innerHeight / 2) / 50;

    gsap.to(".hero-content", { x: x, y: y, duration: 0.3 });
    gsap.to(".floating-icons img", { x: x / 2, y: y / 2, duration: 0.5 });
});

gsap.fromTo(".main-title",
    { scale: 0.5, opacity: 0, y: -50 },
    { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
);

setTimeout(() => {
    gsap.to(".main-title", {
        opacity: 0,
        y: -50,
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
            document.querySelector(".main-title").style.display = "none";
            document.querySelector(".mini-logo").style.display = "block";

            gsap.fromTo(".mini-logo",
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
            );

            setTimeout(() => {
                const tagline = document.querySelector(".tagline");
                gsap.to(tagline, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.75,
                    ease: "power3.out"
                });

                setTimeout(() => {
                    gsap.to(".hero", {
                        height: "60vh",
                        duration: 0.8,
                        ease: "power2.out"
                    });
                
                    setTimeout(() => {
                        gsap.to(".story-section", {
                            opacity: 1,
                            y: -30,
                            duration: 1.5,
                            ease: "power3.out"
                        });
                    }, 1000);
                }, 1000);                
            }, 800); 
        }
    });
}, 2000); 

gsap.to(".title", { y: -10, repeat: -1, yoyo: true, duration: 2, ease: "power1.inOut" });
gsap.to(".cta", { y: -5, repeat: -1, yoyo: true, duration: 1.5, ease: "power1.inOut" });

document.querySelectorAll(".cta").forEach(button => {
    button.addEventListener("mouseenter", () => gsap.to(button, { scale: 1.2, duration: 0.2 }));
    button.addEventListener("mouseleave", () => gsap.to(button, { scale: 1, duration: 0.2 }));
});

particlesJS("particles-js", {
    particles: {
        number: { value: 120 },
        color: { value: "#ffffff" },
        opacity: { value: 0.6, random: true },
        size: { value: 3, random: true },
        move: { speed: 2 },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.5, width: 1 }
    }
});

gsap.utils.toArray(".fade-in").forEach((element) => {
    gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});

document.addEventListener("mousemove", function (e) {
    let trail = document.createElement("div");
    trail.classList.add("mouse-trail");
    document.body.appendChild(trail);

    gsap.set(trail, { left: e.pageX, top: e.pageY });

    gsap.to(trail, {
        opacity: 0,
        scale: 2,
        duration: 0.5,
        onComplete: () => {
            trail.remove();
        }
    });
});
gsap.utils.toArray(".vision-card").forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: index * 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });
  