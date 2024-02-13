class CacheStore {
  constructor(limit = 5) {
    this.limit = limit;
    this.urls = [];
    this.docs = [];
  }

  getDoc(id) {
    return this.docs.find((doc) => doc.id === id);
  }

  addDoc(doc) {
    if (this.limit <= this.docs.length) this.docs.pop();
    this.docs.push({ at: Date.now(), doc });
  }
  updateDoc(doc) {
    this.docs.forEach((element, index) => {
      // if(element.doc.id === doc.id)
    });
  }
  deleteDoc(doc) {
    this.docs.delete(doc.id);
  }

  addURL(url, docs) {
    this.urls.set(
      url,
      docs.map((doc) => doc.id)
    );
    for (const doc of docs) this.addDoc(doc);
  }

  getURL(url) {
    if (!this.hasURL(url)) return null;
    const docs = [];
    const ids = this.urls.get(url);
    for (const id of ids) docs.push(this.getDoc(id));
    return docs;
  }

  clear() {
    this.docs.clear();
    this.urls.clear();
  }
}

const store = new CacheStore(3);

store.addDoc({ id: 1, name: "A" });
store.addDoc({ id: 2, name: "B" });
store.addDoc({ id: 4, name: "D" });
console.log(store.docs);

setTimeout(() => {
  store.addDoc({ id: 3, name: "C" });
  store.addDoc({ id: 5, name: "D" });
  console.log(store.docs);
}, 500);
setTimeout(() => {
  store.addDoc({ id: 10, name: "E" });
  store.addDoc({ id: 11, name: "F" });
  console.log(store.docs);
}, 1000);
