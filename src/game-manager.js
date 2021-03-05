const GameManager = {
  level: 4,
  soundOn: true,
  setLevel(level) {
    this.level = level;
  },
  setSoundOn(flag) {
    this.soundOn = flag;
  },
};

export default GameManager;
