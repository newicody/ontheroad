function tabloid()
    {
    var init = 1;
    var test = document.getElementsByTagName("td");
    for (var i = 0; i < test.length ; i++)
        {
        test[i].onclick = function () 
            {
            if (init==0) { cache(this); }
            else { affiche(this); }
            }
        };
    

function affiche(j)
    {
    var value = j.innerHTML;
    var test1 = document.getElementsByTagName("td");
    for (var y = 0; y < test1.length ; y++)
        {
        if (value==test1[y].innerHTML)
            {
            for (c=1; c< 5; c++) 
                {
                test1[c+y].setAttribute('style', 'visibility:visible');
                init = 0;
                };
            }
        };
    }

function cache(g)
    {
    var value = g.innerHTML;
    var test2 = document.getElementsByTagName("td");
    for (var z = 0; z < test2.length ; z++)
        {
        if (value == test2[z].innerHTML)
            {
            for (c=1; c< 5; c++) 
                {
                test2[c+z].setAttribute('style', 'visibility:hidden');
                init = 1;
                };
            }
        };
    } 
}
tabloid();
