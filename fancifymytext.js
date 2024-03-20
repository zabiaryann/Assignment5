// Alert to test JavaScript is working
alert("Hello world!");

document.addEventListener("DOMContentLoaded", function() {
    // Make text bigger when "Bigger!" button is clicked
    document.getElementById("biggerBtn").onclick = makeTextBigger;

    // Apply or remove fancy style based on radio button selection
    document.getElementById("fancyShmancy").onchange = applyFancyStyle;
    document.getElementById("boringBetty").onchange = removeFancyStyle;

    // Transform text to uppercase and add "-Moo" when "Moo" button is clicked
    document.getElementById("mooBtn").onclick = mooText;
});

function makeTextBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function applyFancyStyle() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontWeight = "bold";
    textInput.style.color = "blue";
    textInput.style.textDecoration = "underline";
}

function removeFancyStyle() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontWeight = "normal";
    textInput.style.color = "black";
    textInput.style.textDecoration = "none";
}

function mooText() {
    var textInput = document.getElementById("textInput");
    var sentences = textInput.value.toUpperCase().split(".");
    for(var i = 0; i < sentences.length; i++) {
        if(sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim() + "-MOO";
        }
    }
    textInput.value = sentences.join(". ").trim();
}
