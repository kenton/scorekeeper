import React from 'react';
import {TitleBar} from './TitleBar';
import {AddPlayer} from './AddPlayer';
import {PlayerList} from './PlayerList';
import PropTypes from 'prop-types';

export class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title={this.props.title} subtitle={this.props.subtitle} />
                <div className="wrapper">
                    <PlayerList players={this.props.players} />
                    <AddPlayer />
                </div>

            </div>
        );
    }
}

App.proTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    players: PropTypes.array.isRequired
}