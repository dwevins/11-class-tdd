export default class KeepSecret {


  constructor(secret) {
    this.vars = {
      secretPhrase: '',
    };
    this.setSecret(secret);
  }

  setSecret(secret) {
    this.vars.secretPhrase = secret;
  }

  squeal() {
    return this.vars.secretPhrase;
  }
}
