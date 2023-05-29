var arr=[];
var size=parseInt(prompt("enter the size of array to find numbers dividible by 3,4,5"));
var count=0;
for(let j=0;j<size;j++)
{
	arr[j]=parseInt(prompt("Enter value "+(j+1)));
}
document.write("Numbers divisible by 3,4,5");
document.write("<br>");
for(i=0;i<arr.length;i++)
{
	if(arr[i]%3==0||arr[i]%4==0||arr[i]%5==0)
	{
		document.write(arr[i]);
		document.write("<br>");
		count++;
		}
}
document.write("number of values divisible by 3,4,5 is/are "+count);