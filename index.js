function gnirts (string) {
    string += "";
    string = string.split("");
    var length = string.length;
    var left = 0;
    var right = length - 1;

    for (; left < right; left += 1, right -= 1) {
        var temporary = string[left];
        string[left] = string[right];
        string[right] = temporary;
    }
    string = string.join("");
    return string;
}

if(typeof module !== "undefined") {
    module.exports = gnirts;
}
