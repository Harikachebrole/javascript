<script>
var fruits=["Banana","Apple","Mango","Pine apple","pear","Avacado"];
document.getElementById("demo").innerHTML=fruits;

function funct()
{
document.getElementById("demo").innerHTML=fruits;

fruits.sort();

document.getElementById("demo").innerHTML=fruits;

}