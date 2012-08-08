$(function () {
    //Animaciones
    $("#esika_logo").hide();
    $("#share").hide();
    $("#logo_special").hide();
    $("#tag_line").hide();
    $("#tag_line p").hide();
    $("header").hide();
    $("#frasco").hide();
    $("#destello").hide();
    $("#tooltip_special").hide();
    $("#disfrutando_contigo").hide();
    $("#disfrutando_pareja").hide();
    $("#disfrutando_familia").hide();
    $("#disfrutando_amigas").hide();
    $("#recetario").hide();
    $("#consejos").hide();

    //divs internos
    $("#int_logo_esika").hide();
    $("#share_interior").hide();
    $("#int_logo_special").hide();
    $("#int_header_galeria").hide();
    $("#int_all_galeria").hide();
    $("#titulo_seccion").hide();
    $(".int_titular_disfruta_galeria").hide();
    $(".int_titular_contigo_galeria").hide();
    $("#contigo_galeria").hide();
    $("#familia_galeria").hide();
    $("#amigas_galeria").hide();
    $("#pareja_galeria").hide();
    $("#footer_galeria").hide();
	$("#frasco_special_galeria").hide();
	$("#masinfo_btn").hide();
	$("#int_galeria p").hide();
	$("#contigo_galeria_selec").hide();
	$("#familia_galeria_secundario").hide();
	$("#amigas_galeria_secundario").hide();
	$("#pareja_galeria_secundario").hide();
	$("#contenedor_carrusel_animacion").hide();
	
	

    $("header").fadeIn(2000, function () {
    });
    $("#int_header_galeria").fadeIn(2000, function () {
    });
    $("#int_all_galeria").fadeIn(2000, function () {
    });
    $("#footer_galeria").fadeIn(2000, function () {
    });

    setTimeout(function () {
        $("#logo_special").show("blind", { direction: "horizontal" }, 2000);
        $("#int_logo_special").show("blind", { direction: "horizontal" }, 1500);
        $("#tag_line").fadeIn(2000, function () { });
		
    }, 1000)

    setTimeout(function () {
        $("#frasco").fadeIn(1000, function () { });
        $("#tag_line p").fadeIn(1500, function () { });
        $("#titulo_seccion").fadeIn(1500, function () { });
        $("#esika_logo").fadeIn(2000, function () { });
        $("#int_logo_esika").fadeIn(2000, function () { });
        $("#disfrutando_pareja").fadeIn(1500, function () { });
        $("#familia_galeria").fadeIn(1500, function () { });
		$("#familia_galeria_secundario").fadeIn(1500, function () { });
    }, 2000)

    setTimeout(function () {
        $("#destello").fadeIn(1200, function () { });
        $("#share").fadeIn(2500, function () { });
        $("#share_interior").fadeIn(2500, function () { });
        $("#disfrutando_familia").fadeIn(1500, function () { });
        $("#amigas_galeria").fadeIn(1500, function () { });
		$("#amigas_galeria_secundario").fadeIn(1500, function () { });
        $(".int_titular_disfruta_galeria").fadeIn(1500, function () { });
    }, 2500)

    setTimeout(function () {
        $("#disfrutando_amigas").fadeIn(1500, function () { });
        $("#pareja_galeria").fadeIn(1500, function () { });
		$("#pareja_galeria_secundario").fadeIn(1500, function () { });
        $("#recetario").show("blind", { direction: "vertical" }, 2000);
        $("#consejos").show("blind", { direction: "vertical" }, 2000);
        $(".int_titular_contigo_galeria").fadeIn(1500, function () { });
		$("#frasco_special_galeria").fadeIn(1500, function () { });
		$("#contenedor_carrusel_animacion").show("blind", { direction: "horizontal" }, 2000);
		
    }, 3000)

    setTimeout(function () {
        $("#tooltip_special").fadeIn(2000, function () { });
		$("#masinfo_btn").fadeIn(2000, function () { });
    }, 4000)

    setInterval(function () {
        $("#destello").fadeOut(2000, function () { });
        $("#destello").fadeIn(3500, function () { });
    }, 2000);

    setTimeout(function () {
		$("#int_galeria p").fadeIn(1000, function () { });
        $("#disfrutando_contigo").fadeIn(1500, function () { });
        $("#contigo_galeria").fadeIn(1500, function () { });
		$("#contigo_galeria_selec").fadeIn(1500, function () { });
    }, 1500)



    //Redes
    $("#tweet_btn img").click(function (e) {
        var lnk = encodeURIComponent("http://www.esika.biz/special/");
        if ($.browser.msie) {
            var texto = encodeURIComponent('Special: Un momento especial lo puedes hacer tú...');
        }
        else {
            var texto = 'Special: Un momento especial lo puedes hacer t\u00FA...';
        }
        window.open('http://twitter.com/share?url=' + lnk + '&text=' + texto + '&via=EsikaBelcorp', 'twittear', 'width=600,height=325,top=200,left=400,scrollbars=NO');
    });
});	
	

	