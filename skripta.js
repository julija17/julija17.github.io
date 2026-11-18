barve = ["#2D0000", "#757D6F", "#6D0808", "#2D0000", "#EEDFC7", "#6D0808", "#757D6F"]
function Okenca() {
    for (let i = 1; i < 25; i++) {
        let kvadrat = document.getElementById("ok" + i);
        kvadrat.style.width = ((i%4)+1)*4 + 2 + "%";
        kvadrat.style.backgroundColor = barve[i%7];

        if (i%7 == 4) {
            kvadrat.style.color = "black";
        }
    }
}
Okenca()


function Odpri(i) {
    let popup = document.getElementById("pop" + i);
    popup.showModal()
}

function Zapri(i) {
    let popup = document.getElementById("pop" + i);
    popup.close()
}

function Prevedi(i) {
    let prevod = document.getElementById("prevod" + i);
    prevod.style.display = "block";
}