<div id="floatads" style="width:100%; margin:auto; text-align:center; position:fixed; bottom:0; z-index:9999; overflow:hidden;">
  <div id="floatads-inner" style="text-align:center; display:block; max-width:729px; height:auto; margin:auto; overflow:hidden;">
    <!-- Iklan akan dimuat lewat JS -->
  </div>
</div>

<script type="text/javascript">
  // Pastikan halaman sudah siap
  document.addEventListener("DOMContentLoaded", function() {
    var innerDiv = document.getElementById("floatads-inner");

    // Buat script iklan
    var adScript = document.createElement("script");
    adScript.type = "text/javascript";
    adScript.src = "https://recessionhillside.com/a647892478cfe688a80178b308049a3e/invoke.js"; // pakai https agar tidak diblokir

    // Buat konfigurasi atOptions di window
    window.atOptions = {
      key: 'a647892478cfe688a80178b308049a3e',
      format: 'iframe',
      height: 90,
      width: 728,
      params: {}
    };

    // Masukkan script iklan ke div
    innerDiv.appendChild(adScript);
  });
</script>
