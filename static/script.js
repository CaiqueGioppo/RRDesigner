new Swiper('.carrossel', {
    loop: true,
    spaceBetween: 10,
   
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    320: {
        slidesPerView: 1
    },
    375: {
        slidesPerView: 1
    },
    425: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
    1440: {
        slidesPerView: 3
    },
    

    }

    
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const btnSaibaMais = document.querySelector(".btn-saiba-mais");
    const btnFechar = document.querySelector(".close");

    // Função para abrir o modal
    btnSaibaMais.addEventListener("click", function (event) {
        event.preventDefault(); // Impede que o botão leve a página ao topo
        modal.style.display = "flex";
    });

    // Função para fechar o modal
    btnFechar.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fecha o modal ao clicar fora dele
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

  