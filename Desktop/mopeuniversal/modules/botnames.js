function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var names = [
    "No No Sammia",
    "NO No Sammia Fan",
    "Hunter Is gay",
    "want some meth?",
    "Aflah",
    "Aflah Is Kool",
    "Sam",
    "Richard",
    "Ammon",
    "Robux Gamer 69",
    "U cant see me",
    "roblox",
    "play mc with me",
    "free xp",
    ":()",
    "Soi Sauce",
    "Hunter gay",
    "No No sammia",
    "Hunter Is gay",
    "soi sauce",
    "Sammia fan6969",
    "Hunter is a gay ",
    "Sammi is a gay",
    "aflah",
    "Aflah",
]
function name() {

}
name.prototype = {

    newnames: function () {
        var d = getRandomInt(0, names.length)
        var newname = names[d]
        return newname;


    },
}
module.exports = name