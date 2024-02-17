export default class LocalStore {
  key: string;
  constructor(key: string) {
    this.key = key;
  }
  get() {
    return localStorage.getItem(this.key);
  }
  set(value: string) {
    localStorage.setItem(this.key, value);
    return value;
  }
}
