
//Which handlers run on click after the following code? Which alerts show up?

button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);


// ANSWER : 1 and 2 