import React, { useEffect } from 'react';


function OverlayImageBanner(props){

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        // var delta = 200 - Math.random() * 100;
        var delta = 100 - Math.random() * 50;


        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    useEffect(() => {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    }, [props.txt]);

    return (
        <div className="oib">
            <div className="oib__text">
                <h2 className="typewrite" data-period="2000" data-type={`["${props.txt}"]`}>{props.txt}</h2>
                {/* <span class="wrap"></span> */}
            </div>
            <div className="oib__overlay">

            </div>
            <div className="bimg">
                <img className="IMG1" src={props.img1} alt="" />
                <img className="IMG2" src={props.img2} alt="" />
            </div>
            
        </div>
    );

};
export default OverlayImageBanner;