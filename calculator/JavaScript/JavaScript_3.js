function displayType(character) {//character is the parameter
    var characterType = character.getAttribute("data-character-type"); //var x = character.getdata (ex data-char-type = "Batman")
    alert(characterType + " is in the " + character.innerHTML + " universe!");//when clicked on batman, = batman is in dc(inner.HTML text) universe
}