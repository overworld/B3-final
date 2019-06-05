import React from 'react';
import './style.css';
import TweenMax from "gsap/TweenMax";
import {TimelineMax, Power4, Power2, Bounce, Elastic, default as TweenLite} from "gsap";

class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            serie: [
                "lucifer",
                "les simpson",
                "south park",
                "game of thrones",
                "the walking dead",

            ]
        }
    }


    lucifer() {
        TweenMax.to(this.refs.show, 1, {
            backgroundColor: "#ff2300",
            scaleX: 1.8,
            scaleY: 1.8,
            glowFilter: {backgroundColor: "#ff2300", alpha: 1, blurX: 50, blurY: 50},
            repeat: -1,
            yoyo: true
        });
    }

    southPark() {
        let tl = new TimelineMax({repeat: -1});

        tl.to(this.refs.show, 0.1, {y: 0})
            .to(this.refs.show, 1.5, {y: +20, ease: Power2.easeOut}, this.refs.show)
            .to(this.refs.show, 1, {y: 0, ease: Bounce.easeOut, delay: 1.5}, this.refs.show)

    }

    got() {
        TweenMax.to(this.refs.show, 2, {backgroundColor: "#91ff38", width: "50%", top: "100px"});

    }

    twd() {

        let tl = new TimelineMax({repeat: -1, repeatDelay: 2});

        tl.to(this.refs.show, 0.1, {skewX: 70, ease: Power4.easeInOut})
            .to(this.refs.show, 0.04, {skewX: 0, ease: Power4.easeInOut})
            .to(this.refs.show, 0.04, {opacity: 0})
            .to(this.refs.show, 0.04, {opacity: 1})
            .to(this.refs.show, 0.04, {x: -20})
            .to(this.refs.show, 0.04, {x: 0})

            .to(this.refs.show, 0.08, {className: '+=redShadow'}, 'split')

            .to('.txt', 0, {scale: 1.1}, 'split')
            .to('.txt', 0, {scale: 1}, "+=0.02")

            .to(this.refs.show, 0.08, {backgroundColor: '#ff002e'}, "+=0.09")
            .to(this.refs.show, 0.03, {backgroundColor: '#00ff5b'}, 'split')
            .to(this.refs.show, 0.03, {backgroundColor: '#00f2ff'}, "+=0.01")
            .to(this.refs.show, 0.03, {backgroundColor: '#000000'}, "+=0.01")


            .to(this.refs.show, 0.02, {scaleY: 1.1, ease: Power4.easeInOut})
            .to(this.refs.show, 0.04, {scaleY: 1, ease: Power4.easeInOut})

    }

    simpson() {
        TweenMax.to(this.refs.show, 4, {backgroundColor: "#ffee21", rotation: 360, scale: 1.5});

    }

    resetStyle() {
        TweenMax.killAll();
        TweenMax.to(this.refs.show, 1, {backgroundColor: "#000000", scale: 1});
    }

    activate() {
        TweenMax.set(this.refs.text,{y:-500});
        TweenMax.to(this.refs.show, 2, {y: 30});

        let tl = new TimelineMax({delay: 2});
        tl.to(this.refs.text, 0, {display: "block"});
        tl.to(this.refs.text, 2, {ease: Elastic.easeOut.config(1, 0.3), y: 0});
    }

    affichage(e) {

        let mot = e.toLowerCase();
        for (let i = 0; i < this.state.serie.length; i++) {

            console.log(mot);
            if (mot === this.state.serie[i]) {
                switch (mot) {
                    default :
                        return;
                    case 'lucifer':
                        return this.lucifer();
                    case 'les simpson':
                        return this.simpson();
                    case 'game of thrones':
                        return this.got();
                    case 'the walking dead' :
                        return this.twd();
                    case 'south park':
                        return this.southPark();
                }
            } else {
                this.resetStyle()
            }
        }

    }


    render() {


        return (
            <div className="affiche">
                <input ref="text" className="txt" type="text" onChange={(e) => {
                    this.affichage(e.currentTarget.value)
                }}/>

                <button ref="show" onClick={() => this.activate()}>Let's go</button>

            </div>
        );

    }
}

export default Input;
