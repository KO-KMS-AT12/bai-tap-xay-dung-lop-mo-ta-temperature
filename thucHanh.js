// Độ K = Độ C + 273.15
// Độ F = Độ C x 1.8 + 32

let Temperature = function (c) {
    this.c = c;

    this.getC = function () {
        return this.c;
    };


    this.getF = function () {
        return this.c * 1.8 + 32;
    };

    this.getK = function () {
        return this.c + 273.15;
    }
};
main();

function main() {
    let rdC = Math.round(Math.random() * 50);
    let temperature = new Temperature(rdC);
    alert("Do C chuyen sang do F va do K lan luot la: "
        + temperature.getF() + " , " + temperature.getK());
}