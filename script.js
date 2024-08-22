// fazendo o menu mobile aparecer ao clicar o icone de barra utilizando jquery
$(document).ready(function(){

    $('#mobile-btn').on('click', function(){
        $('#mobile-menu').toggleClass('active');
         // mudando o icone de barra para x 
        $('#mobile-btn').find('i').toggleClass('fa-x');

    });

    // SOMBREAMENTO DA NAVBAR AO ROLAR A PAGINA

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function(){
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0

        if(scrollPosition<= 0){
            header.css('box-shadow', 'none');
        }else{
            header.css('box-shadow', '5px 1px 5px rgba( 0, 0, 0, 0.1)');
        }

    });//window

}); //document

//  FUNÇAO JS para ao clicar em um elemento do menu da navbar a tela rolar ate a sessão desejada


//  add o evento DOMContebtLoaded para garantir que o DOM esteja totalmente carregado antes de add o event listeners
document.addEventListener('DOMContentLoaded', function() {

    // Selecionar todos os links da navbar e adicionar um evento click em cada um
    const navbarLinks = document.querySelectorAll('#navbar a');

    // Altura da barra de navegação
    const navbarHeight = 71.66;

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {

            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            const sectionElement = document.getElementById(sectionId);

            // Descontar da rolagem a altura da navbar
            if (sectionElement) {
                const sectionPosition = sectionElement.offsetTop;
                const sectionBottom = sectionPosition - navbarHeight;

                // Utilizar scrollTo com a opção behavior: 'smooth' para rolar suavemente até a seção correspondente
                window.scrollTo({
                    top: sectionBottom,
                    behavior: 'smooth'
                });
            }
        }); // event
    }); // navbarLinks
}); // document
