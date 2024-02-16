class LocalStore {
  constructor(key) {
    this.key = key;
  }
  get() {
    return localStorage.getItem(this.key);
  }
  set(value) {
    localStorage.setItem(this.key, value);
    return value;
  }
}

export const localToken = new LocalStore("auth");
export const localTheme = new LocalStore("theme");
