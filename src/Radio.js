import React from 'react';
import background from './assets/background.jpg';
import Speaker from './components/Speaker/Speaker';
import Display from './components/Display/Display';
import './Radio.css';
import getRadioChannel from './api/api';

class Radio extends React.Component {
  state = {
    activeChannel: 1,
    activeRadioChannel: {}
  }

  componentDidMount() {
    this.fetchRadioChannel();
  }

  async fetchRadioChannel() {
    const radioChannel = await getRadioChannel(this.state.activeChannel);

    this.setState({
      ...this.state,
      activeRadioChannel: radioChannel
    });
  }

  render() {
    return (
      <div className="Radio">
        <img src={background} />
        <Speaker position="left" />
        <Speaker position="right" />
        <Display channelName={this.state.activeRadioChannel.name} frequency="100.7FM" />
      </div>
    );
  }
}

export default Radio;
