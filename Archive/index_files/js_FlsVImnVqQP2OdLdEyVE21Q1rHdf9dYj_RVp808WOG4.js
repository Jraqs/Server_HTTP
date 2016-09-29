(function ($) {

$(document).ready(function() {

    // social media
    jQuery("a.at300b").live("click", function(){
        _gaq.push(["_trackEvent", "Share", $(this).attr("title"), window.location.href]);
    });
    
    // video buttons
    jQuery("a.desktop_video").click(function(){
        video_link = $(this).parent().find("a.mobile_tablette_video").attr("href");
        _gaq.push(["_trackEvent", "Video", "Play", video_link]);
    });
    jQuery("a.mobile_tablette_video").click(function(){
        _gaq.push(["_trackEvent", "Video", "Play", $(this).attr("href")]);
    });

    // video link on the whole slide
    jQuery('a[class^="slide_link_"]').click(function(){
        var videoid = $(this).attr('rel');
        video_link = $('div#div_'+videoid+' > a.mobile_tablette_video').attr("href");
        _gaq.push(["_trackEvent", "Video", "Play", video_link]);
    });
    
    // form submit
    // Track submission events for all forms .
    $('form').submit(function() {
        _gaq.push(['_trackEvent', 'Form submit', jQuery(this).attr('id'), window.location.href]);
    });

    // track files download for /download/file/fid/XXXX
    jQuery('a[href*="download/file/fid"]').click(function(){
        $(this).attr('target', '_blank');//otherwise the event is aborted by page load
        _gaq.push(["_trackEvent", "Downloads", 'download_file_fid', jQuery(this).attr('href')]);
    });

});

})(jQuery);
;
function DisplayMail(Server, Login, Display){
    if ((Display.length == 0) || (Display.indexOf('@')+1)) {
    document.write('<a href=' + '"mai' + 'lto:' + Login + '@' + Server + '">' + text_contact_bt + '<\/a>'); }
    else  {
    document.write('<a href=' + '"mai' + 'lto:' + Login + '@' + Server + '">' + text_contact_bt + '<\/a>'); }
}
jQuery(document).ready(function() {
	//reloading page => all select must be unselected
	jQuery("#edit-section").val(0);
	jQuery("#region_CH").val(0);
	jQuery("#region_I").val(0);
	jQuery(".node-general-pro-contacts .location_contact_select").attr("disabled", "true");
});;
function switcherLang(index){
                var valeur = document.getElementById("formlangue_"+index).value;//recuperation de la langue choisie
				//redirige l'utilisateur
                if(valeur.substr(0,4)=="http") document.location.href =  valeur; else document.location.href =  "/"+valeur;
};
