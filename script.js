let input = document.querySelector("input");
input.addEventListener("input", function () {
    if(input.value.length >= input.placeholder.length)
        input.style.width = (input.value.length + 1)*8 + "px"; //8: font-size
});
let ifAnnot;
let newPlace = document.getElementById('newPlace');
newPlace.addEventListener('mouseover', function (evt) {
    ifAnnot = document.createElement("div");
    ifAnnot.className = "annot";
    document.body.append(ifAnnot);
    ifAnnot.innerText = "Городоцька, 1";
    ifAnnot.style.width = ifAnnot.innerText.length*8 + 'px';
    let coords = newPlace.getBoundingClientRect();
    ifAnnot.style.left = coords.left + "px";
    ifAnnot.style.top = coords.top - newPlace.offsetHeight - 10 + "px";
    console.log(ifAnnot.style.top);
});

newPlace.addEventListener("mouseout", function (evt) {
    if(ifAnnot) {
        ifAnnot.remove();
    }
});