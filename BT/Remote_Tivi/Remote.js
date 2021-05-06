class Remote{
    constructor(codeRemote) {
        this.codeRemote=codeRemote;
    }
    channelControl(tivi){
        this.tivi.channelControl();
    }
    volueControl(tivi){
        this.tivi.VolueControl();
    }
}