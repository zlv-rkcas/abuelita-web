function crearRosas() {
    setInterval(() => {
        let rosa = document.createElement("div");
        rosa.className = "rosa";
        rosa.innerHTML = "🌹";

        rosa.style.left = Math.random() * 100 + "vw";
        rosa.style.animationDuration = (Math.random() * 3 + 3) + "s";

        document.body.appendChild(rosa);

        setTimeout(() => {
            rosa.remove();
        }, 5000);
    }, 300);
}

crearRosas();