class HashMap {
    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.storage = new Array(this.capacity).fill().map(() => []);
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;

        }

        return hashCode;
    }

    set(key, value) {

        let bucket = this.storage[this.hash(key)]

        for (let keyOf of bucket) {
            if (keyOf[0] === key) {
                keyOf[1] = value;
                return;
            }
        }

        bucket.push([key, value])
        this.size++

        if (this.size / this.capacity > this.loadFactor) {
            console.log(`size: ${this.size} / ${this.capacity} > ${this.loadFactor}`)
            this.resize()
        }
    }

    resize() {
        this.capacity *= 2;

        const oldStorage = this.storage;
        this.storage = new Array(this.capacity).fill().map(() => []);
        this.size = 0;

        for (const bucket of oldStorage) {
            for (const entry of bucket) {
                this.set(entry[0], entry[1]);
            }
        }
    }

    getBucket(key) {
        return this.storage[this.hash(key)]
    }

    get(key) {
        const bucket = this.getBucket(key)
        for (let keyOf of bucket) {
            if (keyOf[0] === key) {
                return keyOf[1];
            }
        }
        return null;
    }

    has(key) {
        let bucket = this.getBucket(key)

        for (let keyOf of bucket) {
            if (keyOf[0] === key) {
                return true;
            }
        }
        return false;
    }

    remove(key) {
        let bucket = this.getBucket(key)
        const index = bucket.findIndex(([k]) => k === key);

        if (index !== -1) {
            bucket.splice(index, 1)
            this.size--;
            return true;
        }
        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.storage = new Array(this.capacity).fill().map(() => [])
        this.size = 0;
    }

    keys() {
        const arrayOfKeys = [];
        const buckets = this.storage;
        for (let i = 0; i < buckets.length; i++) {
            for (let j = 0; j < buckets[i].length; j++) {
                arrayOfKeys.push(buckets[i][j][0])
            }
        }

        return arrayOfKeys;

    }

    values() {
        const arrayOfValues = [];
        const buckets = this.storage;
        for (let i = 0; i < buckets.length; i++) {
            for (let j = 0; j < buckets[i].length; j++) {
                arrayOfValues.push(buckets[i][j][1])
            }
        }

        return arrayOfValues;
    }

    entries() {
        const entries = [];

        for (const bucket of this.storage) {
            entries.push(...bucket);
        }
        return entries
    }
}

const test = new HashMap;

// hash.set('apple', 'red')
// hash.set('banana', 'yellow')
// hash.set('carrot', 'orange')
//
// hash.set('apple', 'blue')
// hash.set('ppale', 'green')
// hash.set('ppale', 'carambas?')

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

// test.entries()

// console.log(test.has('kite'))
// console.log(test.has('jacket'))
// console.log(test.has('astronauta'))
// console.log(test.has('frog'))
// console.log(test.has('lion'))
//
//
// console.log(test.get('lion'))
// console.log(test.get('astronauta'))
// console.log(test.get('hat'))

// test.remove('lion')

console.log(test.storage)
console.log('capacity: ', test.capacity)
console.log('size: ', test.size)

// console.log(test.entries())

test.set('moon', 'silver')

console.log(test.storage)
console.log('capacity: ', test.capacity)
console.log('size: ', test.size)
