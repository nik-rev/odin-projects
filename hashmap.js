import { Bucket, Node } from "./bucket.js";

class HashMap {
  constructor() {
    this.array = [];
    this.growBuckets();
  }

  growBuckets() {
    for (let i = 0; i < 16; i++) {
      this.array.push(new Bucket());
    }
  }

  shouldGrowBuckets() {
    const loadFactor = 0.75;
    let counter = 0;
    this.array.forEach((bucket) => {
      if (bucket.key !== null) {
        counter++;
      }
    });
    if (counter / this.array.length >= loadFactor) {
      this.growBuckets();
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  get(key) {
    const index = this.getIndex(key);
    return this.array[index].findValue(key);
  }

  set(key, value) {
    const index = this.getIndex(key);
    if (this.array[index].key !== null) {
      this.array[index].append(key, value);
    } else {
      this.array[index].set(key, value);
    }
    this.shouldGrowBuckets();
  }

  has(key) {
    const index = this.getIndex(key);
    return this.array[index].contains(key);
  }

  remove(key) {
    const indexOfBucket = this.getIndex(key);
    const indexOfNode = this.array[indexOfBucket].findIndex(key);
    if (indexOfNode === null) {
      return false;
    } else {
      this.array[indexOfBucket].removeAt(indexOfNode);
      return true;
    }
  }

  getIndex(key) {
    const hashedKey = this.hash(key);
    const index = hashedKey % this.array.length;
    if (index < 0 || index >= this.array.length) {
      throw new Error("Trying to access index out of bound");
    }
    return index;
  }

  length() {
    return this.array.reduce((accumulator, current) => {
      return accumulator + current.size();
    }, 0);
  }

  clear() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i] = new Bucket();
    }
    // this.array.forEach((bucket) => {
    //   bucket = new Node();
    // });
    // this.array.forEach((bucket) => {
    //   if (this.keys().includes(bucket.key)) {
    //     this.remove(bucket.key);
    //   }
    // });
  }
  entries() {
    const totalEntriesArray = [];
    this.keys().forEach((key, index) => {
      totalEntriesArray.push([this.keys().at(index), this.values().at(index)]);
    });
    return totalEntriesArray;
  }
  keys() {
    let totalKeysArray = [];
    this.array.forEach((bucket) => {
      const bucketArray = bucket.keysToArray();
      if (Array.isArray(bucketArray)) {
        totalKeysArray = [...totalKeysArray, ...bucketArray];
      }
    });
    return totalKeysArray;
  }
  values() {
    let totalValuesArray = [];
    this.array.forEach((bucket) => {
      const bucketArray = bucket.valuesToArray();
      if (Array.isArray(bucketArray)) {
        totalValuesArray = [...totalValuesArray, ...bucketArray];
      }
    });
    return totalValuesArray;
  }
}

const myHashMap = new HashMap();
myHashMap.set("Logan", "Davis");
myHashMap.set("Isabella", "Garcia");
myHashMap.set("Mason", "Black");
myHashMap.set("Lucas", "Smith");
myHashMap.set("Oliver", "Martinez");
myHashMap.set("Richard", "Jones");
myHashMap.set("Ava", "Brown");
myHashMap.set("Harper", "Miller");
myHashMap.set("Noah", "Jones");

console.log(myHashMap.entries());

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

// class HashMap {
//   constructor() {
//     this.buckets = [
//       new Bucket(1, "how are you"),
//       new Bucket("2", "im good bro"),
//       new Bucket(),
//       new Bucket("three", "how about you"),
//       new Bucket(),
//     ];
//   }
//   get(key) {
//     let bucketValue;
//     this.buckets.forEach((bucket) => {
//       if (bucket.key === key) {
//         bucketValue = bucket.value;
//       }
//     });
//     return bucketValue ?? null;
//   }
//   changeValue(key, value) {
//     this.buckets.forEach((bucket) => {
//       if (bucket.key === key) {
//         bucket.value = value;
//       }
//     });
//   }
//   set(index, key, value) {
//     if (index < 0 || index >= this.buckets.length) {
//       throw new Error("Trying to access index out of bound");
//     }
//     this.buckets[index] = new Bucket(key, value);
//     if (this.shouldGrowBuckets()) this.buckets.push(new Bucket());
//   }
//   shouldGrowBuckets() {
//     const loadFactor = 0.75;
//     let counter = 0;

//     this.buckets.forEach((bucket) => {
//       if (bucket.key !== undefined) counter++;
//     });
//     return counter / this.buckets.length > loadFactor;
//   }
//   // hash(key) {
//   //   let hashCode = 0;

//   //   const primeNumber = 31;
//   //   for (let i = 0; i < key.length; i++) {
//   //     hashCode = primeNumber * hashCode + key.charCodeAt(i);
//   //   }

//   //   return hashCode;
//   // }
// }

// class Bucket {
//   constructor(key, value) {
//     this.key = key;
//     this.value = value;
//   }
// }

// const hash = new HashMap();
