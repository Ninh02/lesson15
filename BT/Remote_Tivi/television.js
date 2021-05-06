class Television{
    constructor(currentChannel,currentVolue,) {
        this.currentChannel=currentChannel;
        this.currentVolue=currentVolue;
        this.OnOff=false;
    }
    ChannelControl(){
        return this.currentChannel;
    }
    VolueControl(){
        return this.currentVolue;
    }
}