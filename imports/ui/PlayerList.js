import React from 'react';
import {Player} from './Player';
import FlipMove from 'react-flip-move';

export class PlayerList extends React.Component {
    renderPlayers() {
        if (this.props.players.length === 0) {
            return(
                <div className="item">
                    <p className="item__message">Enter your first player to get started...</p>
                </div>
            );
        } else {
            return this.props.players.map( (player) => {
                return(
                    <Player player={player} key={player._id} />
                );
            });
        }
    };

    render() {
        return(
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayers()}
                </FlipMove>
            </div>
           
        );
    }
}