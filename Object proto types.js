<html>

<body>

<p>Add some more properties to an existing function using object prototypes.</p>

<p id="demo"></p>

<script>

function Person(first, last, age, eye) {

  this.firstName = first;

  this.lastName = last;

  this.age = age;

  this.eyeColor = eye;

}

​

const myFather = new Person("John", "Doe", 50, "blue");

const myMother = new Person("Sally", "Rally", 48, "green");

document.getElementById("demo").innerHTML =

"My father is " + myFather.firstName + ". My mother is " + myMother.firstName; 

</script>
</body>

</html>