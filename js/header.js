function Header() {
    return "<div class=\"container\">\n" +
        "        <div class=\"logo\">\n" +
        "            <a href=\"/home.html\">T2009M</a>\n" +
        "        </div>\n" +
        "        <ul class=\"top-links\">\n" +
        "            <li><a href=\"#\">Whist list</a></li>\n" +
        "            <li><a href=\"#\">Cart</a></li>\n" +
        "            <li><a href=\"#\">Sign in</a></li>\n" +
        "            <li><a href=\"#\">Sign up</a></li>\n" +
        "        </ul>\n" +
        "    </div>";
}
var hd = document.getElementById("header");
hd.innerHTML = Header();