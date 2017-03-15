/*jshint esversion: 6 */
import React, {
    Component
} from 'react';

class Score extends Component {
    constructor(props) {
        super(props);
        this.database = props.database;
        this.state = {
            currentScore: null,
            type: 'none',
            max: 0
        };
        this.goodSound = document.getElementById("good-sound");
        this.wrongSound = document.getElementById("wrong-sound");
    }
    animate(type) {
        console.log(this.goodSound);
        console.log(this.goodSound.play);

        if (type !== 'none') {
            if (type === "bad") {
                this.wrongSound.play();
            }
            else {
                this.goodSound.play();
            }
        }


        this.setState({
            type: type
        });
        setTimeout(() => {
            this.setState({
                type: 'none'
            });
        }, 1000);
    }



    render() {
        var basuraClass = "basura_img" + (this.state.type === 'basura' ? ' vibrate' : '');
        var abonoClass = "abono_img" + (this.state.type === 'abono' ? ' vibrate' : '');
        var reciclajeClass = "reciclaje_img" + (this.state.type === 'reciclaje' ? ' vibrate' : '');
        return ( <
            div >
            <
            div className = "score_height" >
            <
            div className = "score_font" > Puntaje: {
                this.state.currentScore
            } < /div> <
            /div> <
            div className = "max_score_height" >
            <
            div className = "max_score_font" > Máximo puntaje hoy: {
                this.state.max
            } < /div> <
            /div> <
            div className = "flexbox-class default-margin" >
            <
            div className = {
                basuraClass
            } > < /div> <
            div className = {
                abonoClass
            } > < /div> <
            div className = {
                reciclajeClass
            } > < /div> <
            /div> <
            /div>
        );
    }

    componentWillMount() {
        this.database.ref('currentScoreV2').on('value', (snapshot) => {
            let data = snapshot.val();
            this.setState({
                currentScore: data.value,
                max: data.max
            });
            this.animate(data.type);
        });
    }
}

export default Score;
