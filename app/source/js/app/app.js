$(function() {
    console.log('app started');

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

    TweenMax.set('#profile-chart-units', {autoAlpha:0, display:'block'});
    TweenMax.to('#profile-chart-units', 0.1, {autoAlpha:0, display:'none'});


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
            })
            ;
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
