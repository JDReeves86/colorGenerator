document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("val").innerHTML = getRandomColor()
});
document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor=getRandomColor()
});
function getRandomColor(){
    //array for hex code values
    const letters = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let colors = "#";
      //generates hex code up to 6 digits from letters array
    for (let i = 0; i < 6; i++) {
        colors += letters[Math.floor(Math.random() * letters.length)];
    } //generates random hex code from array above.
    return colors; 
};