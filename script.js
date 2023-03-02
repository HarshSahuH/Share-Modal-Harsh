const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// modal pop out function 
const openModal = ()=>{
    console.log('Modal is Opening');
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

//modal close function 
const closeModal = () =>{

    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}

