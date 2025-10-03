const initParticles = () => {
	const canvas = document.getElementById('particles');
	const ctx = canvas.getContext('2d');
	
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;

	const particles = [];
	const particleCount = Math.floor(window.innerWidth / 10);

	for (let i = 0; i < particleCount; i++) {
		particles.push({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			size: Math.random() * 3 + 1,
			speedX: Math.random() * 1 - 0.5,
			speedY: Math.random() * 1 - 0.5
		});
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		for (let i = 0; i < particles.length; i++) {
			const p = particles[i];
			
			p.x += p.speedX;
			p.y += p.speedY;
			
			if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
			if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
			
			ctx.beginPath();
			ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
			ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
			ctx.fill();
			
			for (let j = i + 1; j < particles.length; j++) {
				const p2 = particles[j];
				const distance = Math.sqrt(
					Math.pow(p.x - p2.x, 2) + 
					Math.pow(p.y - p2.y, 2)
				);
				
				if (distance < 100) {
					ctx.beginPath();
					ctx.moveTo(p.x, p.y);
					ctx.lineTo(p2.x, p2.y);
					ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
					ctx.lineWidth = 0.5;
					ctx.stroke();
				}
			}
		}
		
		requestAnimationFrame(animate);
	}

	animate();

	window.addEventListener('resize', () => {
		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
		
		for (let i = 0; i < particles.length; i++) {
			const p = particles[i];
			p.x = Math.random() * canvas.width;
			p.y = Math.random() * canvas.height;
		}
	});
};

initParticles();