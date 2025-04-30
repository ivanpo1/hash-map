class HashMap {
    constructor(loadFactor) {
        this.loadFactor = 0;
        this.capacity = 16;
        this.storage = new Array(this.capacity).fill().map(() => []);
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;

        }

        return hashCode;
    }

    bucket(key) {
        let hash = this.hash(key)

        return this.storage[hash]
    }

    set(key, value) {
        // console.log('this.hash(key)', this.hash(key))
        // console.log('value', value)
        // console.log('storage', this.storage)
        let testing = this.bucket(key)
        testing.push([key, value]);
        // console.log(testing)
    }

    get(key) {
        console.log(this.storage[this.hash(key)])
    }

    has(key) {}

    remove(key) {}

    length() {}

    clear() {}

    keys() {}

    values() {}

    entries() {
        console.log(this.storage)
    }
}

const hash = new HashMap;

hash.set('apple', 'red')
hash.set('banana', 'yellow')
hash.set('carrot', 'orange')

hash.entries()


// hash.get('apple')
// hash.get('banana')
