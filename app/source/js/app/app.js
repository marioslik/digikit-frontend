$(function() {
    console.log('app started');

    /* Nav - animated scroll on click */

    var wrapper = $("#wrapper"),
        headerHeight = $('header').height(),
        $menu = $("#nav-menu, #nav-header, #logo-section, footer"),
        $window = $(window),
        sections = $('section'),
        nav = $('nav');

        /* Hero section animation on load */

        if($window.scrollTop() === 0){
          var introTl = new TimelineMax();

          introTl.from('#hero img', 1.25, {ease:Power1.easeInOut, x:400, alpha:0})
                 .from('#hero h1', 1.25, {ease:Power1.easeInOut, x:-600, alpha:0}, "-=1.25")
                 .from('#hero h3', 1.25, {ease:Power1.easeInOut, x:700, alpha:0}, "-=1.25")
                 .from('#hero .line', 1.25, {ease:Power1.easeInOut, scaleX:0, x:-200, alpha:0}, "-=1.25")
                 .from('#agent-profile .agent-photo', 1.25, {ease:Power1.easeInOut, x:-200, alpha:0}, "-=1")
                 .from('#agent-profile .line', 1.25, {ease:Power1.easeInOut, scaleX:0, x:300, alpha:0}, "-=1.25")
                 .from('#agent-profile .agent-info', 1.25, {ease:Power1.easeInOut, x:200, alpha:0}, "-=1.25")


          ;
        }

        var $panels = $('#compare-property').find('.panel');
        var $sliders = [];

        $('.mobile-slider').each(function (i) {
            $sliders[i] = $(this).bxSlider(bxConfig);
        });



        $(window).on('scroll', function() {
            var cur_pos = $(this).scrollTop();

            sections.each(function() {
                var top = $(this).offset().top - headerHeight,
                    bottom = top + $(this).height();

                if (cur_pos >= top && cur_pos <= bottom) {
                    $menu.find('a').removeClass('active');
                    sections.removeClass('active');

                    $(this).addClass('active');
                    $menu.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                }
            });
        });

        function closeNav() {
          TweenMax.to('#main-nav', 0.75, {
              ease: Power3.easeInOut,
              className: "+=inactive",
              delay:0.5
          });
        }

        function closeNavOnMouseOut() {
          var mainNav = $('#main-nav');
          if(mainNav.is(":hover")) {
            TweenMax.set(mainNav, {className: "active"});
          } else {
            closeNav();
          }
        }

        $menu.on("click", "a", function() {
            var $this = $(this),
                theOthers = $('#nav-menu a').not($this),
                href = $this.attr("href"),
                topY = $(href).offset().top - headerHeight,
                menuTl = new TimelineMax();

            menuTl.to($window, 1.25, {
                scrollTo: {
                    y: topY,
                    autoKill: true
                },
                ease: Power2.easeInOut
            })
            .set(theOthers, {className:"-=active"}, "+=0.25")
            .set($this, {className:"+=active"}, "+=0.0")

            .call(closeNavOnMouseOut, [], this, "-=0.2")
            ;

            return false;
        });




        TweenMax.set('#main-nav', {
            className: "+=inactive"
        });

        TweenMax.set('#compare-property-nav ul li:first-child a', {
            className: "+=current"
        });
        TweenMax.set('#raine-and-horne-sales', {
            display: "block",
            autoAlpha: 1
        });

        TweenMax.set('#suburb-profile-nav ul li:first-child a', {
            className: "+=current"
        });
        TweenMax.set('#profile-chart-houses', {
            display: "block",
            autoAlpha: 1
        });

        TweenMax.set('#profile-chart-units', {
            autoAlpha: 0,
            display: 'block'
        });
        TweenMax.to('#profile-chart-units', 0.1, {
            autoAlpha: 0,
            display: 'none'
        });


        TweenMax.set('#the-process-nav ul li:first-child a', {
            className: "+=current"
        });
        TweenMax.set('#the-process-panel', {
            display: "block",
            autoAlpha: 1
        });



    /* Nav Toggle */
    $('#nav-toggle').click(function(e) {
        TweenMax.to('#main-nav', 0.75, {
            ease: Power3.easeInOut,
            className: "-=inactive"
        });
    });

    $('#close-nav').click(function(e) {
        TweenMax.to('#main-nav', 0.75, {
            ease: Power3.easeInOut,
            className: "+=inactive"
        });
    });


    /* Videos Grid */

    //control video height

    function videoHeight(){
      $('#videos .flexcontainer').height($('.video-container iframe').height() + 0);
    }

    videoHeight();

    $(window).resize(function(){
      videoHeight();
    });

    //load videos
    $('.video-thumb').on('click', function(ev) {
      var iframeUrl = $(this).attr('iframe-data');


      $("#video")[0].src = iframeUrl;
      $("#video")[0].src += "&autoplay=1";
      ev.preventDefault();
    });




    /* Scrollmagic - body content transitions on scroll */

    var scrollController = new ScrollMagic.Controller(),
        videosTween, teamTween, resourcesTween, yourMarketTween, compareTween, suburbProfileTween, processTween, feedbackTween,
        scene, scene2, scene3, scene4, scene5, scene6, scene7, scene8, scene9;


    /* Videos section scrollmagic */

    videosTween = new TimelineMax();
    videosTween.from('.single.column.box', 1, { ease:Power1.easeInOut, x:-100, alpha:0 })
               .from('.one-row.top.box', 0.9, { ease:Power1.easeInOut, x:100, alpha:0 }, "-=0.75")
               .from('.one-row.bottom.box', 0.9, { ease:Power1.easeInOut, x:100, alpha:0 }, "-=0.75")
    ;

    scene = new ScrollMagic.Scene({
      triggerElement: '#videos',
      offset: 50,
      reverse:false
    })
    .setTween(videosTween)
    .addTo(scrollController);
    //scene.addIndicators();


    /* Your team section ScrollMagic */

    teamTween = new TimelineMax();
    videosTween.from('.team-panel', 1, { ease:Power1.easeInOut, x:-100, alpha:0 })
               .from('.team-photo', 1, { ease:Power1.easeInOut, x:100, alpha:0 }, "-=1")
    ;

    scene2 = new ScrollMagic.Scene({
      triggerElement: '#your-team',
      offset: 50,
      reverse:false
    })
    .setTween(teamTween)
    .addTo(scrollController);
    //scene2.addIndicators();


    /* Resources section ScrollMagic */

    resourcesTween = new TimelineMax();
    resourcesTween.from('#resources h2', 1, { ease:Power1.easeInOut, x:-100, alpha:0 })
               .staggerFrom('#resources .icon-card', 1, { ease:Power1.easeInOut, y:75, alpha:0 }, 0.15, "-=1")
               .from('#resources .card-container', 1, { ease:Power1.easeInOut, boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)" }, "-=1")
    ;

    scene3 = new ScrollMagic.Scene({
      triggerElement: '#resources',
      offset: 50,
      reverse:false
    })
    .setTween(resourcesTween)
    .addTo(scrollController);
    //scene3.addIndicators();


    /* Your Market section ScrollMagic */

    yourMarketTween = new TimelineMax();
    yourMarketTween.from('.market-map', 1, { ease:Power1.easeInOut, x:-100, alpha:0 })
               .from('.market-panel', 1, { ease:Power1.easeInOut, x:100, alpha:0 }, "-=1")
    ;

    scene4 = new ScrollMagic.Scene({
      triggerElement: '#your-market',
      offset: 50,
      reverse:false
    })
    .setTween(yourMarketTween)
    .addTo(scrollController);
    //scene4.addIndicators();


    /* Compare your property section ScrollMagic */

    compareTween = new TimelineMax();
    compareTween.from('#compare-property h2', 1, { ease:Power1.easeInOut, x:-100, alpha:0 })
                .from('#compare-property-nav', 1, { ease:Power1.easeInOut, x:100, alpha:0 }, "-=1")
               .staggerFrom('#compare-property .panels .panel .card', 1, { ease:Power1.easeInOut, y:75, alpha:0 }, 0.15, "-=1")
    ;

    scene5 = new ScrollMagic.Scene({
      triggerElement: '#compare-property',
      offset: 50,
      reverse:false
    })
    .setTween(compareTween)
    .addTo(scrollController);
    //scene5.addIndicators();


    /* Your suburb profile section ScrollMagic */

    suburbProfileTween = new TimelineMax();
    suburbProfileTween.from('#suburb-profile h3', 1, { ease:Power1.easeInOut, x:-100, alpha:0 })
                .from('#suburb-profile h2', 1, { ease:Power1.easeInOut, x:-100, alpha:0 }, "-=0.9")
                .from('#suburb-profile-nav', 1, { ease:Power1.easeInOut, x:100, alpha:0 }, "-=1")
                .call(drawChart, [], "-=1")
    ;

    scene6 = new ScrollMagic.Scene({
      triggerElement: '#suburb-profile',
      offset: 200,
      reverse:false
    })
    .setTween(suburbProfileTween)
    .addTo(scrollController);
    //scene6.addIndicators();


    /* The process section ScrollMagic */

    processTween = new TimelineMax();
    processTween.from('#the-process h2', 1, { ease:Power1.easeInOut, x:-100, alpha:0 })
                .from('#the-process-nav', 1, { ease:Power1.easeInOut, x:100, alpha:0 }, "-=1")
               .staggerFrom('#the-process .panel .icon-card', 1, { ease:Power1.easeInOut, y:75, alpha:0 }, 0.15, "-=1")
               .from('#the-process .card-container', 1, { ease:Power1.easeInOut, boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)" }, "-=1")
    ;

    scene7 = new ScrollMagic.Scene({
      triggerElement: '#the-process',
      offset: 100,
      reverse:false
    })
    .setTween(processTween)
    .addTo(scrollController);
    //scene7.addIndicators();


    /* Feedback section ScrollMagic */

    feedbackTween = new TimelineMax();
    feedbackTween.from('.form-container', 1, { ease:Power1.easeInOut, x:100, alpha:0 })

    ;

    scene8 = new ScrollMagic.Scene({
      triggerElement: '#questions-feedback',
      offset: 30,
      reverse:false
    })
    .setTween(feedbackTween)
    .addTo(scrollController);
    //scene8.addIndicators();



    /* Compare your property panels */

    $('#compare-property-nav ul li').click(function() {

        var panelId = $(this).attr('data-tab');
        var $current = $("#" + panelId);

        TweenMax.to($('#compare-property-nav ul li a'), 0.4, {
            ease: Power1.easeInOut,
            className: "-=current"
        });
        TweenMax.to($(this).children('a'), 0.4, {
            ease: Power1.easeInOut,
            className: "+=current"
        });
        TweenMax.to($(this).children('a::after'), 0.4, {
            ease: Power1.easeInOut,
            scaleX: 1
        });

        var panelsTl = new TimelineMax();

        panelsTl
            .to('#compare-property .panel', 0.5, {
                ease: Power1.easeInOut,
                autoAlpha: 0
            })
            .set('#compare-property .panel', {
                display: 'none',
                delay: 0.1
            })
            .set($("#" + panelId), {
                display: 'block'
            })
            .to($("#" + panelId), 0.25, {
                ease: Power1.easeInOut,
                autoAlpha: 1
            })

            ;

            $current.toggleClass('active');
              // check if panel is active
              if ($current.hasClass('active')) {
                // get the position of the current panel among his siblings
                var index = $panels.index($current);
                // reload slider at the given position

                //$current.bxSlider(bxConfig);
                $panels[index].reloadSlider();
              }



    });

    /* Suburb Profile Panels and Charts */

    $('#suburb-profile-nav ul li').click(function() {


        var panelId = $(this).attr('data-tab');

        function checkSuburbProfile() {

          if(panelId == "profile-chart-houses") {
            drawChart();
          } else if (panelId == "profile-chart-units") {
            drawChartUnits();
            console.log('units');
          }
        }


        TweenMax.to($('#suburb-profile-nav ul li a'), 0.4, {
            ease: Power1.easeInOut,
            className: "-=current"
        });
        TweenMax.to($(this).children('a'), 0.4, {
            ease: Power1.easeInOut,
            className: "+=current"
        });
        TweenMax.to($(this).children('a::after'), 0.4, {
            ease: Power1.easeInOut,
            scaleX: 1
        });

        var panelsTl = new TimelineMax();

        panelsTl
            .to('#suburb-profile .panel', 0.5, {
                ease: Power1.easeInOut,
                autoAlpha: 0
            })
            .set('#suburb-profile .panel', {
                display: 'none',
                delay: 0.1
            })
            .set($("#" + panelId), {
                display: 'block'
            })
            .to($("#" + panelId), 0.25, {
                ease: Power1.easeInOut,
                autoAlpha: 1
            })
            .call(checkSuburbProfile, [], "-=0")
            ;
    });

    /* Convert chart values to currency */

    function currencyFormat (num) {
        return "$" + parseFloat(num).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }

    var medianPrice;
    var ctx;
    var options;
    var medianPriceData = {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [{
            fillColor: "rgba(0,0,0,0.05)",
            strokeColor: "#45484D",
            pointColor: "#F7F7F7",
            pointHighlightFill: "#FCB718",
            pointHighlightStroke: "#FCB718",
            pointHoverRadius: 20,
            pointStrokeColor: "#45484D",
            data: [650000, 679000, 720000, 765000, 810000, 860000, 979000]
        }]
    };

    ctx = document.getElementById('median-price-chart').getContext('2d');
    Chart.defaults.global.customTooltips = function(tooltip) {
      // Tooltip Element
        var tooltipEl1 = $('.chart-value');
        var tooltipEl2 = $('.chart-meta-period');



        // Hide if no tooltip
        if (!tooltip) {
            tooltipEl1.css({
                opacity: 1
            });
            return;
        }

        if (!tooltip) {
            tooltipEl2.css({
                opacity: 1
            });
            return;
        }

        var splitTooltip = tooltip.text.split(":");



        // Set caret Position
        tooltipEl1.removeClass('above below');
        tooltipEl1.addClass(tooltip.yAlign);

        tooltipEl2.removeClass('above below');
        tooltipEl2.addClass(tooltip.yAlign);
        // Set Text
        //var chartValue = tooltipEl1.html(splitTooltip[1]);

        var chartValue = splitTooltip[1];
        tooltipEl2.html(splitTooltip[0]);

        var chartValueString = chartValue.toString();

        var chartValueCurrency = currencyFormat(chartValueString);

        tooltipEl1.html(chartValueCurrency);


        // Find Y Location on page
        var top;
        if (tooltip.yAlign == 'above') {
            //top = tooltip.y - tooltip.caretHeight - tooltip.caretPadding;
            top = 7;
        } else {
            //top = tooltip.y + tooltip.caretHeight + tooltip.caretPadding;
            top = 7;
        }
        // Display, position, and set styles for font
        tooltipEl1.css({
            opacity: 1,
            left: tooltip.chart.canvas.offsetRight + tooltip.x + 'px',
            //top: tooltip.chart.canvas.offsetTop + top + 'px',
            fontFamily: tooltip.fontFamily,
            //fontSize: 48,
            fontWeight: 200,
            lineHeight: 1.3
        });

        tooltipEl2.css({
            opacity: 1,
            left: tooltip.chart.canvas.offsetRight + tooltip.x + 'px',
            //top: tooltip.chart.canvas.offsetTop + top + 'px',
            fontFamily: tooltip.fontFamily,
            //fontSize: 14,
            fontStyle: tooltip.fontStyle
        });


    };

    // draw line chart

    options = {
        responsive: true,
        maintainAspectRatio: true,
        pointDotRadius: 6,
        bezierCurve: true,
        scaleShowLabels: false,
        scaleOverride : false,
        scaleShowHorizontalLines: false,
        scaleShowVerticalLines: true,
        lineJoin: String,
        scaleLineColor: 'transparent',
        scaleGridLineColor: "#EBE9E9",
        scaleLabel: function(label){return label.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}
    };

    function drawChart(){
      medianPrice = new Chart(ctx).Line(medianPriceData, options);
    }

    // medianPrice = new Chart(ctx).Line(medianPriceData, options);

    var medianPriceUnits;
    var ctx2;
    var options2;

    var medianPriceDataUnits = {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [{
            fillColor: "rgba(0,0,0,0.05)",
            strokeColor: "#45484D",
            pointColor: "#F7F7F7",
            pointHighlightFill: "#FCB718",
            pointHighlightStroke: "#FCB718",
            pointHoverRadius: 20,
            pointStrokeColor: "#45484D",
            data: [550000, 579000, 720000, 765000, 810000, 860000, 874000]
        }]
    };

    ctx2 = document.getElementById('median-price-chart-units').getContext('2d');
    // draw line chart

    options2 = {
      responsive: true,
      maintainAspectRatio: true,
      pointDotRadius: 6,
      bezierCurve: true,
      scaleShowLabels: false,
      scaleOverride : false,
      scaleShowHorizontalLines: false,
      scaleShowVerticalLines: true,
      lineJoin: String,
      scaleLineColor: 'transparent',
      scaleGridLineColor: "#EBE9E9",
      legend: {
          fontSize: 40
      }
    };

    var suburbProfilePanel = $('#suburb-profile-nav ul li').attr('data-tab');

    function drawChartUnits(){
      medianPriceUnits = new Chart(ctx2).Line(medianPriceDataUnits, options2);
    }



    //medianPriceUnits = new Chart(ctx2).Line(medianPriceDataUnits, options2);


    /* The proecss panels */

    $('#the-process-nav ul li').click(function() {
        var panelId = $(this).attr('data-tab');

        TweenMax.to($('#the-process-nav ul li a'), 0.4, {
            ease: Power1.easeInOut,
            className: "-=current"
        });
        TweenMax.to($(this).children('a'), 0.4, {
            ease: Power1.easeInOut,
            className: "+=current"
        });
        TweenMax.to($(this).children('a::after'), 0.4, {
            ease: Power1.easeInOut,
            scaleX: 1
        });

        var panelsTl = new TimelineMax();

        panelsTl
            .to('#the-process .panel', 0.5, {
                ease: Power1.easeInOut,
                autoAlpha: 0
            })
            .set('#the-process .panel', {
                display: 'none',
                delay: 0.1
            })
            .set($("#" + panelId), {
                display: 'block'
            })
            .to($("#" + panelId), 0.25, {
                ease: Power1.easeInOut,
                autoAlpha: 1
            });
    });


    /* Modal windows */

    var modalTl = new TimelineMax();

    TweenMax.set('.modal', {autoAlpha: 0, width:"100%", scale:0.8});

    $('.modal-link').click(function() {
        console.log('modal link');
        var modalId = $(this).attr('modal-id');
        modalTl.to($("#" + modalId), 0.5, { ease: Power1.easeInOut, autoAlpha: 1, scale:1 });
    });

    $('.back-to-main, .modal-logo').click(function() {
        modalTl.to('.modal', 0.5, {ease: Power1.easeInOut, autoAlpha: 0, x:-100})
        .set('.modal', {x:0, scale:0.8});
    });


    /* Slider on mobile sizes */

    var salesSlider = $('#raine-and-horne-sales');
    var marketSalesSlider = $('#market-sales');
    var marketListings = $('#current-listings');

    function addSalesSlider() {
      salesSlider.bxSlider({
        minSlides: 1,
        maxSlides: 2,
        slideMargin: 10
      });
    }

    function addMarketSalesSlider() {
      marketSalesSlider.bxSlider({
        minSlides: 1,
        maxSlides: 2,
        slideMargin: 10
      });
    }

    function addMarketListingsSlider() {
      marketListings.bxSlider({
        minSlides: 1,
        maxSlides: 2,
        slideMargin: 10
      });
    }

    var bxConfig = {
      minSlides: 1,
      maxSlides: 2,
      slideMargin: 10
    };



    var checkSize = function() {

    if (window.matchMedia('(max-width: 39.99999999em)').matches) {
      $('.icon-card .modal-link').html('<img src="img/icons/arrow-head.svg" />');
    } else if (window.matchMedia('(min-width: 40em)').matches) {
      $('.icon-card .modal-link').html('More');
    }


    if (window.matchMedia('(max-width: 768px)').matches) {

      salesSlider.addClass("mobile-slider");
      marketSalesSlider.addClass("mobile-slider");
      marketListings.addClass("mobile-slider");

      $('.mobile-slider.active').bxSlider(bxConfig);


    } else {
      salesSlider.removeClass("mobile-slider");
      marketSalesSlider.removeClass("mobile-slider");
      marketListings.removeClass("mobile-slider");
      }
    };

    // Set the function to resize
    $(window).resize(checkSize);
    // Call the function
    checkSize();





});
