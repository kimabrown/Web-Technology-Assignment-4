var caps = new Array(10);
caps[0] = "Weights";
caps[1] = "Balance-Living Lifestyle Change";
caps[2] = "Elliptical Trainer";
caps[3] = "Download our App from the App Store ";
caps[4] = "Our Weight Room";
caps[5] = "Read our Health Blogs!";
caps[6] = "Meet our Trainers!";
caps[7] = "Our Wide Assortment of Free-Weights";
caps[8] = "Enjoy our Outdoor Yoga Class!";
caps[9] = "Balance-Living is Healthy Living!";

var fadeOut_opacity = 1;
var fadeIn_opacity = 0;
var delta = 0.001;

//FadeOut and FadeIn Images
function dissolve1()
{
    document.getElementById("div1").style.opacity = fadeOut_opacity;
    document.getElementById("div2").style.opacity = fadeIn_opacity;
    document.getElementById("caption").innerHTML = caps[0];

    fadeOut_opacity -= delta;
    fadeIn_opacity += delta;

    if (fadeIn_opacity >= 1)
    {
        fadeOut_opacity = 1;
        fadeIn_opacity = 0;
        dissolve2();
        return;
    }
    timer = setTimeout("dissolve1()", 1);
}
function dissolve2()
{
    document.getElementById("div2").style.opacity = fadeOut_opacity;
    document.getElementById("div3").style.opacity = fadeIn_opacity;
    document.getElementById("caption").innerHTML = caps[1];

    fadeOut_opacity -= delta;
    fadeIn_opacity += delta;

    if (fadeIn_opacity >= 1)
    {
        fadeOut_opacity = 1;
        fadeIn_opacity = 0;
        dissolve3();
        return;
    }

    timer = setTimeout("dissolve2()", 1);
}
function dissolve3()
{
    document.getElementById("div3").style.opacity = fadeOut_opacity;
    document.getElementById("div4").style.opacity = fadeIn_opacity;
    document.getElementById("caption").innerHTML = caps[2];

    fadeOut_opacity -= delta;
    fadeIn_opacity += delta;

    if (fadeIn_opacity >= 1)
    {
        fadeOut_opacity = 1;
        fadeIn_opacity = 0;
        dissolve4();
        return;
    }

    timer = setTimeout("dissolve3()", 1);
}
function dissolve4()
{
    document.getElementById("div4").style.opacity = fadeOut_opacity;
    document.getElementById("div5").style.opacity = fadeIn_opacity;
    document.getElementById("caption").innerHTML = caps[3];

    fadeOut_opacity -= delta;
    fadeIn_opacity += delta;

    if (fadeIn_opacity >= 1)
    {
        fadeOut_opacity = 1;
        fadeIn_opacity = 0;
        dissolve5();
        return;
    }

    timer = setTimeout("dissolve4()", 1);
}
function dissolve5()
{
    document.getElementById("div5").style.opacity = fadeOut_opacity;
    document.getElementById("div6").style.opacity = fadeIn_opacity;
    document.getElementById("caption").innerHTML = caps[4];

    fadeOut_opacity -= delta;
    fadeIn_opacity += delta;

    if (fadeIn_opacity >= 1) {
        fadeOut_opacity = 1;
        fadeIn_opacity = 0;
        dissolve6();
        return;
    }

    timer = setTimeout("dissolve5()", 1);
}
function dissolve6()
{
    document.getElementById("div6").style.opacity = fadeOut_opacity;
    document.getElementById("div7").style.opacity = fadeIn_opacity;
    document.getElementById("caption").innerHTML = caps[5];

    fadeOut_opacity -= delta;
    fadeIn_opacity += delta;

    if (fadeIn_opacity >= 1) {
        fadeOut_opacity = 1;
        fadeIn_opacity = 0;
        dissolve7();
        return;
    }

    timer = setTimeout("dissolve6()", 1);
}
function dissolve7()
{
    document.getElementById("div7").style.opacity = fadeOut_opacity;
    document.getElementById("div8").style.opacity = fadeIn_opacity;
    document.getElementById("caption").innerHTML = caps[6];

    fadeOut_opacity -= delta;
    fadeIn_opacity += delta;

    if (fadeIn_opacity >= 1) {
        fadeOut_opacity = 1;
        fadeIn_opacity = 0;
        dissolve8();
        return;
    }

    timer = setTimeout("dissolve7()", 1);
}
function dissolve8()
{
    document.getElementById("div8").style.opacity = fadeOut_opacity;
    document.getElementById("div9").style.opacity = fadeIn_opacity;
    document.getElementById("caption").innerHTML = caps[7];

    fadeOut_opacity -= delta;
    fadeIn_opacity += delta;

    if (fadeIn_opacity >= 1) {
        fadeOut_opacity = 1;
        fadeIn_opacity = 0;
        dissolve9();
        return;
    }

    timer = setTimeout("dissolve8()", 1);
}
function dissolve9()
{
    document.getElementById("div9").style.opacity = fadeOut_opacity;
    document.getElementById("div10").style.opacity = fadeIn_opacity;
    document.getElementById("caption").innerHTML = caps[8];

    fadeOut_opacity -= delta;
    fadeIn_opacity += delta;

    if (fadeIn_opacity >= 1) {
        fadeOut_opacity = 1;
        fadeIn_opacity = 0;
        dissolve10();
        return;
    }

    timer = setTimeout("dissolve9()", 1);
}
function dissolve10()
{
    document.getElementById("div10").style.opacity = fadeOut_opacity;
    document.getElementById("div1").style.opacity = fadeIn_opacity;
    document.getElementById("caption").innerHTML = caps[9];

    fadeOut_opacity -= delta;
    fadeIn_opacity += delta;

    if (fadeIn_opacity >= 1) {
        fadeOut_opacity = 1;
        fadeIn_opacity = 0;
        dissolve1();
        return;
    }
 
    timer = setTimeout("dissolve10()", 1);
}
