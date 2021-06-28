<html>

<body>

<p>Write a program for COUNTER. Whenever we click on a "Count" button, value 

should increment.</p>

<p id="demo"></p>

<button id=btn>Count</button>

<script>

var count = 0;
  var btn = document.getElementById("btn");

  btn.onclick = function () {
 count++;

 document.getElementById("demo").innerHTML = count;
  }

    </script>

</body>

</html>