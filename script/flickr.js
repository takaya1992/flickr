// DOMを操作する場合はページの読み込みを待つ
window.onload = function() {
    $("#searchButton").on("click", function() {
        var searchWord = $("#keyword").val();
        var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&jsoncallback=drawImg&tags='+ searchWord;
        var script = $('<script>').attr({src: url});
        $('head').append(script);
    });
}

function drawImg(result) {
    result.items.forEach(function(item) {
        $("#resultArea").append($("<img>").attr({src: item.media.m}));
    });
}
