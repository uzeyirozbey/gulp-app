

// $(document).ready(function () {
//    $(".table-edit-button").on("click", function () {
//       alert("Row editing not possible now! Sorry!");
//    });

//    $(".nav-bar-node").on("click", function () {
//        var page = $(this).find("a").attr("href");
//        page = page.substring(1, page.length);

//        $.get( "pages/" + page + ".html", function( data ) {
//            $("#master-page").html(data);
//        });
//    });
//    $(".nav-bar-node").find('[href="#home"]').click();
// });
$(document).ready(function () {
    $(".nav-item").on("click", function () {
        var page = $(this).find("a").attr("href");
        page = page.substring(1, page.length);
        $.get("pages/"+page+".html", function (data) {
            $("#master-page").html(data);
        });
    });
    $(".nav-item").find('[href="#anasayfa"]').click();
});

menuListele();
function menuListele() {
    const menu = `
     <div class="container-fluid">
            <a class="navbar-brand" href="#">Gulp</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a id="menu" class="nav-link active" aria-current="page" href="#anasayfa">Anasayfa</a>
                </li>
                <li class="nav-item">
                   <a id="menu" class="nav-link" href="#hakkimizda">Hakkımızda</a>
                </li>
                <li class="nav-item">
                    <a id="menu" class="nav-link" href="#iletisim">İletişim</a>
                </li>
            </ul>
            </div>
      </div>
    `;
    $("#menu").html(menu);
}

footerYukle();
function footerYukle() {
    const footer = `
    <div class="container-fluid">
    </div>
   `;
    $("#footer").html(footer);
}
