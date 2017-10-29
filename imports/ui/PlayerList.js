import React from 'react';
import {Player} from './Player';

export class PlayerList extends React.Component {
    renderPlayers() {
        if (this.props.players.length === 0) {
            return(<p>Enter your first player to get started...</p>)
        } else {
            return this.props.players.map( (player) => {
                return <Player player={player} key={player._id} />;
            });
        }
    };

    render() {
        return(
            <div>
                {this.renderPlayers()}
            </div>
           
        );
    }
}