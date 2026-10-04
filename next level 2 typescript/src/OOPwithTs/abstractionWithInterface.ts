interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}
class MusicPlayer implements MediaPlayer {
  play(): void {
      console.log("Playing music");
  }
  pause(): void {
      console.log("Pausing music");
  }
  stop(): void {
      console.log("Stopping music");
  }
}
const player = new MusicPlayer();
player.play();
player.pause();
player.stop();
