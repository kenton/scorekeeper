import React from 'react';
import {Players} from './../api/players';

export class AddPlayer extends React.Component {
    handleSubmit(e) {
        let playerName = e.target.playerName.value;
        e.preventDefault();

        if (playerName) {
            e.target.playerName.value = '';
            Players.insert({
                name: playerName, 
                score: 0
            });
        }
    }

    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
            <input type="text" name="playerName" placeholder="Player name"/>
            <button>Add Player</button>
            </form>
        );
    }
}