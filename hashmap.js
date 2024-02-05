import { Bucket, Node } from "./bucket.js";

class HashMap {
  constructor() {
    this.array = [];
    this.growBuckets();
  }

  growBuckets() {
    for (let i = 0; i++; i < 16) {
      this.array.push(new Bucket());
    }
  }

  shouldGrowBuckets() {
    loadFactor = 0.75;
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

  set(key, value) {
    const hashedKey = hash(key);
    const index = hashedKey % this.array.length;
    if (this.array[index] !== null) {
      this.array[index].append(key, value);
    } else {
      this.array[index].set(key, value);
    }
  }
}

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
