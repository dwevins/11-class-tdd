export default class Lock {
  constructor(sensitive, rightKey) {
    this.vars = {
      theGoods: sensitive,
      key: rightKey,
    };
  }

  unlock(key) {
    if (key === this.vars.key) {
      return this.vars.theGoods;
    }
    return undefined;
  }
}
