import React from 'react';
import background from './assets/background.jpg';
import Speaker from './components/Speaker/Speaker';
import Display from './components/Display/Display';
import Button from './components/Button/Button';
import Player from './components/Player/Player';
import getRadioChannel from './api/api';
import './Radio.css';

class Radio extends React.Component {
  state = {
    status: 0,
    statusText: null,
    activeChannelId: null,
    activeRadioChannel: {}
  }

  onClickHandler = (radioChannelId) => {
    this.setState({
      ...this.state,
      status: 1,
      statusText: 'Bezig met laden...',
      activeChannelId: null,
      activeRadioChannel: {}
    });

    this.fetchRadioChannel(radioChannelId);
  }

  async fetchRadioChannel(radioChannelId) {
    const radioChannel = await getRadioChannel(radioChannelId);

    this.setState({
      ...this.state,
      status: 0,
      statusText: null,
      activeChannelId: radioChannel.id,
      activeRadioChannel: radioChannel
    });
  }

  render() {
    return (
      <div className="Radio">
        <img src={background} alt="Radio" />
        <Speaker position="left" />
        <Speaker position="right" />
        <Display statusText={this.state.statusText} channelName={this.state.activeRadioChannel.name} frequency={this.state.activeRadioChannel.frequency} />
        <Player stream={this.state.activeRadioChannel.stream} />
        <div className="ButtonContainer">
          <Button status={this.state.status} activeChannelId={this.state.activeChannelId} radioChannelId={1} onClickHandler={this.onClickHandler} />
          <Button status={this.state.status} activeChannelId={this.state.activeChannelId} radioChannelId={2} onClickHandler={this.onClickHandler} />
          <Button status={this.state.status} activeChannelId={this.state.activeChannelId} radioChannelId={3} onClickHandler={this.onClickHandler} />
        </div>
      </div >
    );
  }
}

export default Radio;
