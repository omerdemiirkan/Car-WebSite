/**
 * http://kopatheme.com
 * Copyright (c) 2016 Kopatheme
 *
 * Licensed under the GPL license:
 *  http://www.gnu.org/licenses/gpl.html
  **/

/**
 *  1.  slide pro custom
    2.  fitvids
    3.  slider pro
    4.  slick slider
    5.  jquery change img
    6.  seach form seach
    7.  mega menu
    8.  supperfish menu top
    9.  owwl slide
    10. fliter
    11. match height
    12. owl carousel
    13. load more
    14. fitvid video
    15. owl crousel
    16. acordion
    17. masonry
    18. masonry filter
    19. supper click
    20. grid list
    21. chart circle
    22. map
    23. woccomer js fixed

 *-----------------------------------------------------------------
 **/

var container_01;
var sync1 = jQuery('#sync1');
var sync2 = jQuery('#sync2');
 "use strict";
jQuery(document).ready(function(){
    //back to top
    if(jQuery('.spa-wrap-gototop').length){
        jQuery('.spa-wrap-gototop').on('click',function(){
            jQuery("html, body").animate({ scrollTop: 0 }, "slow");
        });
    }
    //slide pro custom
    jQuery('.spa-bg-data').each(function(index, el) {
        var img_link = jQuery(this).attr('data-bgImage');
        var url = 'url("' + img_link + '")'
        jQuery(this).css('background-image',url);
    });
    //fitvids
    if(jQuery('.spa-entry-fitvid').length){
        jQuery('.spa-entry-fitvid').fitVids();
    }
    //slider pro
    if (jQuery('.spa-slider-pro-detail').length) {
        jQuery('.spa-slider-pro-detail').sliderPro({
            width: '100%',
            orientation: 'vertical',
            loop: false,
            arrows: true,
            buttons: false,
            thumbnailsPosition: 'right',
            thumbnailPointer: true,
            thumbnailWidth: 186,
            thumbnailArrows: false,
            fadeThumbnailArrows: false,
            arrows: false,
            buttons: false,
            breakpoints: {
                639: {
                    thumbnailsPosition: 'bottom',
                    thumbnailWidth: 150,
                },
            },
        });
        jQuery('.spa-wrap-slide-arow .spa-prev').on('click',function(){
            jQuery('.spa-slider-pro-detail').sliderPro('nextSlide');   
        });
        jQuery('.spa-wrap-slide-arow .spa-next').on('click',function(){
            jQuery('.spa-slider-pro-detail').sliderPro('previousSlide');   
        });
    }
    //slick slider
    if(jQuery('.spa-widget-owl-home-2').length){
        jQuery('.spa-widget-owl-home-2 .spa-slick-1').slick({
            centerMode: true,
            slidesToShow: 5,
            asNavFor: '.spa-slick-2',
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        });
         jQuery('.spa-widget-owl-home-2 .spa-slick-2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.spa-slick-1',
        });
    }
    //jquery change img
    jQuery('.spa-change-color-product span').on('click',function(){
        jQuery('.spa-change-color-product span').removeClass('active');
        jQuery(this).addClass('active');
        var srcImage = jQuery(this).attr('data-src');
        jQuery(this).closest('.entry-thumb').find('img').attr('src',srcImage);
    });
    jQuery('.spa-change-color-product span').each(function(index, el) {
        var srcImage = jQuery(this).closest('.entry-thumb').find('img').attr('src');
        var srcChange = jQuery(this).attr('data-src');
        if(srcImage == srcChange){
            jQuery(this).addClass('active')
        }
    });
    //seach form seach
    jQuery('.spa-search-form-header').on('click',function(){
        jQuery('.spa-wrap-search-form').css('display','block');
        jQuery('.spa-wrap-search-form form').animate({top: '250px'});
    });
    jQuery('.spa-wrap-search-form i').on('click',function(){
        jQuery('.spa-wrap-search-form').css('display','none');
        jQuery('.spa-wrap-search-form form').animate({top: '150px'});
    });
    //mega menu
    jQuery('.spa-menu-responsive-header').on('click',function(){
        jQuery('.spa-wrap-menu-responsive').css('height','100%');
    });
    jQuery('.spa-searcch-slide').on('click',function(){
        jQuery('.spa-wrap-sarch-slider').css('height','100%');
    });
    jQuery('.spa-search-login').on('click',function(){
        jQuery('.spa-wrap-login-slider').css('height','100%');
    });
    jQuery('.spa-close-menu-responsive').on('click',function(){
        jQuery('.spa-wrap-menu-responsive').css('height','0px');
        jQuery('.spa-wrap-sarch-slider').css('height','0px');
        jQuery('.spa-wrap-login-slider').css('height','0px');
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
    });
    //
    jQuery('.spa-menu-responsive >ul').superclick({
        popUpSelector: 'ul,.sf-mega',
        delay:       400,
        animation:   {opacity:'show',height:'show'},
        animationOut:   {opacity:'hide',height:'hide'},
        speed:       'normal',
        cssArrows:  false,
    });
    //menu top
    jQuery('.spa-menu-top >ul').superfish({
        popUpSelector: 'ul,.sf-mega',
        delay:       400,
        animation:   {opacity:'show',height:'show'},
        animationOut:   {opacity:'hide',height:'hide'},
        speed:       'normal',
        cssArrows:  false,
    });
    //owwl slide
    if(jQuery('.spa-widget-slide-owl-blog').length){
        owl_slider_1 = jQuery('.spa-widget-slide-owl-blog .spa-owl-slider');
        owl_slider_1.owlCarousel({
            items: 1,
            loop: true,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [767, 1],
            itemsMobile: [639, 1],
            navigation: false,
            pagination: true,
        });
        jQuery('.spa-widget-slide-owl-blog .owl-pagination .owl-page').each(function(index, el) {
            jQuery(this).children('span').text(index + 1);
        });
    }
    if(jQuery('.spa-widget-owl-slide-home1').length){
        owl_slider_12 = jQuery('.spa-widget-owl-slide-home1 .spa-owl-slider');
        owl_slider_12.owlCarousel({
            items: 1,
            loop: true,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [767, 1],
            itemsMobile: [639, 1],
            navigation: false,
            pagination: true,
        });
        jQuery('.spa-widget-owl-slide-home1 .owl-pagination .owl-page').each(function(index, el) {
            jQuery(this).children('span').text(index + 1);
        });
    }
    //fliter 
    if(jQuery('.price_slider_wrapper').length){
        jQuery('.price_slider').slider({
              range: true,
              min: 0,
             max: 1500,
              values: [ 100, 1000 ],
              slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
              }
            });
            $( "#amount" ).val( "$" + $( ".price_slider" ).slider( "values", 0 ) +
              " - $" + $( ".price_slider" ).slider( "values", 1 ) );
    }
    if(jQuery('.price_slider_wrapper.style-01').length){
        jQuery('.price_slider').slider({
              range: true,
              min: 0,
             max: 1500,
              values: [ 100, 1000 ],
              slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
              }
            });
            $( "#amount" ).val( "$" + $( ".price_slider" ).slider( "values", 0 ) +
              " - $" + $( ".price_slider" ).slider( "values", 1 ) );
    }
    //match height
    if(jQuery('.mh-populor').length){
        jQuery('.mh-populor').children().matchHeight();
    }
    //owl carousel
    if(jQuery('.mdc-entry-post').length){
        owl_10 = jQuery('.mdc-entry-post .owl-carousel');
        owl_10.owlCarousel({
            items: 2,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [767, 1],
            itemsMobile: [639, 1],
            navigation: false,
            pagination: true,
        });
        jQuery('.mdc-entry-post .owl-pagination .owl-page').each(function(index, el) {
            jQuery(this).children('span').text(index + 1);
        });
    }
    if(jQuery('.spa-widget-about-post').length){
        owl_011 = jQuery('.spa-widget-about-post .widget-content .owl-carousel');
        owl_011.owlCarousel({
            items: 3,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [767, 2],
            itemsMobile: [639, 1],
            navigation: true,
            pagination: false,
        });
    }
    if(jQuery('.spa-widget-our-team').length){
        owl_01 = jQuery('.spa-widget-our-team .widget-content .owl-carousel');
        owl_01.owlCarousel({
            items: 5,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [767, 2],
            itemsMobile: [639, 1],
            navigation: true,
            pagination: false,
        });
    }
    if(jQuery('.spa-widget-list-product-intro').length){
        owl_012 = jQuery('.spa-widget-list-product-intro .widget-content .owl-carousel');
        owl_012.owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [767, 2],
            itemsMobile: [639, 1],
            navigation: true,
            pagination: false,
        });
    }
    if(jQuery('.spa-widget-owl-home-1').length){
        owl_0222 = jQuery('.spa-widget-owl-home-1 .widget-content .spa-slick-3');
        owl_0222.slick({
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '500px',
            responsive: [
                {
                    breakpoint: 1550, 
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0px',
                    }  
                },
            ]    
        });
    }
    if(jQuery('.spa-widget-owl-2-home-1').length){
        owl_03 = jQuery('.spa-widget-owl-2-home-1 .widget-content .owl-carousel');
        owl_03.owlCarousel({
            singleItem: true,
            nav: false,
            dots: true,
            autoHeight: true,
        });
        jQuery('.spa-widget-owl-2-home-1 .owl-pagination .owl-page').each(function(index, el) {
            jQuery(this).children('span').text(index + 1);
        });
    }
    if(jQuery('.spa-widget-sync-owl-home-1').length){
        sync1.owlCarousel({
            singleItem: true,
            stopOnHover: true,
            navigationText: false,
            pagination: false,
            navigation: false,
            afterAction: syncPosition,
            responsiveRefreshRate: 200,
        });
        sync2.owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [767, 3],
            itemsMobile: [639, 3],
            navigation: true,
            stopOnHover: true,
            pagination: false,
            navigationText: false,
            responsiveRefreshRate: 100,
            afterInit: function(el) {
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
        sync2.on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = jQuery(this).data("owlItem");
            sync1.trigger("owl.goTo", number);
        });
    }
    if(jQuery('.spa-widget-owl-3-home-1').length){
        owl_01 = jQuery('.spa-widget-owl-3-home-1 .widget-content .owl-carousel');
        owl_01.owlCarousel({
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [767, 1],
            itemsMobile: [639, 1],
            navigation: true,
            pagination: false,
        });
    }
    if(jQuery('.spa-widget-owl-home-2').length){
        owl_05 = jQuery('.spa-widget-owl-home-2 .widget-content .owl-carousel');
        owl_05.owlCarousel({
            center: true,
            items: 5,
            loop: true,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [767, 2],
            itemsMobile: [639, 1],
            nav: true,
            pagination: false,
        });
    }
    if(jQuery('.spa-widget-2col-home-2').length){
        owl_06 = jQuery('.spa-widget-2col-home-2 .widget-content .spa-wrap-owl-1 .owl-carousel');
        owl_06.owlCarousel({
            items: 2,
            loop: true,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [767, 2],
            itemsMobile: [639, 1],
            navigation: true,
            pagination: false,
        });
    }
    if(jQuery('.spa-widget-2col-home-2').length){
        owl_07 = jQuery('.spa-widget-2col-home-2 .widget-content .spa-wrap-owl-2 .owl-carousel');
        owl_07.owlCarousel({
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [767, 1],
            itemsMobile: [639, 1],
            navigation: true,
            pagination: false,
        });
    }
    if(jQuery('.spa-widget-owl-blog-1').length){
        owl_088 = jQuery('.spa-widget-owl-blog-1 .widget-content .owl-carousel');
        owl_088.owlCarousel({
            items: 5,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [767, 2],
            itemsMobile: [639, 1],
            navigation: true,
            lazyLoad : true,
            loop: true,
            pagination: false,
            addClassActive: true,
            afterInit: function(el) {
                el.find(".owl-item").eq(0).addClass("spa-owl-effect");
                el.find(".owl-item.active").last().addClass('spa-owl-effect-last');
            },
            afterAction: changeAction,
        });
        function changeAction(el){
            el.find('.owl-item').removeClass('spa-owl-effect');
            el.find('.owl-item').removeClass('spa-owl-effect-last');
            el.find(".owl-item.active").eq(0).addClass("spa-owl-effect");
            el.find(".owl-item.active").last().addClass("spa-owl-effect");
        }
    }
    if(jQuery('.spa-widget-owl-blog-2').length){
        owl_0888 = jQuery('.spa-widget-owl-blog-2 .widget-content .owl-carousel');
        owl_0888.owlCarousel({
            items: 5,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [767, 2],
            itemsMobile: [639, 1],
            navigation: true,
            lazyLoad : true,
            loop: true,
            pagination: false,
            addClassActive: true,
            afterInit: function(el) {
                el.find(".owl-item").eq(0).addClass("spa-owl-effect");
                el.find(".owl-item.active").last().addClass('spa-owl-effect-last');
            },
            afterAction: changeAction,
        });
        function changeAction(el){
            el.find('.owl-item').removeClass('spa-owl-effect');
            el.find('.owl-item').removeClass('spa-owl-effect-last');
            el.find(".owl-item.active").eq(0).addClass("spa-owl-effect");
            el.find(".owl-item.active").last().addClass("spa-owl-effect");
        }
    }
    if(jQuery('.mdc-entry-post').length){
        owl_09 = jQuery('.mdc-entry-post .owl-carousel');
        owl_09.owlCarousel({
            items: 2,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [767, 2],
            itemsMobile: [639, 2],
            navigation: false,
            pagination: true,
            loop: true,
        });
        jQuery('.mdc-entry-post .owl-dots .owl-dot').each(function(index, el) {
            jQuery(this).children('span').text(index + 1);
        });
    }
    //acordion
    if(jQuery('.panel-group').length){
        var panel_titles = jQuery('.panel-group .panel-title a');
        panel_titles.addClass("collapsed");
        jQuery('.panel-heading.active').find(panel_titles).removeClass("collapsed");
        panel_titles.on('click',function(){
            jQuery(this).closest('.panel-group').find('.panel-heading').removeClass('active');
            var pn_heading = jQuery(this).parents('.panel-heading');
            if (jQuery(this).hasClass('collapsed')) {
                pn_heading.addClass('active');
            } else {
                pn_heading.removeClass('active');
            }
        });
    }    
    //masonry
    if(jQuery('.spa-widget-masonry-home-1').length){
        jQuery('.spa-widget-masonry-home-1').imagesLoaded( function() {
            var masonry = jQuery('.spa-widget-masonry-home-1 .widget-content .spa-masonry').masonry({        
                itemSelector: 'li',
                columnWidth: 1,
            });
        });
    }
    if(jQuery('.spa-widget-blog-post-home-1').length){
        jQuery('.spa-widget-blog-post-home-1').imagesLoaded( function() {
            var masonry = jQuery('.spa-widget-blog-post-home-1 .widget-content .spa-masonry').masonry({        
                itemSelector: 'li',
                columnWidth: 1,
            });
        });
    }
    if(jQuery('.spa-widget-blog-post-home-2').length){
        jQuery('.spa-widget-blog-post-home-2').imagesLoaded( function() {
            var masonry = jQuery('.spa-widget-blog-post-home-2 .widget-content .spa-masonry').masonry({        
                itemSelector: 'li',
                columnWidth: 1,
            });
        });
    }
    //masonry filter
    if(jQuery('.spa-widget-product-show-home-1').length){
        container_01 = jQuery('.spa-widget-product-show-home-1 .widget-content .spa-masonry');
        var masonryOptions = {
            columnWidth: 1,
            itemSelector : '.spa-item',
        };
        container_01.imagesLoaded(function(){
            var m_grid = container_01.masonry( masonryOptions);
            var m_filters_01 = jQuery('.spa-widget-product-show-home-1 .filters-options li');
            m_filters_01.on('click',function(event){
                event.preventDefault();
                m_filters_01.removeClass('active');
                jQuery(this).addClass('active');
                var m_filter_val = jQuery(this).data('val');
                container_01.find('.spa-item').each(function(){                 
                    var m_item_val = jQuery(this).data('val').toString().split(',');                    
                    var a = m_item_val.indexOf(m_filter_val.toString()) > -1;
                    if (m_filter_val == "*") {
                        jQuery(this).removeClass('hide');
                        jQuery(this).addClass('show');
                    } else {
                        if ( a == true) {
                            jQuery(this).removeClass('hide');
                            jQuery(this).addClass('show');  
                        } else {
                            jQuery(this).removeClass('show');
                            jQuery(this).addClass('hide');
                        }
                    }                               
                });

                container_01.masonry('layout');
            });
        });
    }
    if(jQuery('.spa-widget-portfolio').length){
        container_02 = jQuery('.spa-widget-portfolio .widget-content .spa-masonry');
        var masonryOptions = {
            columnWidth: 1,
            itemSelector : '.spa-item',
        };
        container_02.imagesLoaded(function(){
            var m_grid = container_02.masonry( masonryOptions);
            var m_filters_01 = jQuery('.spa-widget-portfolio .filters-options li');
            m_filters_01.on('click',function(event){
                event.preventDefault();
                m_filters_01.removeClass('active');
                jQuery(this).addClass('active');
                var m_filter_val = jQuery(this).data('val');
                container_02.find('.spa-item').each(function(){                 
                    var m_item_val = jQuery(this).data('val').toString().split(',');                    
                    var a = m_item_val.indexOf(m_filter_val.toString()) > -1;
                    if (m_filter_val == "*") {
                        jQuery(this).removeClass('hide');
                        jQuery(this).addClass('show');
                    } else {
                        if ( a == true) {
                            jQuery(this).removeClass('hide');
                            jQuery(this).addClass('show');  
                        } else {
                            jQuery(this).removeClass('show');
                            jQuery(this).addClass('hide');
                        }
                    }                               
                });

                container_02.masonry('layout');
            });
        });
    }
    //supper click
    if(jQuery('.spa-menu-filter').length){
        jQuery('.spa-menu-filter').superclick({          
            animation:   {opacity:'show',height:'show'},  
            speed:       'normal', 
            speedOut:      'normal', 
            autoArrows:  false , 
        });
    }
    //grid list
    if(jQuery('.spa-view-gridlist').length){
        jQuery('.spa-view-gridlist .grid').on('click',function(event) {
            var boleanclick = jQuery(this).hasClass('active');
            if(boleanclick){
            }else{
                jQuery(this).addClass('active');
                jQuery('.spa-view-gridlist .list').removeClass('active');
                if(jQuery('.spa-widget-product-show-home-1').length){
                    jQuery('.spa-widget-product-show-home-1 .spa-masonry .spa-item').each(function(index, el) {
                        jQuery(this).addClass('spa-grid');
                        jQuery(this).removeClass('spa-list')
                    });
                    container_01.masonry('layout');
                }
                if(jQuery('.spa-widget-search-blog').length){
                    jQuery('.spa-widget-search-blog .row .item').each(function(index, el) {
                        jQuery(this).addClass('spa-grid');
                        jQuery(this).removeClass('spa-list')
                    });
                }
                if(jQuery('.woocommerce-main-content').length){
                    jQuery('.woocommerce-main-content .products .spa-item').each(function(index, el) {
                        jQuery(this).addClass('spa-grid');
                        jQuery(this).removeClass('spa-list')
                    });
                }
            }
        });
        jQuery('.spa-view-gridlist .list').on('click',function(event) {
            var boleanclick = jQuery(this).hasClass('active');
            if(boleanclick){

            }else{
                jQuery(this).addClass('active');
                jQuery('.spa-view-gridlist .grid').removeClass('active');
                if(jQuery('.spa-widget-product-show-home-1').length){
                    jQuery('.spa-widget-product-show-home-1 .spa-masonry .spa-item').each(function(index, el) {
                        jQuery(this).addClass('spa-list');
                        jQuery(this).removeClass('spa-grid');
                    });
                    container_01.masonry('layout');
                }
                if(jQuery('.spa-widget-search-blog').length){
                    jQuery('.spa-widget-search-blog .row .item').each(function(index, el) {
                        jQuery(this).addClass('spa-list');
                        jQuery(this).removeClass('spa-grid');
                    });
                }
                if(jQuery('.woocommerce-main-content').length){
                    jQuery('.woocommerce-main-content .products .spa-item').each(function(index, el) {
                        jQuery(this).addClass('spa-list');
                        jQuery(this).removeClass('spa-grid');
                    });
                }
            }
        });
    }
    //chart circle
    if(jQuery('.chart-circle').length){
        //jQuery('body').on('appear', '.chart-circle', function(e, $affected) {
            jQuery('.chart-circle').each(function() {
                var color = jQuery(this).data('color'),
                    width = jQuery(this).data('width'),
                    size  = jQuery(this).data('size'),
                    time  = jQuery(this).data('time');
                var element = document.querySelector('.chart-circle >span');     
                jQuery(this).easyPieChart({
                    barColor: color,
                    trackColor: '#f2f2f2',
                    scaleColor: '#fff',
                    lineWidth: width,
                    size: size,
                    animate: time,
                    lineCap: 'square',
                });
            });
        //});
    }
    //map
    if (jQuery('.kopa-map').length > 0) {
        var id_map = jQuery('.kopa-map').attr('id');
        var lat = parseFloat(jQuery('.kopa-map').attr('data-latitude'));
        var lng = parseFloat(jQuery('.kopa-map').attr('data-longitude'));
        var place = jQuery('.kopa-map').attr('data-place');
        var map = new GMaps({
            el: '#'+id_map,
            lat: lat,
            lng: lng,
            zoomControl : true,
            zoomControlOpt: {
              style : 'SMALL',
              position: 'TOP_LEFT'
            },
            panControl : false,
            streetViewControl : false,
            mapTypeControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
        });
        map.addMarker({
            lat: lat,
            lng: lng,
            title: place
        });
    }
    //woccomer js fixed
    if(jQuery('.woocommerce .showcoupon').length){
        jQuery('.woocommerce .showcoupon').on("click",function(){
            jQuery('.woocommerce .checkout_coupon').toggle(200);
        });
    }
    jQuery('.woocommerce .spa-widget-cart-wooo .shop_table td.actions, .page-woocommerce .spa-widget-cart-wooo .shop_table td.actions').attr({
        colspan: '6',
    });


    /*_____________ Slide Area _____________*/  

    //scroll-bar
    var h_window   = jQuery(window).height(),
        pc_area    = jQuery('.product-compare-box'),
        pc_ctrl   = pc_area.find('.control-btn');

    if(pc_area.length) {
        pc_area.find('.compare-container').height(h_window).mCustomScrollbar();
    }

    if(pc_ctrl.length) {
        pc_ctrl.on('click',function(event) {
            pc_area.toggleClass('active');
        });
    }

    //remove
    var rm_item_1 = jQuery('.compare-list').find('.entry-item');
    if(rm_item_1.length) {
        jQuery(rm_item_1).each(function() {
            var rm_btn_1 = jQuery(this).find('.close-btn');
            rm_btn_1.on('click', function(event){
                event.preventDefault();
                jQuery(this).closest(rm_item_1).parent().remove();
            });
        });
    }


});
function syncPosition(el) {
    var current = this.currentItem;
    sync2.find(".owl-item").removeClass("synced").eq(current).addClass("synced");
    if (sync2.data("owlCarousel") !== undefined) {
        center(current);
    }
}
function center(number) {
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for (var i in sync2visible) {
        if (num === sync2visible[i]) {
            var found = true;
        }
    }

    if (found === false) {
        if (num > sync2visible[sync2visible.length - 1]) {
            sync2.trigger("owl.goTo", num - sync2visible.length + 2)
        } else {
            if (num - 1 === -1) {
                num = 0;
            }
            sync2.trigger("owl.goTo", num);
        }
    } else if (num === sync2visible[sync2visible.length - 1]) {
        sync2.trigger("owl.goTo", sync2visible[1])
    } else if (num === sync2visible[0]) {
        sync2.trigger("owl.goTo", num - 1)
    }

}
