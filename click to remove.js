<html>

<body>

<p>Write program using this keyword when we click on button, it should be disappear.</p>

<p id="demo"></p>

<button onclick="this.style.display='none'">Click to Remove Me!</button>

<script>

const person=

{

Firstname:"javascript",

Lastname:"programs",

fullname : function()

{

return this.Firstname+" "+this.Lastname;

}

};

document.getElementById("demo").innerHTML = person.fullname();

</script>

</body>

</html>

​