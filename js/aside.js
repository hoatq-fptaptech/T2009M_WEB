function Aside() {
    return "<div class=\"block black-block\">\n" +
        "                <p>Noi dung 1</p>\n" +
        "                <p>Noi dung 2</p>\n" +
        "                <p>Noi dung 3</p>\n" +
        "                <p>Noi dung 4</p>\n" +
        "            </div>\n" +
        "            <div class=\"block\">\n" +
        "                <p>Noi dung 1</p>\n" +
        "                <p>Noi dung 2</p>\n" +
        "                <p>Noi dung 3</p>\n" +
        "                <p>Noi dung 4</p>\n" +
        "            </div>\n" +
        "            <div class=\"block\">\n" +
        "                <p>Noi dung 1</p>\n" +
        "                <p>Noi dung 2</p>\n" +
        "                <p>Noi dung 3</p>\n" +
        "                <p>Noi dung 4</p>\n" +
        "            </div>";
}
var as = document.getElementById("sidebar");
as.innerHTML = Aside();