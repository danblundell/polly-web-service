$('#pollybtn').click(function(e){
    e.preventDefault();
    var data = 'the button has been clicked';
    console.log(data);
     $.ajax({
        url: "/",
        method: "POST",
        data: 'keyname='+ data,
        header: {'origin': '*'},
        success: function(res){
            console.log(res.file);
            var a = $('#audio').attr('src',res.file);
            a[0].load();
            a[0].play();
        }
    });
})