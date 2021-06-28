import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");
function promiseOfModal() {
    new Promise(function (resolve) {
        window.setTimeout(function () {
            resolve(modal)
        }, (1000 * 60));
    });
} 

const runModal = async () => {
     await promiseOfModal();     
     modal.style.display = "block";
};
runModal(); 



modal.addEventListener("click", (e) => {
    switch (e.target.className) {
        case "close":
        case "modal":
            modal.style.display = "none";
            break;
    }
})

//// continue button animation with alert to subscribe
const continueBtn = document.getElementById("continue");
function runAnimation() {
    return new Promise((resolve) => {
        continueBtn.addEventListener("animationend", () => {
        continueBtn.classList.add("btn-info");
        resolve(continueBtn);
        });
    });
}

async function runAlert() {
    await runAnimation();
    alert("Continue to subscribe!");
}

runAlert();

