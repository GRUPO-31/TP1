document.addEventListener("DOMContentLoaded", () => {

    /* --- 1. RAIN MATRIX BACKGROUND --- */
    const canvas = document.getElementById("matrix-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const chars = "01100101 01110110 01110011 01110001 01110101 01100001 01100100 DevSquad<>//";
        const fontSize = 14;
        const columns = Math.floor(width / fontSize);
        const drops = Array(columns).fill(1);

        function drawMatrix() {
            ctx.fillStyle = "rgba(3, 8, 6, 0.08)";
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = "#00ff66";
            ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(drawMatrix, 33);

        window.addEventListener("resize", () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });
    }

    /* --- 2. BARRA DE PROGRESO DE SCROLL --- */
    const progressBar = document.getElementById("scroll-progress");
    window.addEventListener("scroll", () => {
        if (!progressBar) return;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });

    /* --- 3. CONTROLADOR HOLO-CORE MATRIX (DIRECTIVAS) --- */
    const nodeBtns = document.querySelectorAll(".node-btn");
    const holoTitle = document.getElementById("holo-title");
    const holoDesc = document.getElementById("holo-desc");
    const holoReactor = document.querySelector(".holo-reactor");

    if (nodeBtns.length > 0 && holoTitle && holoDesc) {
        nodeBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                nodeBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const newTitle = btn.getAttribute("data-title");
                const newDesc = btn.getAttribute("data-desc");

                // Aceleración temporal del reactor
                if (holoReactor) {
                    holoReactor.style.animationDuration = "2s";
                    setTimeout(() => {
                        holoReactor.style.animationDuration = "20s";
                    }, 800);
                }

                // Efecto de desfragmentación
                let charIndex = 0;
                holoTitle.textContent = "> DESFRAGMENTANDO...";
                holoDesc.textContent = "";

                setTimeout(() => {
                    holoTitle.textContent = newTitle;
                    const typingInterval = setInterval(() => {
                        if (charIndex < newDesc.length) {
                            holoDesc.textContent += newDesc.charAt(charIndex);
                            charIndex++;
                        } else {
                            clearInterval(typingInterval);
                        }
                    }, 12);
                }, 200);
            });
        });
    }

    /* --- 4. EFECTO DESFRAGMENTADOR EN NOMBRES DE OPERATIVOS --- */
    const opCards = document.querySelectorAll(".op-card");
    const cipherChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_//";

    opCards.forEach(card => {
        const nameEl = card.querySelector(".op-name");
        if (!nameEl) return;

        const originalText = nameEl.textContent;

        card.addEventListener("mouseenter", () => {
            let iterations = 0;
            const interval = setInterval(() => {
                nameEl.textContent = originalText
                    .split("")
                    .map((char, index) => {
                        if (index < iterations) return originalText[index];
                        return cipherChars[Math.floor(Math.random() * cipherChars.length)];
                    })
                    .join("");

                if (iterations >= originalText.length) {
                    clearInterval(interval);
                }
                iterations += 1 / 2;
            }, 30);
        });
    });

    /* --- 5. MENÚ MOBILE RESPONSIVO --- */
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("activo");
        });
    }

    /* --- 6. PULSO AL HACER CLIC (RIPPLE EFFECT) --- */
    document.addEventListener("click", (e) => {
        const ripple = document.createElement("div");
        ripple.className = "click-ripple";
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 500);
    });

});