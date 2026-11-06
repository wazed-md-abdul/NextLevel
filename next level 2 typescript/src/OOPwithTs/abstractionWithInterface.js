class MusicPlayer {
    play() {
        console.log("Playing music");
    }
    pause() {
        console.log("Pausing music");
    }
    stop() {
        console.log("Stopping music");
    }
}
const player = new MusicPlayer();
player.play();
player.pause();
player.stop();
export {};
