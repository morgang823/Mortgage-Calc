/* -------------------------------------------------------------------
 * Theme Name            : Filaous - Portfolio Template
 * Author Name           : Yucel Yilmaz
 * Created Date          : 26 December 2020
 * Version               : 1.0
 * File                  : main.js
------------------------------------------------------------------- */
/* -------------------------------------------------------------------
   All Functions                               
   ------------------------ /
 * 01.Preloader
 * 02.Header
 * 03.Counter Up
 * 04.Owl Carousel
 * 05.Background Image
 * 06.Magnific Popup
 * 07.Wow Js
 * 08.ScrollIt
 * 09.Contact Form
 * 10.Skillsbar
 * 11.My Works
 * 12.Bg Video
 * 13.Color Options
------------------------------------------------------------------- */

$( document ).ready( function() {
    // All Functions
    Filaous_PreLoader();
    Filaous_Header();
    Filaous_CounterUp();
    Filaous_Carousel();
    Filaous_BgImgPath();
    Filaous_MGFPopup();
    Filaous_WowJs();
    Filaous_ScrollIt();
    Filaous_ContactForm();
    Filaous_SkillsBar();
    Filaous_MyWorks();
    Filaous_BgVideo();
    Filaous_Color_Options();
});

/* -------------------------------------------------------------------
 * 01.Preloader
------------------------------------------------------------------- */
function Filaous_PreLoader(){
    "use-scrict";

    // Variables
    let preloaderWrap = $( '#preloader-wrap' );
    let loaderInner = preloaderWrap.find( '.preloader-inner' );
 
    $( window ).ready(function(){
        loaderInner.fadeOut(); 
        preloaderWrap.delay(350).fadeOut( 'slow' );
    });   
}

/* -------------------------------------------------------------------
 * 02.Header
------------------------------------------------------------------- */
function Filaous_Header() {
    "use-strict";

    // Variables
    let header          = $( '.header' );
    let logoTransparent = $( '.logo-transparent' );
    let scrollTopBtn    = $( '.scroll-top-btn' );
    let logoNormal      = $( '.logo-normal' );
    let windowWidth     = $( window ).innerWidth();
    let scrollTop       = $( window ).scrollTop();
    let $dropdown       = $( '.dropdown' );
    let $dropdownToggle = $( '.dropdown-toggle' );
    let $dropdownMenu   = $( '.dropdown-menu' );
    let showClass       = 'show';

    $('body').scrollspy({ target: '#fixedNavbar' });
    
    $( '.menu-link' ).on( 'click', function(){
        $( '#fixedNavbar' ).collapse( 'hide' );
    });

    // When Window On Scroll
    $( window ).on( 'scroll', function(){
        let scrollTop = $( this ).scrollTop();

        if( scrollTop > 85 ) {
            logoTransparent.hide();
            logoNormal.show();
            header.addClass( 'header-shrink' );
            scrollTopBtn.addClass( 'active' );
        }else {
            logoTransparent.show();
            logoNormal.hide();
            header.removeClass( 'header-shrink' );
            scrollTopBtn.removeClass( 'active' );
        }
    });

    // The same process is done without page scroll to prevent errors.
    if( scrollTop > 85 ) {
        logoTransparent.hide();
        logoNormal.show();
        header.addClass( 'header-shrink' );
        scrollTopBtn.addClass( 'active' );
    }else {
        logoTransparent.show();
        logoNormal.hide();
        header.removeClass( 'header-shrink' );
        scrollTopBtn.removeClass( 'active' );
    }

    // Window On Resize Hover Dropdown
    $( window ).on( 'resize', function() {
        let windowWidth  = $( this ).innerWidth();

        if ( windowWidth > 991 ) {
            $dropdown.hover(
                function() {
                    let hasShowClass  =  $( this ).hasClass( showClass );
                    if( hasShowClass!==true ){
                        $( this ).addClass( showClass );
                        $( this ).find( $dropdownToggle ).attr( 'aria-expanded', 'true' );
                        $( this ).find( $dropdownMenu ).addClass( showClass );
                    }
                },
                function() {
                    $( this ).removeClass( showClass);
                    $( this ).find( $dropdownToggle ).attr( 'aria-expanded', 'false' );
                    $( this ).find( $dropdownMenu ).removeClass( showClass );
                }
            );
        }else {
            $dropdown.off( 'mouseenter mouseleave' );
            header.find( '.main-menu' ).collapse( 'hide' );
        }
    });
    // The same process is done without page scroll to prevent errors.
    if ( windowWidth > 991 ) {
        $dropdown.hover(
            function() {
                const $this = $( this );

                var hasShowClass  = $this.hasClass( showClass );

                if( hasShowClass!==true ){
                    $this.addClass( showClass);
                    $this.find ( $dropdownToggle ).attr( 'aria-expanded', 'true' );
                    $this.find( $dropdownMenu ).addClass( showClass );
                }
            },
            function() {
                const $this = $( this );
                $this.removeClass( showClass );
                $this.find( $dropdownToggle ).attr( 'aria-expanded', 'false' );
                $this.find( $dropdownMenu ).removeClass( showClass );
            }
        );
    }else {
        $dropdown.off( 'mouseenter mouseleave' );
    }
}

/* -------------------------------------------------------------------
 * 03.Counter Up
------------------------------------------------------------------- */
function Filaous_CounterUp() {
    "use-strict";

    // Variables
    let counterItem     = $( '.counter' );

    counterItem.counterUp({
        delay: 10,
        time: 1000
    });
}

/* -------------------------------------------------------------------
 * 04.Owl Carousel
------------------------------------------------------------------- */
function Filaous_Carousel(){
    "use-strict";

    // Variables
    let blogCarousel            = $( '#blogCarousel');
    let testimonialCarousel     = $( '#testimonialCarousel');
    let portfolioCarousel       = $( '#portfolioCarousel');
    var hasRtl                  = $("body").hasClass("rtl-mode");

    if (hasRtl===true) {
        testimonialCarousel.owlCarousel({
            loop:true,
            margin:30,
            dots:false,
            rtl:true,
            nav:true,
            smartSpeed:1000,
            navText: [ "<span class='fa fa-arrow-left'></span>","<span class='fa fa-arrow-right'></span>" ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                900:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        });   
        blogCarousel.owlCarousel({
            loop:true,
            margin:30,
            dots:false,
            rtl:true,
            nav:true,
            smartSpeed:1000,
            navText: [ "<span class='fa fa-arrow-left'></span>","<span class='fa fa-arrow-right'></span>" ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });  
        portfolioCarousel.owlCarousel({
            loop:true,
            margin:20,
            dots:false,
            nav:true,
            rtl:true,
            smartSpeed:1000,
            navText: [ "<span class='fa fa-arrow-left'></span>","<span class='fa fa-arrow-right'></span>" ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });  
    } else {
        testimonialCarousel.owlCarousel({
            loop:true,
            margin:30,
            dots:false,
            nav:true,
            smartSpeed:1000,
            navText: [ "<span class='fa fa-arrow-left'></span>","<span class='fa fa-arrow-right'></span>" ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                900:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        });  
        blogCarousel.owlCarousel({
            loop:true,
            margin:30,
            dots:false,
            nav:true,
            smartSpeed:1000,
            navText: [ "<span class='fa fa-arrow-left'></span>","<span class='fa fa-arrow-right'></span>" ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });  
        portfolioCarousel.owlCarousel({
            loop:true,
            margin:20,
            dots:false,
            nav:true,
            smartSpeed:1000,
            navText: [ "<span class='fa fa-arrow-left'></span>","<span class='fa fa-arrow-right'></span>" ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });  
    }
}

/* -------------------------------------------------------------------
 * 05.Background Image Path
------------------------------------------------------------------- */
function Filaous_BgImgPath(){
    "use-scrict";

    // Variables
    let dataBgItem         = $( '*[data-bg-image-path]' );

    dataBgItem.each( function() {
        let imgPath        = $( this ).attr( 'data-bg-image-path' );
        $( this).css( 'background-image', 'url(' + imgPath + ')' );
    });
}

/* -------------------------------------------------------------------
 * 06.Magnific Popup
------------------------------------------------------------------- */
function Filaous_MGFPopup(){
    "use-scrict";

    // Variables
    let youtubePopup = $( '.about-video-btn' );
    let designProcessPopup = $( '.design-process-video-btn' );

    youtubePopup.magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    designProcessPopup.magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
}

/* -------------------------------------------------------------------
 * 07.Wow Js
------------------------------------------------------------------- */
function Filaous_WowJs(){
    "use-scrict";

    var wow = new WOW(
            {
            boxClass:     'wow',     
            animateClass: 'animated',
            offset:       0,         
            mobile:       true,      
            live:         true       
        }
    )
    wow.init();
}

/* -------------------------------------------------------------------
 * 08.ScrollIt
------------------------------------------------------------------- */
function Filaous_ScrollIt() {
    "use-strict";

    $.scrollIt({
        upKey: 38,             // key code to navigate to the next section
        downKey: 40,           // key code to navigate to the previous section
        easing: 'linear',      // the easing function for animation
        scrollTime: 600,       // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null,    // function(pageIndex) that is called when page is changed
        topOffset: 0           // offste (in px) for fixed top navigation
    });
}

/* -------------------------------------------------------------------
 * 09.Contact Form
------------------------------------------------------------------- */
function Filaous_ContactForm() {
    "use-strict";
    //  Validate Input Variables
    var contactEmail    = $("#contactEmail");
    var contactPhone    = $("#contactPhone");
    var formControl     = $('.contact-form-group .form-control');
    
    // Added AutoComplete Attribute Turned Off
    formControl.attr("autocomplete","off");

    // Email Validation
    contactEmail.on("keyup", function() {
        var emailInputValue  = $(this).val().trim();

        if (emailInputValue.length > 0) {
            let validate = $(this).EmailValidate();

            if (!validate === true) {
                $(this).parent().find("span").removeClass("success").addClass("error");
            } else {
                $(this).parent().find("span").removeClass("error").addClass("success");
            }
        }else{
            $(this).parent().find("span").removeAttr("class");  
        }
    });

    // Phone Validation
    contactPhone.on("keyup", function() {
        var phoneInputValue  = $(this).val().trim();


        if (phoneInputValue.length > 0) {
            let validate = $(this).PhoneValidate();

            if (!validate === true) {
                $(this).parent().find("span").removeClass("success").addClass("error");
            } else {
                $(this).parent().find("span").removeClass("error").addClass("success");
            }
        }else{
            $(this).parent().find("span").removeAttr("class");
            $(this).parent().find("span").addClass("error");  
        }
    });

    // Form Control Validate
    $(".form-control:not('#contactEmail,#contactPhone')").on("keyup", function() {
        var formInputValue  = $(this).val().trim();

        if (formInputValue.length > 0) {
            $(this).parent().find("span").removeClass("error").addClass("success");
        }else {
            $(this).parent().find("span").removeAttr("class");
            $(this).parent().find("span").addClass("error");
        }
    });
    
    // Contact Form Submit
    $("#contactForm").on("submit", function(event) {
        ///var $this = $(this);

        //  Contact Form Input Value 
        let $this         = $(this);
        let name          = $("#contactName").val().trim();
        let email         = $("#contactEmail").val().trim();
        let phone         = $("#contactPhone").val().trim();
        let subject       = $("#contactSubject").val().trim();
        let message       = $("#contactMessage").val().trim();
        let validateEmail = $("#contactEmail").EmailValidate();
        let validatePhone = $("#contactPhone").PhoneValidate();
        let selectedNull  = $('#contactSubject').find("option").eq(0).val();

        if (name =='' || email =='' || phone == '' || message == '') {
            $(this).parent().find("span").addClass("error");
            if($('.empty-form').css("display") == "none"){
                $('.empty-form').stop().slideDown().delay(3000).slideUp();
            }else {
                return false;
            }
        } else if (subject == selectedNull) {
            if($('.subject-alert').css("display") == "none"){
                $('.subject-alert').stop().slideDown().delay(3000).slideUp();
            }else {
                return false;
            }
        } else if (!validatePhone === true) {
            $("#contactPhone").parent().find("span").removeClass("success").addClass("error");
            if($('.phone-invalid').css("display") == "none"){
                $('.phone-invalid').stop().slideDown().delay(3000).slideUp();
            }else {
                return false;
            }
        } else if (!validateEmail === true) {
            $("#contactEmail").parent().find("span").removeClass("success").addClass("error");
            if($('.email-invalid').css("display") == "none"){
                $('.email-invalid').stop().slideDown().delay(3000).slideUp();
            }else {
                return false;
            }
        } else {
            $this.find(':submit').attr('disabled','true');
            $.ajax({
                url: "phpmailer/send_mail.php",
                data: {
                    contact_name: name,
                    contact_email: email,
                    contact_phone: phone,
                    contact_subject: subject,
                    contact_message: message
                },
                type: "POST",
                success: function(response) {
                    $(".form-control").parent().find("span").removeAttr("class");
                    $("#contactForm")[0].reset();
                    $(".select-selected").html(selectedNull);
                    if (response == true) {
                        $this.find(':submit').removeAttr('disabled');
                        $("#formSuccessModal").modal("show");
                    } else {
                        $this.find(':submit').removeAttr('disabled');
                        $("#formDangerModal").modal("show");
                        $("#formDangerModal #error_message").html(response);
                    }
                }
            });
        }
        event.preventDefault();
    });
}

/* -------------------------------------------------------------------
 * 10.Skills Bar
------------------------------------------------------------------- */
function Filaous_SkillsBar(){
    "use-strict";

    // Variables
    var skillsItem         = $( '.skills-item' );

    skillsItem.each(function(){
        var skillPercent   = $( this ).find( '.skills-progress-value' ).attr( 'data-percent' );
        $( this ).find( '.skills-progress-value' ).css( 'width', skillPercent + '%' );
    });
}

/* ------------------------------------------------------------------- */
/* 11.My Works
/* ------------------------------------------------------------------- */
function Filaous_MyWorks() {
    "use-strict";

    // Variables 
    let galleryWrapper     = $( '#portfolio-masonry-wrap' );
    let portfolioFilterBtn = $( '.portfolio-filter a' );
    let portfolioGrid      = $('.portfolio-grid');

    // Portfolio Masonary Gallery
    galleryWrapper.imagesLoaded(function() {
        let grid = galleryWrapper.isotope({
            itemSelector: '.portfolio-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.portfolio-item',
            }
        });

        // filter items on button click
        portfolioFilterBtn.on( 'click', function(event) {
            let filterValue = $(this).attr( 'data-portfolio-filter' );
            grid.isotope({
                filter: filterValue
            });
            event.preventDefault();
        });
    });

    // filter items on button click
    portfolioFilterBtn.on( 'click', function(event) {
        portfolioFilterBtn.removeClass( 'current' );
        $(this).addClass( 'current' );
        event.preventDefault();
    });

    //  Portfolio Gallery Popup */
    portfolioGrid.magnificPopup({
        delegate: '.portfolio-zoom-link',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
}
/* -------------------------------------------------------------------
 * 12.Bg Video
------------------------------------------------------------------- */
function Filaous_BgVideo() {
    "use-strict";

    var hasVideoBg = $("#video-background").attr("data-video-bg");

    if(hasVideoBg) {
        $("#video-background").mb_YTPlayer();
    }
}
/* ------------------------------------------------------------------- */
/* 13.Color Options
/* ------------------------------------------------------------------- */
function Filaous_Color_Options(){
    "use-strict";

    var toggleLinkTag = $('#theme-color-toggle');
    var colorOptionsSidebarToggle = $('#colorOptionsSidebarToggle');
    var rtlSidebar = $('#rtlSidebar');
    var rtlToggle = $('#rtlToggle');
    var colorOptions = $('.color-options-list');
    var colorOptionsWrap = $('.color-options-wrap');
    var optionsItem = colorOptions.find('span');

    optionsItem.first().addClass("active");

    colorOptionsSidebarToggle.on("click",function(){
        colorOptionsWrap.toggleClass("active");
    });

    optionsItem.each(function(){
        var itemBgData = $(this).attr("data-bg-color");
        $(this).css('background-color', itemBgData);
    });

    optionsItem.on('click',function(){
        var bgActiveColor = $(this).css("background-color");
        var itemSrcData = $(this).attr("data-skins-css-path");
        optionsItem.removeClass("active");
        $(this).addClass("active");
        colorOptionsSidebarToggle.css("background-color",bgActiveColor);
        rtlToggle.css("background-color",bgActiveColor);
        toggleLinkTag.attr("href", itemSrcData);
    });

    var activeBgColor = optionsItem.first().css("background-color");

    rtlToggle.css("background-color", activeBgColor);

    // Rtl Toggle
    rtlToggle.on("click",function() {

        if ( colorOptionsWrap.hasClass("active")){
            colorOptionsWrap.toggleClass("active");
        }
        if($(this).text() == "RTL"){
            $(this).text("LTR").removeClass('rtl-mode').addClass("rtl-mode");
            $('body').removeClass("rtl-mode").addClass("rtl-mode");
        }else {
            rtlSidebar.removeClass("rtl-mode").addClass("ltr-mode");
            $(this).text("RTL").removeClass('rtl-mode').addClass("ltr-mode");
            $('body').removeClass("rtl-mode");
        }
    });
}