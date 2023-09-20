const funcsMenu = () =>{

    const open = () =>{
        $('.menu-modal').removeClass('hidden');
        $('.menu-mobile').addClass('hidden');
        $('.menu-close').removeClass('hidden');
    }

    const close = ()=>{
        $('.menu-mobile').removeClass('hidden');
        $('.menu-close').addClass('hidden');
        $('.menu-modal').addClass('hidden');
    }

    const nav = () =>{
        $('.menu-mobile').removeClass('hidden');
        $('.menu-close').addClass('hidden');
        $('.menu-modal').addClass('hidden');
    }


    $('.menu-mobile').click(function(){
        open();
    })

    $('.menu-close').click(function(){
        close();
    })

    $('.nav-menu > a').click(function(){
        nav();
    })


}



funcsMenu();