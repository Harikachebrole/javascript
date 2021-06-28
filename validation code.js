<html>

<head>

<p>Show the javascript validation. When you click submit, the text box doesn't need to 

be empty</p>

<script>

function validform(){

var x=document.forms["myform"]["fname"].value;

if(x==""||x=="null"){

alert("Name must be filled");

return false;

}}

</script>

</head>

<body>
<form name="myform" action="C:\Users\Hp\Desktop\Java Script\js\formfileforvalidation.php"

onsubmit="return validform()">

Name:<input type="text" name="fname">

<input type="submit" value="submit">

</form>

</body>

</html>
​