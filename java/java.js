document.addEventListener("DOMContentLoaded", () => {

    // PREVENCIÓN: Forzar que el inicio (Hero) nunca desaparezca
    const heroSection = document.getElementById("hero") || document.querySelector(".hero");
    if (heroSection) {
        heroSection.style.opacity = "1";
        heroSection.style.visibility = "visible";
        heroSection.style.filter = "none";
    }

    const canvas = document.getElementById("matrix-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        const chars = "01100101 01110110 01110011 01110001 01110101 01100001 01100100 Sintaxia";
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
        setInterval(drawMatrix, 40);
        window.addEventListener("resize", () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }, { passive: true });
    }

    const progressBar = document.getElementById("scroll-progress");
    window.addEventListener("scroll", () => {
        if (!progressBar) return;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = `${progress}%`;
    }, { passive: true });

    const nodeBtns = document.querySelectorAll(".node-btn");
    const holoTitle = document.getElementById("holo-title");
    const holoDesc = document.getElementById("holo-desc");
    const holoReactor = document.querySelector(".holo-reactor");
    let typingInterval = 0;
    let typingTimeout = 0;

    if (nodeBtns.length > 0 && holoTitle && holoDesc) {
        nodeBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                clearInterval(typingInterval);
                clearTimeout(typingTimeout);
                nodeBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const newTitle = btn.getAttribute("data-title");
                const newDesc = btn.getAttribute("data-desc");

                if (holoReactor) {
                    holoReactor.style.animationDuration = "2s";
                    setTimeout(() => { holoReactor.style.animationDuration = "20s"; }, 800);
                }

                let charIndex = 0;
                holoTitle.textContent = "> DESFRAGMENTANDO...";
                holoDesc.textContent = "";

                typingTimeout = setTimeout(() => {
                    holoTitle.textContent = newTitle;
                    typingInterval = setInterval(() => {
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

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>_";
    document.querySelectorAll(".op-name").forEach(element => {
        element.addEventListener("mouseover", event => {
            let iteration = 0;
            const targetText = event.target.dataset.value || event.target.innerText;
            event.target.dataset.value = targetText; 
            clearInterval(event.target.interval);
            
            event.target.interval = setInterval(() => {
                event.target.innerText = targetText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) { return targetText[index]; }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");
                if (iteration >= targetText.length) { clearInterval(event.target.interval); }
                iteration += 1 / 3;
            }, 30);
        });
    });

    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");
    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("activo");
        });
    }

    document.addEventListener("click", (e) => {
        const ripple = document.createElement("div");
        ripple.className = "click-ripple";
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        setTimeout(() => { ripple.remove(); }, 500);
    });

    if (window.self !== window.top) {
        document.documentElement.classList.add('in-iframe');
    }

    const modal = document.getElementById("profile-modal");
    const modalFrame = document.getElementById("modal-frame");
    const closeModalBtn = document.getElementById("close-modal");
    const triggerButtons = document.querySelectorAll(".modal-trigger");

    if (modal && modalFrame && closeModalBtn) {
        triggerButtons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault(); 
                const targetUrl = btn.getAttribute("href");
                
                modal.classList.remove("closing"); 
                modal.classList.add("active"); 
                document.body.style.overflow = "hidden";

                setTimeout(() => {
                    modalFrame.src = targetUrl; 
                }, 350);
            });
        });
        
        const closeModal = () => {
            modal.classList.add("closing"); 
            
            setTimeout(() => {
                modal.classList.remove("active");
                modal.classList.remove("closing");
                modalFrame.src = ""; 
                document.body.style.overflow = "auto";
            }, 450); 
        };

        closeModalBtn.addEventListener("click", closeModal);
        modal.addEventListener("click", (e) => {
            if (e.target === modal) { closeModal(); }
        });
    }

    const terminalBody = document.getElementById("terminal-body");
    if (terminalBody) {
        terminalBody.innerHTML = ""; 
        const bootLines = [
            { text: "> inicializando_entorno_de_produccion...", speed: 15 },
            { text: "> cargando_arquitectura_frontend...", speed: 10 },
            { text: "  [OK] DOM_ESTRUCTURADO_Y_MONTADO", color: "var(--cyan)", speed: 5 },
            { text: "> sincronizando_repositorios_git... 100%", speed: 15 },
            { text: "> vinculando_desarrolladores: [Diego, Brian, Sergio, Cristian]", speed: 20 },
            { text: "  [OK] EQUIPO_SINTAXIA_EN_LINEA", color: "var(--green)", speed: 5 },
            { text: "> compilando_hojas_de_estilo_y_scripts...", speed: 15 },
            { text: "  [ALERTA] RENDIMIENTO_AL_MAXIMO", color: "#ffcc00", speed: 8 },
            { text: "> servidor_sintaxia_desplegado_y_activo_", color: "var(--green)", speed: 25, blink: true }
        ];

        let lineIndex = 0;
        function typeTerminalLine() {
            if (lineIndex < bootLines.length) {
                const lineData = bootLines[lineIndex];
                const p = document.createElement("p");
                if (lineData.color) p.style.color = lineData.color;
                if (lineData.blink) p.classList.add("blink");
                terminalBody.appendChild(p);
                
                let charIndex = 0;
                const typeInterval = setInterval(() => {
                    p.innerHTML = lineData.text.substring(0, charIndex + 1) + (lineData.blink ? "" : "<span style='color: var(--green);'>█</span>");
                    charIndex++;
                    if (charIndex === lineData.text.length) {
                        clearInterval(typeInterval);
                        if (!lineData.blink) p.innerHTML = lineData.text; 
                        lineIndex++;
                        setTimeout(typeTerminalLine, Math.random() * 150 + 50);
                    }
                }, lineData.speed);
            }
        }
        setTimeout(typeTerminalLine, 400);
    }

    const mainTitle = document.getElementById("sintaxia-title");
    if (mainTitle) {
        const targetText = "SINTAXIA";
        const runGlitchEffect = () => {
            let iteration = 0;
            clearInterval(mainTitle.glitchInterval);
            mainTitle.glitchInterval = setInterval(() => {
                mainTitle.innerText = targetText.split("").map((letter, index) => {
                    if (index < iteration) { return targetText[index]; }
                    return letters[Math.floor(Math.random() * letters.length)];
                }).join("");
                if (iteration >= targetText.length) { clearInterval(mainTitle.glitchInterval); }
                iteration += 1 / 3;
            }, 40);
        };
        setTimeout(runGlitchEffect, 200);
        mainTitle.addEventListener("mouseover", runGlitchEffect);
    }

    const revealElements = document.querySelectorAll('.section, .contact-section');
    revealElements.forEach(el => {
        if(el.id !== 'hero') { 
            el.classList.add('glitch-hidden');
        }
    });

    const revealOptions = {
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px" 
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) { return; } 
            else {
                entry.target.classList.remove('glitch-hidden');
                entry.target.classList.add('glitch-active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        if(el.id !== 'hero') { revealOnScroll.observe(el); }
    });

    const header = document.querySelector(".site-header");
    const scrollIndicator = document.getElementById("scroll-indicator");
    let indicatorHidden = false;

    let latestScrollY = 0;
    let ticking = false;

    function updateParserEffects() {
        const scrollY = latestScrollY;

        if (scrollY > 50) {
            header.style.background = "rgba(2, 10, 7, 0.98)";
            header.style.boxShadow = "0 4px 20px rgba(0, 255, 102, 0.15)";
        } else {
            header.style.background = "rgba(2, 10, 7, 0.95)";
            header.style.boxShadow = "none";
        }

        if (scrollIndicator && scrollY > 30 && !indicatorHidden) {
            indicatorHidden = true;
            scrollIndicator.style.opacity = "0";
            scrollIndicator.style.visibility = "hidden";
            scrollIndicator.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
        }

        ticking = false;
    }

    window.addEventListener("scroll", () => {
        latestScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(updateParserEffects);
            ticking = true;
        }
    }, { passive: true });

    if (scrollIndicator) {
        scrollIndicator.addEventListener("click", () => {
            document.querySelector("#mision").scrollIntoView({ behavior: "smooth" });
        });
    }

    document.querySelectorAll('.site-header nav a').forEach(anchor => {
        anchor.addEventListener('click', () => {
            const mainNav = document.getElementById("main-nav");
            if (mainNav) mainNav.classList.remove("activo");
        });
    });

    // ==========================================
    // CONSOLAS INTERACTIVAS DE PERFILES (CENTRALIZADO)
    // ==========================================
    const btnStatus = document.getElementById("btn-status");
    const statusOutput = document.getElementById("status-output");
    if (btnStatus && statusOutput) {
        const isCristian = window.location.pathname.includes("cristian");
        btnStatus.addEventListener("click", () => {
            btnStatus.disabled = true;
            statusOutput.textContent = isCristian ? "> Ejecutando escaneo..." : "> Compilando app frontend, conectando APIs e IA...";
            setTimeout(() => {
                const successMsg = isCristian 
                    ? "> ESTADO: <span style='color: #00ff66;'>SISTEMA OPERATIVO Y SINCRONIZADO AL 100%</span> [FRONTEND OK]"
                    : "> ESTADO: <span style='color: #00ff66;'>ENTORNO FULLSTACK DESPLEGADO AL 100%</span> [BUILD SUCCESS]";
                statusOutput.innerHTML = successMsg;
                btnStatus.disabled = false;
            }, 600);
        });
    }

    const btnQa = document.getElementById("btn-qa");
    const qaOutput = document.getElementById("qa-output");
    if (btnQa && qaOutput) {
        const isDiego = window.location.pathname.includes("diego");
        const pruebas = isDiego ? [
            "> Validando integridad de datos... [OK]",
            "> Comprobando rendimiento del sistema... [OK]",
            "> Verificando compatibilidad de navegadores... [OK]",
            "> Analizando seguridad de la aplicación... [OK]",
            "> Ejecutando pruebas de carga... [OK]"
        ] : [
            "> Verificando estructura HTML... [OK]",
            "> Analizando estilos CSS... [OK]",
            "> Ejecutando prueba JavaScript... [OK]",
            "> Buscando errores de interfaz... [OK]",
            "> TEST FINALIZADO // SISTEMA ESTABLE"
        ];
        
        btnQa.addEventListener("click", () => {
            let indice = 0;
            btnQa.disabled = true;
            qaOutput.innerHTML = "> QA_SCAN iniciado...<br>";
            const proceso = setInterval(() => {
                qaOutput.innerHTML += pruebas[indice] + "<br>";
                qaOutput.scrollTop = qaOutput.scrollHeight;
                indice++;
                if (indice === pruebas.length) {
                    clearInterval(proceso);
                    qaOutput.innerHTML += "<span style='color:#00ff66;'>> STATUS: QUALITY_CHECK_PASSED</span>";
                    btnQa.disabled = false;
                }
            }, 500);
        });
    }

});