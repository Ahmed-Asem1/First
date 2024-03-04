let openModalButton = document.querySelector("[data-target]");
let closeModalButton = document.querySelector("[data-close-button]");
let overLay = document.getElementById("overlay");


    openModalButton.addEventListener("click",function() {
        let modal = document.querySelector(openModalButton.dataset.target);
        openModal(modal);
    })

console.log(openModalButton.dataset.target);

function openModal (modal){
    if(modal == null) return;
    modal.classList.add("active");
    overLay.classList.add("active");
}


closeModalButton.addEventListener("click", function(){
        let modal = closeModalButton.closest("#data");
        closeModal(modal);
    })

function closeModal (modal){
    if(modal == null) return;
    modal.classList.remove("active");
    overLay.classList.remove("active");
}