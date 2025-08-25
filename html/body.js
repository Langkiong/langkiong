document.addEventListener("DOMContentLoaded", function() {
  // Buat container iklan fixed di bawah
  var floatDiv = document.createElement("div");
  floatDiv.id = "floatads";
  floatDiv.style = "width:100%; margin:auto; text-align:center; position:fixed; bottom:0; z-index:9999; overflow:hidden;";

  var innerDiv = document.createElement("div");
  innerDiv.style = "text-align:center; display:block; max-width:729px; height:auto; margin:auto; overflow:hidden;";

  // Set konfigurasi Adsterra
  window.atOptions = {
    key: 'a647892478cfe688a80178b308049a3e',
    format: 'iframe',
    height: 90,
    width: 728,
    params: {}
  };

  // Tambahkan script Adsterra
  var adScript = document.createElement("script");
  adScript.type = "text/javascript";
  adScript.src = "https://recessionhillside.com/a647892478cfe688a80178b308049a3e/invoke.js";

  innerDiv.appendChild(adScript);
  floatDiv.appendChild(innerDiv);
  document.body.appendChild(floatDiv);
});
