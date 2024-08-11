$(function() {
    function add(){
        $('.copied').addClass("bounce-effect");
    }
    function remove(){
        $('.copied').removeClass("bounce-effect");
    }
    $('button').on('click',function(){
        $('textarea').select();
        document.execCommand('copy');
        add();
        setTimeout(remove,800);
    })
});