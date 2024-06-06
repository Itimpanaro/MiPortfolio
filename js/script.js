const listItem = document.querySelectorAll('.list_item')
const btnTecno = document.getElementById('btn_tecnologias')
const navInicio = listItem[0]
const navTecno = listItem[1]

setInterval(()=>{
    let scroll = window.scrollY
    if(scroll < 650){
        listItem[0].classList.add("activo")
        listItem[1].classList.remove("activo")
        listItem[2].classList.remove("activo")
    }
    if(scroll > 500){
        listItem[0].classList.remove("activo")
        listItem[1].classList.add("activo")
        listItem[2].classList.remove("activo")
    }
}, 100)

toTop(navInicio)
bajarATecno(navTecno)
bajarATecno(btnTecno)

function toTop(x){
    x.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}

function bajarATecno(x){
    x.addEventListener('click', () => {
        window.scrollTo({
            top: window.scrollY + window.innerHeight,
            behavior: 'smooth'
        })
    })
}




const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Star {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.alpha = Math.random();
        this.size = Math.random() * 1.5;
        this.speed = Math.random() * 0.002 + 0.001;
    }

    draw() {
        this.alpha += this.speed;
        if (this.alpha >= 1) {
            this.reset();
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
    }
}

const stars = [];
for (let i = 0; i < 100; i++) {
    stars.push(new Star());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        star.draw();
    }
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


