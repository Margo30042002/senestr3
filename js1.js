function $()
{var elements = new Array();
for (var i = 0; i < arguments.length; i++)
{var element = arguments[i];
if (typeof element == 'string')
element = document.getElementById(element);
if (arguments.length == 1)
return element;
elements.push(element);
}
return elements; }

function js1_f1()
{
$('sp1').style.background="url(logo1.png) repeat-y #fc0";
}

function js1_f2()
{
$('sp1').style.background="#f00";
}

function js1_f3()
{
$('b3').style. borderBottomColor="green";
}

function js1_f4()
{
$('b3').style.borderBottomColor="black";
}

function js1_f5()
{
$('b3').style. borderRight="5px double purple";
}

function js1_f6()
{
$('b3').style. borderRight="2px  solid black";
}

function js1_f7()
{
$('b3').style. borderTopWidth="10px";
}

function js1_f8()
{
$('b3').style. borderTopWidth="2px";
}

function js1_f9()
{
$('b4').style. font="bold italic 110% serif";
}

function js1_f10()
{
$('b4').style. font="12pt/10pt sans-serif";
}

function js1_f11()
{
$('pr2').style. listStyleImage="url(logo1.1.png)";
}

function js1_f12()
{
$('pr2').style.listStyleImage="none";
}

function js1_f13()
{
$('im1').style.marginRight="20 px";
}

function js1_f14()
{
$('im1').style. marginRight="30 px";
}