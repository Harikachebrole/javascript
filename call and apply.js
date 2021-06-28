<html>

<body>

<p>Invoke a function using call() and apply(). Also Spot the difference between them.</p>

<p id="demo"></p>

<script>

const person={

fullname:function(){

 return this.firstname+" "+this.lastname;}}

const person1={

firstname:"jala",

lastname:"Technologies"

}

const person2={

firstname:"javascript",

lastname:"programs"}

document.getElementById("demo").innerHTML=person.fullname.apply(person1);

//document.getElementById("demo").innerHTML=person.fullname.call(person2);

</script>

</body>
</html>