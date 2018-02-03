import React, {Component} from "react";
import Header from "./../Header";
import Footer from "./../Footer";

import cards from "./../../cards.json"

class Game extends Component {
    state = {
        chihuahuas : cards,
        randomChihuahuaId: Math.floor(Math.random() * cards.length) + 1  
    }

    pickedChihuahua = (chihuahua) => {
        console.log(this.state.randomChihuahuaId);
        if(this.state.randomChihuahuaId === chihuahua.id) {
            alert(`Hooray! You and ${chihuahua.name} picked each other!`);
        } else { 
            alert(`I guess it wasn't meant to be! You picked ${chihuahua.name}`);
        }
        
    }

    render() {
        return (
            <div className="container">
                <Header />
                    {this.state.chihuahuas.map(chihuahua => 
                        <button onClick={() => this.pickedChihuahua(chihuahua)} key={chihuahua.id}>
                            <img src={chihuahua.image} alt={chihuahua.name}/>
                        </button>
                    )}
                <Footer />
            </div>
        )
    }
}

export default Game;