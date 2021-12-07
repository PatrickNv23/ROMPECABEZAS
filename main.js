const c1 = document.querySelector(".c1"), c2 = document.querySelector(".c2"),
c3 = document.querySelector(".c3"), c4 = document.querySelector(".c4"),
c5 = document.querySelector(".c5"), c6 = document.querySelector(".c6"),
img1 = document.getElementById("img1"), img2 = document.getElementById("img2"),
img3 = document.getElementById("img3"), img4 = document.getElementById("img4"),
img5 = document.getElementById("img5"), img6 = document.getElementById("img6"),
footer = document.querySelector(".footer");

function onDragStar(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    let data = event.dataTransfer.getData("text/plain");
    let imagen = document.getElementById(data);
    event.target.appendChild(imagen);
    event.dataTransfer.cleanData;
    verificarRompecabezasCompletado();
}

function verificarRompecabezasCompletado(){
    if(c1.firstElementChild == img1 && c2.firstElementChild == img2 && 
        c3.firstElementChild == img3 && c4.firstElementChild== img4 && 
        c5.firstElementChild == img5 && c6.firstElementChild == img6)
    {
        audio = document.createElement("audio");
        audio.setAttribute("src","./sonidos/nivel_completado.mp3");
        footer.appendChild(audio);
        audio.play();
    }
};








