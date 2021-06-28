<html>

<head>

<p>Create an object "person" with properties firstname and lastname. Display these 

properties using 2 different ways of accessing.</p>

<p id="demo"></p>

<p id="demo1"></p>

<script>

let person={

Firstname:"Harika",

};

document.getElementById("demo1").innerHTML=person.Firstname;

const person1=new Object();

person1.Lastname="Chebrole";

document.getElementById("demo").innerHTML=person1.Lastname;

</script>

</head>

</html>