<html>

<body>

​

<h2>Creating an Object Parsing JSON</h2>

<p id="demo"></p>

​

<script>

const myJSON = '{"name":"John", "age":30, "car":null}';

const myObj = JSON.parse(myJSON);

document.getElementById("demo").innerHTML = myObj.age;

//document.getElementById("demo").innerHTML = myObj.name;

</script>
</body>

</html>
