;(function ($) {
    $(document).ready(function(){
        $('#pws-read-btn').click(function(e){
            e.preventDefault();
            var readtext = document.getElementById('pws-read-text');
             $.ajax({
                url: "http://localhost:3002?keyname="+ readtext.innerText,
                method: "GET",
                success: function(res){
                    console.log(res.file);
                    var a = $('#pws-read-audio').attr('src','http://localhost:3002' + res.file);
                    a[0].load();
                    a[0].play();
                }
            });
        })
    });

})(jQuery);