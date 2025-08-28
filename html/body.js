document.addEventListener("DOMContentLoaded", function() {
    // Cari judul artikel (misal h1 di dalam .post-content)
    var article = document.querySelector(".post-content");
    if (!article) return; // kalau bukan halaman artikel, keluar

    var title = article.querySelector("h1");
    if (!title) return;

    // Buat container iklan
    var adDiv = document.createElement("div");
    adDiv.style = "width:100%; text-align:center; margin:10px 0;";
    
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

    adDiv.appendChild(adScript);

    // Sisipkan setelah judul
    title.parentNode.insertBefore(adDiv, title.nextSibling);
});
