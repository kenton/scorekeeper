import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker'
import {Players, calculatePlayerPositions} from './../imports/api/players';
import {App} from './../imports/ui/App';

Meteor.startup( () => {
  Tracker.autorun( () => {
    let title = "Score Keeper";
    let subtitle = "Built By Kenton Newby";
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    let rankedPlayers = calculatePlayerPositions(players);
    ReactDOM.render(<App title={title} subtitle={subtitle} players={rankedPlayers}/>, document.getElementById('app'));
  });

});