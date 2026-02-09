document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('botonAbrir');
    const sobre = document.getElementById('sobre');
    const carta = document.getElementById('carta');
    const fuegos = document.getElementById('fuegos');
    
    boton.addEventListener('click', function() {
        // Abre el sobre
        sobre.classList.add('abierto');
        
        // Después de medio segundo, saca la carta
        setTimeout(() => {
            carta.classList.add('salir');
            
            // Reproducir videos automáticamente
            reproducirVideos();
        }, 500);
        
        // Oculta la tapa (1s después del click)
        setTimeout(() => {
            sobre.classList.add('ocultar-tapa');
        }, 1000);
        
        // Oculta el sobre (1.5s después del click)
        setTimeout(() => {
            sobre.classList.add('ocultar');
        }, 1500);
        
        // Oculta el botón
        boton.classList.add('oculto');
        
        // Mostrar fotos flotantes gradualmente
        mostrarFotosFlotantes();
        
        // ¡FUEGOS ARTIFICIALES ÉPICOS!
        crearFuegosArtificiales();
    });
    
    function mostrarFotosFlotantes() {
        const fotosFlotantes = document.querySelectorAll('.media-flotante');
        fotosFlotantes.forEach((foto, index) => {
            setTimeout(() => {
                foto.classList.add('mostrar');
            }, 2000 + (index * 300)); // Aparecen escalonadas
        });
    }
    
    function reproducirVideos() {
        const video1 = document.getElementById('video1');
        const video2 = document.getElementById('video2');
        
        if (video1) {
            video1.play().catch(e => console.log('Error reproduciendo video 1:', e));
        }
        if (video2) {
            video2.play().catch(e => console.log('Error reproduciendo video 2:', e));
        }
    }
    
    function crearFuegosArtificiales() {
        fuegos.innerHTML = '';
        
        // Crear múltiples explosiones en diferentes momentos
        const numExplosiones = 11;
        
        for (let e = 0; e < numExplosiones; e++) {
            setTimeout(() => {
                crearExplosion();
            }, e * 400); // Una explosión cada 0.4 segundos
        }
        
        // Limpiar después de 6 segundos
        setTimeout(() => {
            fuegos.innerHTML = '';
        }, 11000);
    }
    
    function crearExplosion() {
        // Posición aleatoria para el centro de la explosión
        const centroX = 20 + Math.random() * 60; // Entre 20% y 80%
        const centroY = 20 + Math.random() * 60;
        
        // Colores vibrantes
        const colores = ['#ff0844', '#ffb800', '#44ff00', '#00d4ff', '#ff00ea', '#ff6b00', '#00ff88'];
        const color = colores[Math.floor(Math.random() * colores.length)];
        
        // Destello central
        const destello = document.createElement('div');
        destello.className = 'destello';
        destello.style.left = centroX + '%';
        destello.style.top = centroY + '%';
        destello.style.background = color;
        fuegos.appendChild(destello);
        
        // Crear partículas que explotan desde el centro
        const numParticulas = 30 + Math.floor(Math.random() * 20);
        
        for (let i = 0; i < numParticulas; i++) {
            const particula = document.createElement('div');
            particula.className = 'particula';
            
            // Calcular ángulo y velocidad aleatorios
            const angulo = (i / numParticulas) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
            const velocidad = 50 + Math.random() * 100;
            const tamano = 4 + Math.random() * 8;
            
            const dx = Math.cos(angulo) * velocidad;
            const dy = Math.sin(angulo) * velocidad;
            
            particula.style.setProperty('--dx', dx + 'px');
            particula.style.setProperty('--dy', dy + 'px');
            particula.style.left = centroX + '%';
            particula.style.top = centroY + '%';
            particula.style.width = tamano + 'px';
            particula.style.height = tamano + 'px';
            particula.style.background = color;
            particula.style.animationDuration = (2 + Math.random()) + 's';
            
            // Estela
            const estela = document.createElement('div');
            estela.className = 'estela';
            estela.style.setProperty('--dx', dx + 'px');
            estela.style.setProperty('--dy', dy + 'px');
            estela.style.left = centroX + '%';
            estela.style.top = centroY + '%';
            estela.style.background = color;
            estela.style.animationDuration = (2 + Math.random()) + 's';
            
            fuegos.appendChild(estela);
            fuegos.appendChild(particula);
        }
    }
});