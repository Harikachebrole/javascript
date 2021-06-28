<html>

<body>

<p>Write a program with variable hoisting(initialization first then declaration).

</p>

<p>The value of x is</p>

<p id="demo"></p>

<script>

x=5;//intializing first

element=document.getElementById("demo");

element.innerHTML=x;

var x;//declaration after intialization

</script>

</body>

</html>