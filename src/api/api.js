const radioChannels = {
  1: {
    id: 1,
    name: "Radio 538",
    frequency: "106.3FM",
    stream: "http://playerservices.streamtheworld.com/api/livestream-redirect/RADIO538.mp3"
  },
  2: {
    id: 2,
    name: "Radio 10",
    frequency: "100.2FM",
    stream: "http://playerservices.streamtheworld.com/api/livestream-redirect/RADIO10.mp3"

  },
  3: {
    id: 3,
    name: "100% NL",
    frequency: "101.5FM",
    stream: "http://stream.100p.nl/100pctnl.mp3.m3u"
  }
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function getRadioChannel(id) {
  await delay(2000);

  try {
    const radioChannel = radioChannels[id];
    return radioChannel;
  } catch (error) {
    return error;
  }
}

export default getRadioChannel;
