


$(function(){
    //
    $(".head").load("测试页面-head.html")
    $(".body").load("测试页面.html")
    //切换
    $(".menu-item").click(function() {

        $(".body").load($(this).data("page"))
        $(".head").load($(this).data("page1"))

    })


})




$(function () {
    $(".div1").click(function () {
        $(".div1li").toggle(800);
    })
})
$(function () {
    $(".h41").click(function () {
        $(".h5wai1").toggle(800);
    })
})
$(function () {
    $(".h42").click(function () {
        $(".h5wai2").toggle(800);
    })
})
$(function () {
    $(".h43").click(function () {
        $(".h5wai3").toggle(800);
    })
})

$(function () {
    $(".h44").click(function () {
        $(".h5wai4").toggle(800);
    })
})