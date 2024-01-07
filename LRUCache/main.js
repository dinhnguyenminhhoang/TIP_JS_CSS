class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.order = [];
    }

    get(key) {
        if (this.cache.has(key)) {
            // Move the accessed key to the end
            const index = this.order.indexOf(key);
            this.order.splice(index, 1);
            this.order.push(key);

            return this.cache.get(key);
        } else {
            return -1;
        }
    }

    put(key, value) {
        if (this.cache.size >= this.capacity) {
            // Remove the least recently used key
            const lruKey = this.order.shift();
            this.cache.delete(lruKey);
        }

        // Add the new key-value pair
        this.cache.set(key, value);
        this.order.push(key);
    }
}

// Example usage:
const lruCache = new LRUCache(2);
lruCache.put(1, 1);
lruCache.put(2, 2);

console.log(lruCache.get(1)); // Output: 1
lruCache.put(3, 3); // evicts key 2
console.log(lruCache.get(2)); // Output: -1 (not found)
console.log(lruCache.get(3)); // Output: 3
