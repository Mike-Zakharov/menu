window.addEventListener('DOMContentLoaded', () => {
    // Получаю элементы 
    const menu1 = document.querySelector('.menu__1'),           //первое меню 
          menu2 = document.querySelectorAll('.menu__2'),           //все вторые меню
          menu3 = document.querySelector('.menu__3'),           //третье меню
          hamburger = document.querySelector('.hamburger'),     //гамбургер
          close = document.querySelectorAll('.close__button'),  // крестик закрытия
          menuItems = document.querySelectorAll('.menu__item'),        //элементы первого меню
          lang = document.querySelectorAll('.lang'),              // элементы смены языка
          returnInPastMenu = document.querySelectorAll('.return'),   // элемент возвращеня в прошлое меню
          item2 = document.querySelectorAll('.menu__2__item'),      // элементы второго меню   
          item3 = document.querySelectorAll('.menu__3__item'),     // элементы третьего меню
          promo = document.querySelector('.promo'),               // главный экран с бургером
          back = document.querySelector('.return__back'),     // элемент в меню3 для возвращения в меню2
          cloud = document.querySelector('.cloud_computing'),    // меню2 сервисы
          dd = document.querySelector('.lang_dd'),              //  дропдаун 
          itemDd = document.querySelectorAll('.dd__change'),  // элементы  выбора языка в дропдауне
          titleDd = document.querySelectorAll('.change__lang'),   // элементы шапки дропдауна
          menu1Lang = document.querySelectorAll('.menu__1_lang'),  // элемент выбора языка в меню 1
          menu2Lang1 = document.querySelectorAll('.menu__2_lang1'),   // элемент выбора языка в каждом меню 2
          menu2Lang2 = document.querySelectorAll('.menu__2_lang2'),   // элемент выбора языка в каждом меню 2
          menu2Lang3 = document.querySelectorAll('.menu__2_lang3'),   // элемент выбора языка в каждом меню 2
          menu2Lang4 = document.querySelectorAll('.menu__2_lang4'),   // элемент выбора языка в каждом меню 2
          menu3Lang = document.querySelectorAll('.menu__3_lang'),   // элемент выбора языка в меню 3
          checkLang = document.querySelectorAll('.active');      // галочка выборанного языка




    function showMenu1() {                             // по клику на бургер скрываем главный экран и 
        hamburger.addEventListener('click', () => {   // показываем первое меню
            promo.classList.remove('show');
            promo.classList.add('hide');
            menu1.classList.remove('hide');
            menu1.classList.add('show');
            
        });
    }


    // по клику на крестик скрываем меню и показываем главный экран

    function closeMenu() {                                
        close.forEach(item => {                           
            item.addEventListener('click', () => {
                if(menu1.classList.contains('show')){
                    menu1.classList.remove('show');
                    menu1.classList.add('hide');
                } else if(menu3.classList.contains('show')) {
                    menu3.classList.remove('show');
                    menu3.classList.add('hide');
                } else {
                    menu2.forEach((item, i) => {               //делаем перебор потому что несколько меню2
                        menu2[i].classList.remove('show');
                        menu2[i].classList.add('hide');
                    });    
                }
                
                promo.classList.remove('hide');
                promo.classList.add('show');
            });
        });
       
    }

    //показываем меню 2 и скрываем меню 1. несколько меню2 
    // для наглядности что все кнопки работают

    function showMenu2() {                                                                                             
        menuItems.forEach((item, i) => {
            item.addEventListener('click', () => {
                menu2[i].classList.add('show'); 
                menu1.classList.remove('show');
                menu1.classList.add('hide');

                // убираем обводку шапки lang
                lang.forEach(i => {
                    if(i.classList.contains('lang_hover')) {
                        i.classList.remove('lang_hover');
                    }
                });
                
            });
        });         
            
    }

    //делаем возвращение в прошлое меню1

    function returnInMenu() {
        returnInPastMenu.forEach((item, i) => {
            item.addEventListener('click', () =>{
                menu2[i].classList.remove('show'); 
                menu1.classList.add('show');
                menu1.classList.remove('hide'); 

                // убираем обводку шапки lang
                lang.forEach(i => {
                    if(i.classList.contains('lang_hover')) {
                        i.classList.remove('lang_hover');
                    }
                });
            });
        });    
    }

    //показываем меню 3 при клике на любой элемент в меню 2 и скрываем меню 2

    function showMenu3() {
        item2.forEach(item => {
            item.addEventListener('click', () => {
                menu2.forEach(menu => {
                    menu.classList.remove('show');
                    menu.classList.add('hide');
                }); 
                menu3.classList.add('show');
                menu3.classList.remove('hide');

                // убираем обводку шапки lang
                lang.forEach(i => {
                    if(i.classList.contains('lang_hover')) {
                        i.classList.remove('lang_hover');
                    }
                });
            });
        });
    }


    //делаем возвращение из меню 3,только тут уже 1 меню

    function returnInBack() {
        back.addEventListener('click', () =>{
                cloud.classList.add('show'); 
                menu3.classList.remove('show');
                menu3.classList.add('hide');

                // убираем обводку шапки lang
                lang.forEach(i => {
                    if(i.classList.contains('lang_hover')) {
                        i.classList.remove('lang_hover');
                    }
                }); 
        });    
    }
    
    // по клику делаем появление дропдауна и добавляем обводку шапки lang

    function showDd() {
        lang.forEach(item => {
            item.addEventListener('click', () => {
                dd.classList.toggle('hide');
                item.classList.toggle('lang_hover');    
            });
        });
    }

    // делаем смену языков в шапке дропдауна по клику,а также выделение выбранного языка 

    function changeLang() {
        itemDd.forEach((item, i) => {
            item.addEventListener('click', () => {
                titleDd.forEach(title => {
                    if(title.classList.contains('hide')) {

                    } else {
                        title.classList.add('hide');
                    }
                }); 
                // что бы работало во всех меню
                menu1Lang[i].classList.toggle('hide');
                menu2Lang1[i].classList.toggle('hide');
                menu2Lang2[i].classList.toggle('hide');
                menu2Lang3[i].classList.toggle('hide');
                menu2Lang4[i].classList.toggle('hide');
                menu3Lang[i].classList.toggle('hide');

                itemDd.forEach(it => {
                    if(it.classList.contains('lang__check')) {
                        it.classList.remove('lang__check');
                    }
                });
                item.classList.add('lang__check');
                
                checkLang.forEach(lang => {
                    if(lang.classList.contains('hide')) {

                    } else {
                        lang.classList.add('hide');
                    }
                });
                checkLang[i].classList.toggle('hide');

                // добавляем обводку шапки lang
                menu1Lang[i].classList.add('lang_hover');
                menu2Lang1[i].classList.add('lang_hover');
                menu2Lang2[i].classList.add('lang_hover');
                menu2Lang3[i].classList.add('lang_hover');
                menu2Lang4[i].classList.add('lang_hover');
                menu3Lang[i].classList.add('lang_hover');
            });
        });
    }



    showMenu1();
    closeMenu();
    showMenu2();
    returnInMenu();
    showMenu3();
    returnInBack();
    showDd();
    changeLang();

});