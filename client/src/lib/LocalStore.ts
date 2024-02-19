export default class LocalStore {
  key: string;
  constructor(key: string) {
    this.key = key;
  }
  get() {
    return localStorage.getItem(this.key) as string;
  }
  set(value: string) {
    localStorage.setItem(this.key, value);
    return value;
  }
  has() {
    return Boolean(this.get());
  }
  clear() {
    localStorage.removeItem(this.key);
  }
}
