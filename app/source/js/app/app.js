$(function() {
    console.log('app started');


    /* Nav - animated scroll on click */

    var wrapper = $("#wrapper"),
        headerHeight = $('header').height(),
        $menu = $("#nav-menu, #nav-header, #logo-section"),
        $window = $(window),
        sections = $('section'),
        nav = $('nav');

        /* Hero section animation on load */

        if($window.scrollTop() === 0){
          TweenMax.from('#hero img', 1.25, {ease:Power1.easeInOut, x:400, alpha:0});
          TweenMax.from('#hero h1', 1.25, {ease:Power1.easeInOut, x:-600, alpha:0});
          TweenMax.from('#hero h3', 1.25, {ease:Power1.easeInOut, x:700, alpha:0});
          TweenMax.from('#hero .line', 1.25, {ease:Power1.easeInOut, scaleX:0, x:-200, alpha:0});
        }



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

        $menu.on("click", "a", function() {
            var $this = $(this),
                href = $this.attr("href"),
                topY = $(href).offset().top - headerHeight;

            TweenMax.to($window, 1.25, {
                scrollTo: {
                    y: topY,
                    autoKill: true
                },
                ease: Power2.easeInOut
            });
            $('#nav-menu a').removeClass('active');
            $this.addClass('active');
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


    /* Scrollmagic - body content transitions on scroll */

    var scrollController = new ScrollMagic.Controller(),
        blockTween,
        scene, scene2, scene3, scene4, scene5, scene6, scene7, scene8, scene9;

    /* Hero section scrollmagic */

    // blockTween = new TweenMax.to('#hero img', 1.25, {
    //   ease:Power1.easeInOut,
    //    css: {
    //      transform: 'translateX(400px)',
    //      alpha:0
    //    }
    // });
    //
    //  scene = new ScrollMagic.Scene({
    //          offset: 1,
    //          duration: 400
    //        }).setTween(blockTween).addTo(scrollController);
    //
    //  scene = new ScrollMagic.Scene({
    //          offset: 0,
    //          duration: 400
    //        }).setTween(blockTween).addTo(scrollController);
    //
    //
    //  blockTween = new TweenMax.to('#hero h1', 1.25, {
    //    ease:Power1.easeInOut,
    //     css: {
    //       transform: 'translateX(-500px)',
    //       alpha:0
    //     }
    //  });
    //
    //  scene = new ScrollMagic.Scene({
    //          offset: 1,
    //          duration: 400
    //        }).setTween(blockTween).addTo(scrollController);
    //
    //  scene = new ScrollMagic.Scene({
    //          offset: 0,
    //          duration: 400
    //        }).setTween(blockTween).addTo(scrollController);
    //
    //  blockTween = new TweenMax.to('#hero h3', 1.25, {
    //    ease:Power1.easeInOut,
    //     css: {
    //       transform: 'translateX(700px)',
    //       alpha:0
    //     }
    //  });
    //
    //  scene = new ScrollMagic.Scene({
    //          offset: 1,
    //          duration: 400
    //        }).setTween(blockTween).addTo(scrollController);
    //
    //  scene = new ScrollMagic.Scene({
    //          offset: 0,
    //          duration: 400
    //        }).setTween(blockTween).addTo(scrollController);
    //
    //
    //  blockTween = new TweenMax.to('#hero .line', 1.25, {
    //    ease:Power1.easeInOut,
    //     css: {
    //       transform: 'translateX(-200px)',
    //       scaleX:0,
    //       alpha:0
    //     }
    //  });
    //
    //  scene = new ScrollMagic.Scene({
    //          offset: 1,
    //          duration: 400
    //        }).setTween(blockTween).addTo(scrollController);
    //
    //  scene = new ScrollMagic.Scene({
    //          offset: 0,
    //          duration: 400
    //        }).setTween(blockTween).addTo(scrollController);


    /* Agent section scrollmagic */

    blockTween = new TweenMax.from('.agent-photo', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(-200px) translateY(-100px)',
         scaleX:1.2,
         alpha:0
       }
    });

    scene2 = new ScrollMagic.Scene({
      offset: $('#agent-profile').offset().top - 1000,
      duration: 400
    }).setTween(blockTween).addTo(scrollController);


    blockTween = new TweenMax.from('.agent-info', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(200px) translateY(-100px)',
         scaleX:1.2,
         alpha:0
       }
    });

    scene2 = new ScrollMagic.Scene({
            offset: $('#agent-profile').offset().top - 1000,
            duration: 400
          }).setTween(blockTween).addTo(scrollController);

      blockTween = new TweenMax.from('#agent-profile .line', 1.25, {
        ease:Power1.easeInOut,
         css: {
           transform: 'translateX(200px) translateY(-150px) scaleX(0)',
           alpha:0
         }
      });

      scene2 = new ScrollMagic.Scene({
              offset: $('#agent-profile').offset().top - 1000,
              duration: 400
            }).setTween(blockTween).addTo(scrollController);



    /* Videos section scrollmagic */

    blockTween = new TweenMax.from('.single.column.box', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(-200px)',
         alpha:0
       }
    });

    scene3 = new ScrollMagic.Scene({
      offset: $('#agent-profile').offset().top - 50,
      duration: 400
    }).setTween(blockTween).addTo(scrollController);

    blockTween = new TweenMax.from('.one-row.top.box', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(200px)',
         alpha:0
       }
    });

    scene3 = new ScrollMagic.Scene({
      offset: $('#agent-profile').offset().top - 150,
      duration: 400
    }).setTween(blockTween).addTo(scrollController);

    blockTween = new TweenMax.from('.one-row.bottom.box', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(270px)',
         alpha:0
       }
    });

    scene3 = new ScrollMagic.Scene({
      offset: $('#agent-profile').offset().top - 150,
      duration: 400
    }).setTween(blockTween).addTo(scrollController);


    /* Your team section ScrollMagic */

    blockTween = new TweenMax.from('.team-photo', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(250px) translateY(-50px) scale(1.2)',
         alpha:0
       }
    });

    scene4 = new ScrollMagic.Scene({
      offset: $('#videos').offset().top - 150,
      duration: 400
    }).setTween(blockTween).addTo(scrollController);

    blockTween = new TweenMax.from('.team-panel', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(-250px) translateY(-150px) scale(0.8)',
         alpha:0
       }
    });

    scene4 = new ScrollMagic.Scene({
      offset: $('#videos').offset().top - 150,
      duration: 400
    }).setTween(blockTween).addTo(scrollController);


    /* Resources section ScrollMagic */

    blockTween = new TweenMax.from('#resources h2', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(-200px)',
         alpha:0
       }
    });

    scene5 = new ScrollMagic.Scene({
      offset: $('#resources').offset().top - 750,
      duration: 500
    }).setTween(blockTween).addTo(scrollController);

    blockTween = new TweenMax.staggerFrom('#resources .icon-card', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(200px)',
         alpha:0
       }
    }, 0.15);

    scene5 = new ScrollMagic.Scene({
      offset: $('#resources').offset().top - 750,
      duration: 500
    }).setTween(blockTween).addTo(scrollController);


    /* Your Market section ScrollMagic */

    blockTween = new TweenMax.from('.market-map', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(-250px) translateY(-25px) scale(1.2)',
         alpha:0
       }
    });

    scene6 = new ScrollMagic.Scene({
      offset: $('#your-market').offset().top - 550,
      duration: 400
    }).setTween(blockTween).addTo(scrollController);

    blockTween = new TweenMax.from('.market-panel', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(250px) translateY(-250px) scale(0.8)',
         alpha:0
       }
    });

    scene7 = new ScrollMagic.Scene({
      offset: $('#your-market').offset().top - 550,
      duration: 400
    }).setTween(blockTween).addTo(scrollController);

    /* Compare your property section ScrollMagic */

    blockTween = new TweenMax.from('#compare-property h2', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(-250px)',
         alpha:0
       }
    });

    scene7 = new ScrollMagic.Scene({
      offset: $('#compare-property').offset().top - 750,
      duration: 400
    }).setTween(blockTween).addTo(scrollController);

    blockTween = new TweenMax.from('#compare-property-nav', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(250px)',
         alpha:0
       }
    });

    scene7 = new ScrollMagic.Scene({
      offset: $('#compare-property').offset().top - 750,
      duration: 400
    }).setTween(blockTween).addTo(scrollController);


    blockTween = new TweenMax.staggerFrom('#compare-property .panels .panel .card', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateY(75px)',
         alpha:0
       },
       delay:0.25
    }, 0.5);

    scene7 = new ScrollMagic.Scene({
      offset: $('#compare-property').offset().top - 750,
      duration: 500
    }).setTween(blockTween).addTo(scrollController);


    /* Your suburb profile section ScrollMagic */

    blockTween = new TweenMax.from('#suburb-profile h3', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(-350px)',
         alpha:0
       }
    });

    scene8 = new ScrollMagic.Scene({
      offset: $('#suburb-profile').offset().top - 750,
      duration: 400
    }).setTween(blockTween).addTo(scrollController);

    blockTween = new TweenMax.from('#suburb-profile h2', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(-250px)',
         alpha:0
       }
    });

    scene8 = new ScrollMagic.Scene({
      offset: $('#suburb-profile').offset().top - 750,
      duration: 400
    }).setTween(blockTween).addTo(scrollController);

    blockTween = new TweenMax.from('#suburb-profile-nav', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(250px)',
         alpha:0
       }
    });

    scene8 = new ScrollMagic.Scene({
      offset: $('#suburb-profile').offset().top - 750,
      duration: 400
    }).setTween(blockTween).addTo(scrollController);

    blockTween = new TweenMax.staggerFrom('#suburb-profile .panels .panel .data-graph', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateY(150px)',
         alpha:0
       }
    }, 0.25);

    scene8 = new ScrollMagic.Scene({
      offset: $('#suburb-profile').offset().top - 750,
      duration: 400
    }).setTween(blockTween).addTo(scrollController);


    /* The process section ScrollMagic */

    blockTween = new TweenMax.from('#the-process h2', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(-200px)',
         alpha:0
       }
    });

    scene9 = new ScrollMagic.Scene({
      offset: $('#suburb-profile').offset().top - 50,
      duration: 500
    }).setTween(blockTween).addTo(scrollController);


    blockTween = new TweenMax.from('#the-process-nav', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(200px)',
         alpha:0
       }
    });

    scene9 = new ScrollMagic.Scene({
      offset: $('#suburb-profile').offset().top - 50,
      duration: 500
    }).setTween(blockTween).addTo(scrollController);


    blockTween = new TweenMax.staggerFrom('#the-process .panel .icon-card', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(200px)',
         alpha:0
       }
    }, 0.15);

    scene9 = new ScrollMagic.Scene({
      offset: $('#suburb-profile').offset().top + 30,
      duration: 500
    }).setTween(blockTween).addTo(scrollController);

    /* Feedback and footer sections ScrollMagic */

    blockTween = new TweenMax.from('.form-container', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateY(100px)',
         alpha:0
       }
    });

    scene9 = new ScrollMagic.Scene({
      offset: $('#the-process').offset().top - 130,
      duration: 500
    }).setTween(blockTween).addTo(scrollController);

    blockTween = new TweenMax.from('.form-container .form-intro', 1.25, {
      ease:Power1.easeInOut,
       css: {
         transform: 'translateX(-100px)',
         alpha:0
       }
    });

    scene9 = new ScrollMagic.Scene({
      offset: $('#the-process').offset().top - 130,
      duration: 500
    }).setTween(blockTween).addTo(scrollController);


    /* Compare your property panels */

    $('#compare-property-nav ul li').click(function() {
        var panelId = $(this).attr('data-tab');

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
            });
    });

    /* Suburb Profile Panels and Charts */

    $('#suburb-profile-nav ul li').click(function() {


        var panelId = $(this).attr('data-tab');


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
            });
    });



    var medianPrice;
    var ctx;
    var options;
    var medianPriceData = {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [{
            fillColor: "rgba(0,0,0,0.05)",
            strokeColor: "#45484D",
            pointColor: "#F7F7F7",
            pointStrokeColor: "#45484D",
            data: [650000, 679000, 720000, 765000, 810000, 860000, 974000]
        }]
    };

    ctx = document.getElementById('median-price-chart').getContext('2d');

    // draw line chart

    options = {
        responsive: true,
        maintainAspectRatio: false,
        pointDotRadius: 7,
        bezierCurve: true,
        scaleShowLabels: false,
        scaleShowHorizontalLines: false,
        scaleShowVerticalLines: true,
        lineJoin: String,
        scaleLineColor: 'transparent',
        scaleGridLineColor: "#EBE9E9",
        legend: {
            fontSize: 40
        }
    };

    medianPrice = new Chart(ctx).Line(medianPriceData, options);




    var medianPriceUnits;
    var ctx2;
    var options2;

    var medianPriceDataUnits = {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [{
            fillColor: "rgba(0,0,0,0.05)",
            strokeColor: "#45484D",
            pointColor: "#F7F7F7",
            pointStrokeColor: "#45484D",
            data: [550000, 579000, 720000, 765000, 810000, 860000, 874000]
        }]
    };

    ctx2 = document.getElementById('median-price-chart-units').getContext('2d');
    // draw line chart

    options2 = {
        responsive: true,
        maintainAspectRatio: false,
        pointDotRadius: 7,
        bezierCurve: true,
        scaleShowLabels: false,
        scaleShowHorizontalLines: false,
        scaleShowVerticalLines: true,
        lineJoin: String,
        scaleLineColor: 'transparent',
        scaleGridLineColor: "#EBE9E9",
        legend: {
            fontSize: 40
        }
    };

    medianPriceUnits = new Chart(ctx2).Line(medianPriceDataUnits, options2);


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







});
