var imgList = document.getElementById("imgList");
var imgArr = document.getElementsByClassName("Carousel-figure");
var navDiv = document.getElementById("navDiv");
var outer = document.getElementById("outer");
var allA = document.getElementsByClassName("aaa");
var lbt = 0;
imgList.style.width = "5562px";
allA[lbt].style.backgroundColor = "#cd3333";
for (var i = 0; i < allA.length; i++) {
    allA[i].num = i;
    allA[i].onclick = function() {
        clearInterval(timer);
        autoChange();
        lbt = this.num;
        imgList.style.left = -618 * lbt + "px";
        changeA();
    };
}
autoChange();

function changeA() {
    if (lbt >= imgArr.length - 1) {
        lbt = 0;
        imgList.style.left = 0;
    }
    for (var i = 0; i < allA.length; i++) {
        allA[i].style.backgroundColor = "";

    }
    allA[lbt].style.backgroundColor = "#cd3333"; /*开始第一个的颜色*/
};
var timer;

function autoChange() {
    timer = setInterval(function() {
        lbt++;
        lbt %= imgArr.length;
        imgList.style.left = -618 * lbt + "px";
        changeA();
    }, 4000);
}
/****************************************************************************************************/





window.onload = function() {
    var weeklyul = document.getElementById("weekly-ul");
    var weeklybuttonleft = document.getElementsByClassName("weekly-button-left")[0];
    var weeklybuttonright = document.getElementsByClassName("weekly-button-right")[0];
    var n = 0;
    weeklybuttonright.onclick = function() {

        rightChange();
        if (n == 5) {
            weeklybuttonright.style.display = "none";
        }
        if (n != 0) {
            weeklybuttonleft.style.display = "block";
        }
        console.log("you" + n);
    }

    function rightChange() {
        n++;
        weeklyul.style.left = -875 * n + "px";

    };

    weeklybuttonleft.onclick = function() {

        leftChange();
        if (n == 0) {
            weeklybuttonleft.style.display = "none";
        }
        if (n != 5) {
            weeklybuttonright.style.display = "block";
        }
        console.log("zuo" + index);
    }

    function leftChange() {
        n--;
        weeklyul.style.left = -875 * n + "px";
    };



    /*********************************************************************** */


    var personaltabs1 = document.getElementsByClassName("personal-tabs1")[0].children;
    var personaltabs2 = document.getElementsByClassName("personal-tabs2")[0].children;
    var personalcontent = document.getElementsByClassName("personal-content")[0].children;
    var tabs1 = document.getElementById("tabs1");
    var tabs2 = document.getElementById("tabs2");
    var tabs3 = document.getElementById("tabs3");
    var tabs4 = document.getElementById("tabs4");
    var tabs5 = document.getElementById("tabs5");
    var tabs6 = document.getElementById("tabs6");
    var tabs7 = document.getElementById("tabs7");
    var tabs8 = document.getElementById("tabs8");
    var tabs9 = document.getElementById("tabs9");
    var tabs10 = document.getElementById("tabs10");
    var personalchange = document.getElementsByClassName("personal-change")[0];
    var index = 0;
    personalchange.onclick = function() {
        index++;
        if (!(index & 1)) {
            for (var v = 7; v <= 12; v++) {
                personalcontent[v].style.display = "none";
            }
            personalcontent[1].style.display = "block";
            personalcontent[2].style.display = "block";

        }



        if (index & 1) {
            for (var l = 1; l <= 6; l++) {
                personalcontent[l].style.display = "none";
            }
            personalcontent[7].style.display = "block";
            personalcontent[8].style.display = "block";

        }

    }

    var perright1 = document.getElementById("per-right1");
    var perright2 = document.getElementById("per-right2");
    var personalchange2 = document.getElementsByClassName("personal-change2")[0];
    var t = 0;
    personalchange2.onclick = function() {
        t++;
        if (!(t & 1)) {
            perright1.style.display = "block";
            perright2.style.display = "none";
        }
        if (t & 1) {
            perright2.style.display = "block";
            perright1.style.display = "none";
        }
    }




    tabs1.onmouseover = function() {
        personalcontent[2].style.display = "block";
        personaltabs1[0].className = "tabs-item-active";
        for (var a = 1; a <= 4; a++) {
            personaltabs1[a].className = "tabs-item";
        }
        for (var b = 3; b <= 7; b++) {
            personalcontent[b].style.display = "none";
        };
    };
    tabs6.onmouseover = function() {
        personalcontent[8].style.display = "block";
        personaltabs2[0].className = "tabs-item-active";
        for (var a = 1; a <= 4; a++) {
            personaltabs2[a].className = "tabs-item";
        }
        for (var b = 9; b <= 13; b++) {
            personalcontent[b].style.display = "none";
        };
    };
    tabs2.onmouseover = function() {
        personalcontent[3].style.display = "block";
        personaltabs1[1].className = "tabs-item-active";
        for (var a = 0; a <= 4; a++) {
            if (a != 1)
                personaltabs1[a].className = "tabs-item";
        };
        for (var b = 2; b <= 7; b++) {
            if (b != 3) {
                personalcontent[b].style.display = "none";
            };
        };
    };
    tabs7.onmouseover = function() {
        personalcontent[9].style.display = "block";
        personaltabs2[1].className = "tabs-item-active";
        for (var a = 0; a <= 4; a++) {
            if (a != 1)
                personaltabs2[a].className = "tabs-item";
        };
        for (var b = 8; b <= 13; b++) {
            if (b != 9) {
                personalcontent[b].style.display = "none";
            };
        };

    };
    tabs3.onmouseover = function() {
        personalcontent[4].style.display = "block";
        personaltabs1[2].className = "tabs-item-active";
        for (var a = 0; a <= 4; a++) {
            if (a != 2)
                personaltabs1[a].className = "tabs-item";
        };
        for (var b = 2; b <= 7; b++) {
            if (b != 4) {
                personalcontent[b].style.display = "none";
            };
        };
    };
    tabs8.onmouseover = function() {
        personalcontent[10].style.display = "block";
        personaltabs2[2].className = "tabs-item-active";
        for (var a = 0; a <= 4; a++) {
            if (a != 2)
                personaltabs2[a].className = "tabs-item";
        };
        for (var b = 8; b <= 13; b++) {
            if (b != 10) {
                personalcontent[b].style.display = "none";
            };
        };
    };
    tabs4.onmouseover = function() {
        personalcontent[5].style.display = "block";
        personaltabs1[3].className = "tabs-item-active";
        for (var a = 0; a <= 4; a++) {
            if (a != 3)
                personaltabs1[a].className = "tabs-item";
        };
        for (var b = 2; b <= 7; b++) {
            if (b != 5) {
                personalcontent[b].style.display = "none";
            };
        };
    };
    tabs9.onmouseover = function() {
        personalcontent[11].style.display = "block";
        personaltabs2[3].className = "tabs-item-active";
        for (var a = 0; a <= 4; a++) {
            if (a != 3)
                personaltabs2[a].className = "tabs-item";
        };
        for (var b = 8; b <= 13; b++) {
            if (b != 11) {
                personalcontent[b].style.display = "none";
            };
        };
    };
    tabs5.onmouseover = function() {
        personalcontent[6].style.display = "block";
        personaltabs1[4].className = "tabs-item-active";
        for (var a = 0; a <= 4; a++) {
            if (a != 4)
                personaltabs1[a].className = "tabs-item";
        };
        for (var b = 2; b <= 7; b++) {
            if (b != 6) {
                personalcontent[b].style.display = "none";
            };
        };
    };
    tabs10.onmouseover = function() {
        personalcontent[12].style.display = "block";
        personaltabs2[4].className = "tabs-item-active";
        for (var a = 0; a <= 4; a++) {
            if (a != 4)
                personaltabs2[a].className = "tabs-item";
        };
        for (var b = 8; b <= 13; b++) {
            if (b != 12) {
                personalcontent[b].style.display = "none";
            };
        };
    };


    var totop = document.getElementById("to-top");
    var rope = document.getElementsByClassName("rope")[0];
    window.onscroll = function() {
        var y = document.documentElement.scrollTop || document.body.scrollTop;
        if (y >= 900) {
            console.log("123");
            rope.style.height = "650px";
            totop.onclick = function() {
                rope.style.height = "0px";
            }
        }
        if (y >= 850 && y < 900) {
            rope.style.height = "0px";
        }

        if (y < 800) {
            rope.style.height = "0px";
        }
    }


};
/**************************************************************************************************** */

var right1 = document.getElementsByClassName("car-right-list1");
var right2 = document.getElementsByClassName("car-right-list2");
var thisweek = document.getElementById("thisweek");
var threedays = document.getElementById("threedays");
var carrighttitle21 = document.getElementsByClassName("car-right-title21");
var carrighttitle22 = document.getElementsByClassName("car-right-title22");

carrighttitle21[0].addEventListener('click', function() {
    listrightchange02();
    carrighttitle21[0].style.backgroundColor = "#dbdbdb";
    carrighttitle22[0].style.backgroundColor = "white";
})
carrighttitle22[0].addEventListener('click', function() {
    listrightchange01();
    carrighttitle21[0].style.backgroundColor = "white";
    carrighttitle22[0].style.backgroundColor = "#dbdbdb";
})

function listrightchange01() {
    for (var t = 0; t <= 4; t++) {
        right1[t].style.display = "none";
        right2[t].style.display = "block";
    };
};

function listrightchange02() {
    for (var t = 0; t <= 4; t++) {
        right1[t].style.display = "block";
        right2[t].style.display = "none";
    };
};

carrighttitle22[1].addEventListener('click', function() {
    listrightchange11();
    carrighttitle21[1].style.backgroundColor = "white";
    carrighttitle22[1].style.backgroundColor = "#dbdbdb";
})
carrighttitle21[1].addEventListener('click', function() {
    listrightchange12();
    carrighttitle21[1].style.backgroundColor = "#dbdbdb";
    carrighttitle22[1].style.backgroundColor = "white";
})

function listrightchange11() {
    for (var t = 5; t <= 9; t++) {
        right1[t].style.display = "none";
        right2[t].style.display = "block";
    };
};

function listrightchange12() {
    for (var t = 5; t <= 9; t++) {
        right1[t].style.display = "block";
        right2[t].style.display = "none";
    };
};
carrighttitle22[2].addEventListener('click', function() {
    listrightchange21();
    carrighttitle21[2].style.backgroundColor = "white";
    carrighttitle22[2].style.backgroundColor = "#dbdbdb";
})
carrighttitle21[2].addEventListener('click', function() {
    listrightchange22();
    carrighttitle21[2].style.backgroundColor = "#dbdbdb";
    carrighttitle22[2].style.backgroundColor = "white";
})

function listrightchange21() {
    for (var t = 10; t <= 14; t++) {
        right1[t].style.display = "none";
        right2[t].style.display = "block";
    };
};

function listrightchange22() {
    for (var t = 10; t <= 14; t++) {
        right1[t].style.display = "block";
        right2[t].style.display = "none";
    };
};
carrighttitle22[3].addEventListener('click', function() {
    listrightchange31();
    carrighttitle21[3].style.backgroundColor = "white";
    carrighttitle22[3].style.backgroundColor = "#dbdbdb";
})
carrighttitle21[3].addEventListener('click', function() {
    listrightchange32();
    carrighttitle21[3].style.backgroundColor = "#dbdbdb";
    carrighttitle22[3].style.backgroundColor = "white";
})

function listrightchange31() {
    for (var t = 15; t <= 19; t++) {
        right1[t].style.display = "none";
        right2[t].style.display = "block";
    };
};

function listrightchange32() {
    for (var t = 15; t <= 19; t++) {
        right1[t].style.display = "block";
        right2[t].style.display = "none";
    };
};
carrighttitle22[4].addEventListener('click', function() {
    listrightchange41();
    carrighttitle21[4].style.backgroundColor = "white";
    carrighttitle22[4].style.backgroundColor = "#dbdbdb";
})
carrighttitle21[4].addEventListener('click', function() {
    listrightchange42();
    carrighttitle21[4].style.backgroundColor = "#dbdbdb";
    carrighttitle22[4].style.backgroundColor = "white";
})

function listrightchange41() {
    for (var t = 20; t <= 24; t++) {
        right1[t].style.display = "none";
        right2[t].style.display = "block";
    };
};

function listrightchange42() {
    for (var t = 20; t <= 24; t++) {
        right1[t].style.display = "block";
        right2[t].style.display = "none";
    };
};
carrighttitle22[5].addEventListener('click', function() {
    listrightchange51();
    carrighttitle21[5].style.backgroundColor = "white";
    carrighttitle22[5].style.backgroundColor = "#dbdbdb";
})
carrighttitle21[5].addEventListener('click', function() {
    listrightchange52();
    carrighttitle21[5].style.backgroundColor = "#dbdbdb";
    carrighttitle22[5].style.backgroundColor = "white";
})

function listrightchange51() {
    for (var t = 25; t <= 29; t++) {
        right1[t].style.display = "none";
        right2[t].style.display = "block";
    };
};

function listrightchange52() {
    for (var t = 25; t <= 29; t++) {
        right1[t].style.display = "block";
        right2[t].style.display = "none";
    };
};
carrighttitle22[6].addEventListener('click', function() {
    listrightchange61();
    carrighttitle21[6].style.backgroundColor = "white";
    carrighttitle22[6].style.backgroundColor = "#dbdbdb";
})
carrighttitle21[6].addEventListener('click', function() {
    listrightchange62();
    carrighttitle21[6].style.backgroundColor = "#dbdbdb";
    carrighttitle22[6].style.backgroundColor = "white";
})

function listrightchange61() {
    for (var t = 30; t <= 34; t++) {
        right1[t].style.display = "none";
        right2[t].style.display = "block";
    };
};

function listrightchange62() {
    for (var t = 30; t <= 34; t++) {
        right1[t].style.display = "block";
        right2[t].style.display = "none";
    };
};


carrighttitle22[7].addEventListener('click', function() {
    listrightchange71();
    carrighttitle21[7].style.backgroundColor = "white";
    carrighttitle22[7].style.backgroundColor = "#dbdbdb";
})
carrighttitle21[7].addEventListener('click', function() {
    listrightchange72();
    carrighttitle21[7].style.backgroundColor = "#dbdbdb";
    carrighttitle22[7].style.backgroundColor = "white";
})

function listrightchange71() {
    for (var t = 35; t <= 39; t++) {
        right1[t].style.display = "none";
        right2[t].style.display = "block";
    };
};

function listrightchange72() {
    for (var t = 35; t <= 39; t++) {
        right1[t].style.display = "block";
        right2[t].style.display = "none";
    };
};
carrighttitle22[8].addEventListener('click', function() {
    listrightchange81();
    carrighttitle21[8].style.backgroundColor = "white";
    carrighttitle22[8].style.backgroundColor = "#dbdbdb";
})
carrighttitle21[8].addEventListener('click', function() {
    listrightchange82();
    carrighttitle21[8].style.backgroundColor = "#dbdbdb";
    carrighttitle22[8].style.backgroundColor = "white";
})

function listrightchange81() {
    for (var t = 40; t <= 44; t++) {
        right1[t].style.display = "none";
        right2[t].style.display = "block";
    };
};

function listrightchange82() {
    for (var t = 40; t <= 44; t++) {
        right1[t].style.display = "block";
        right2[t].style.display = "none";
    };
};
/*************************************************** */

// var sixworks = document.getElementById("six-works");
// window.onresize = function() {

//     sixworks.style.width = "500px";
// }






var caritem = document.getElementsByClassName("car-item");
var fiveworks = document.getElementsByClassName("five-works");
var carworks = document.getElementsByClassName("car-works");
var titlechange = document.getElementsByClassName("title-change");


for (var gbj = 0; gbj <= 3; gbj++) {
    titlechange[gbj].index = gbj;
    titlechange[gbj].onclick = function() {


        fiveworks[this.index].style.display = "block";
        for (var y = 0; y <= 3; y++) {
            if (y != this.index) {
                fiveworks[y].style.display = "none";
                titlechange[y].classList.remove("change-black");
            }
            if (y == this.index) { titlechange[y].classList.add("change-black"); }
        }
    }
}
for (var gbj = 4; gbj <= 8; gbj++) {
    titlechange[gbj].index = gbj;
    titlechange[gbj].onclick = function() {


        fiveworks[this.index].style.display = "block";
        for (var y = 4; y <= 8; y++) {
            if (y != this.index) {
                fiveworks[y].style.display = "none";
                titlechange[y].classList.remove("change-black");
            }
            if (y == this.index) { titlechange[y].classList.add("change-black"); }
        }
    }
}
for (var gbj = 9; gbj <= 11; gbj++) {
    titlechange[gbj].index = gbj;
    titlechange[gbj].onclick = function() {


        fiveworks[this.index].style.display = "block";
        for (var y = 9; y <= 11; y++) {
            if (y != this.index) {
                fiveworks[y].style.display = "none";
                titlechange[y].classList.remove("change-black");
            }
            if (y == this.index) { titlechange[y].classList.add("change-black"); }
        }
    }
}
for (var gbj = 12; gbj <= 18; gbj++) {
    titlechange[gbj].index = gbj;
    titlechange[gbj].onclick = function() {


        fiveworks[this.index].style.display = "block";
        for (var y = 12; y <= 18; y++) {
            if (y != this.index) {
                fiveworks[y].style.display = "none";
                titlechange[y].classList.remove("change-black");
            }
            if (y == this.index) { titlechange[y].classList.add("change-black"); }
        }
    }
}
for (var gbj = 19; gbj <= 23; gbj++) {
    titlechange[gbj].index = gbj;
    titlechange[gbj].onclick = function() {
        fiveworks[this.index].style.display = "block";
        for (var y = 19; y <= 23; y++) {
            if (y != this.index) {
                fiveworks[y].style.display = "none";
                titlechange[y].classList.remove("change-black");
            }
            if (y == this.index) { titlechange[y].classList.add("change-black"); }
        }
    }
}
for (var gbj = 24; gbj <= 27; gbj++) {
    titlechange[gbj].index = gbj;
    titlechange[gbj].onclick = function() {
        fiveworks[this.index].style.display = "block";
        for (var y = 24; y <= 27; y++) {
            if (y != this.index) {
                fiveworks[y].style.display = "none";
                titlechange[y].classList.remove("change-black");
            }
            if (y == this.index) { titlechange[y].classList.add("change-black"); }
        }
    }
}
for (var gbj = 28; gbj <= 31; gbj++) {
    titlechange[gbj].index = gbj;
    titlechange[gbj].onclick = function() {
        fiveworks[this.index].style.display = "block";
        for (var y = 28; y <= 31; y++) {
            if (y != this.index) {
                fiveworks[y].style.display = "none";
                titlechange[y].classList.remove("change-black");
            }
            if (y == this.index) { titlechange[y].classList.add("change-black"); }
        }
    }
}
for (var gbj = 32; gbj <= 33; gbj++) {
    titlechange[gbj].index = gbj;
    titlechange[gbj].onclick = function() {
        fiveworks[this.index].style.display = "block";
        for (var y = 32; y <= 33; y++) {
            if (y != this.index) {
                fiveworks[y].style.display = "none";
                titlechange[y].classList.remove("change-black");
            }
            if (y == this.index) { titlechange[y].classList.add("change-black"); }
        }
    };
}