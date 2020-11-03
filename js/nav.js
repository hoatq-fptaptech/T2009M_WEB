var cats = [
    {
        name:"Thời trang",
        url: "#"
    },
    {
        name:"Đồng hồ",
        url: "#"
    },
    {
        name:"Giày dép",
        url: "#"
    },
    {
        name:"Trang sức",
        url: "#"
    },
    {
        name:"Kim cương",
        url: "#"
    },
    {
        name:"Kính mát",
        url: "#"
    },
    {
        name:"Khăn quàng",
        url: "#"
    }
];
function nav() {
    var nav_html =  "<div class=\"container\">\n" +
        "        <ul class=\"menu\">\n" ;
        // them ca category tu array o tren
        for(var i=0;i<cats.length;i++){ // cats[i].name
            nav_html+= "<li class='item'><a href='"+cats[i].url+"'>"+cats[i].name+"</a> </li>"
        }

    nav_html+=" <li class=\"last-item\"><a href=\"#\">Get Genisis Now!</a></li>\n" +
        "        </ul>\n" +
        "    </div>";
    return nav_html;
}
var na = document.getElementById("nav");
na.innerHTML = nav();