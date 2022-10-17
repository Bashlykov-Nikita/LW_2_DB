function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear; // reseting the list
    this.find = find; // finde an element and returns its position
    this.toString = toString; // retern the list (in a string form)
    this.insert = insert; // takes to arguments (elemet, position after which the element should be placed)
    this.append = append; // add element to a list
    this.remove = remove; // removing element from a list
    this.front = front; // set position to 0
    this.end = end; // set position to the last one
    this.prev = prev; // previous position
    this.next = next; // next position
    this.length = length; // returns size of a list
    this.currPos = currPos; // returns current position
    this.moveTo = moveTo; // take position as an argument and set it to current position
    this.getElement = getElement; // returns element in current position
    this.contains = contains; // takes elemnt as a parametr and if it contains in a list returns true otherwise false
}
function append(element) {
    this.dataStore[this.listSize++] = element;
}
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}
function length() {
    return this.listSize;
}
function toString() {
    return this.dataStore;
}
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}
function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize - 1;
}
function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}
function next() {
    this.pos = ++this.pos;
}
function currPos() {
    return this.pos;
}
function moveTo(position) {
    this.pos = position;
}
function getElement() {
    return this.dataStore[this.pos];
}
