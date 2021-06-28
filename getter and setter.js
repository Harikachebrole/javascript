<html>

<body>

<p>Create a Counter with the help of getter and setter accessors.</p>

<p id=demo></p>

 <button id="btn">Click Here!</button>

<script>

const count={counter:0};

Object.defineProperty(count,"increment",{

get:function()

{this.counter++;}})

Object.defineProperty(count, "subtract", {

  set : function (value) {this.counter -= value;}

});

​

count.increment;

count.subtract;

document.getElementById("demo").innerHTML = count.counter;

document.getElementById("btn").innerHTML = count.counter;

</script>

</body>

</html>