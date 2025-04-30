class HashMap {
    constructor(loadFactor = 0, capacity = 8) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
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

    // bucket(key) {
    //     let hash = this.hash(key)
    //
    //     return this.storage[hash]
    // }

    set(key, value) {

        let bucket = this.storage[this.hash(key)]

        for (let keyOf of bucket) {
            if (keyOf[0] === key) {
                keyOf[1] = value;
                return;
            }
        }
        // console.log('this.hash(key)', this.hash(key))
        // console.log('value', value)
        // console.log('storage', this.storage)
        // let testing = this.bucket(key)
        //
        // console.log('testing', testing)
        // testing.push([key, value]);

        bucket.push([key, value])
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
            return true;
        }
        return false;
    }

    length() {}

    clear() {
        this.storage = new Array(this.capacity).fill().map(() => [])
    }

    keys() {

    }

    values() {}

    entries() {
        console.log(this.storage)
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

test.entries()

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

test.remove('lion')

test.entries()
