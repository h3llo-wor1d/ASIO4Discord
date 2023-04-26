module.exports = () => {
    Array.prototype.toByteArray = function() {
        return Buffer.from(this)
    }

    Number.prototype.toShort = function() {
        const int16 = new Int16Array(1)
        int16[0] = this
        return int16[0]
    }
}