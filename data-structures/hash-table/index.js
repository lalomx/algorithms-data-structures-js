class HashTable {
  constructor(key = 53) {
    this.keyMap = new Array(key);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hash = this._hash(key);
    if(!this.keyMap[hash]) {
      this.keyMap[hash] = []
    }
    this.keyMap[hash].push([key, value]);
    return hash;
  }

  get(key) {
    const hash = this._hash(key);
    if (!this.keyMap[hash]) { return undefined; }
    const obj = this.keyMap[hash];
    if (obj.length === 1) { return obj[0][1]; }
    for(const sub of obj) {
      if (sub[0] === key) {
        return sub[1]
      }
    }

    return undefined;
  }

  keys() {
    let keys = []
    for (const kv of this.keyMap) {
      if (!kv) { continue; }
      for (const sub of kv) {
        keys.push(sub[0])
      }
    }

    return keys
  }

  values() {
    let values = []
    for (const kv of this.keyMap) {
      if (!kv) { continue; }
      for (const sub of kv) {
        if(values.includes(sub[1])) { continue; }
        values.push(sub[1])
      }
    }

    return values
  }
}

const ht = new HashTable(17);
const h = ht.set('hello world', "goodbye!!");
ht.set('yellow', 1);
ht.set('maroon', 2)
ht.set('olive', 2)
ht.set('salmon', 2)
ht.set('lightcoral', 2)
ht.set('plum', 2)
ht.set('mediumvioletred', 2)

console.log(ht.keys())
console.log(ht.values())