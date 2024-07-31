// jquery para quando clicar em algum elemento
$(document).ready(function(){
    $('#btn_mobile').on('click', function () {
        $('#mobile_menu').toggleClass('active'); //abre o menu
        $('#btn_mobile').find('i').toggleClass('fa-x'); //troca o ícone do menu para um x
    });

    const sections = $('section');
    const navItems = $('.nav_item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;
        // console.log(scrollPosition); para testar a função
        //condição para adicionar um box-shadow caso o scroll seja <=0
        if(scrollPosition <= 0){
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '0px 20px 40px #2426721c');
        }

        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 86; //para saber quando a sessão chegou no topo
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }

        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');

    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});
