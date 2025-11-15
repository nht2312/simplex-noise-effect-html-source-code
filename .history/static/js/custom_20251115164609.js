window.addEventListener("load", function () {
    var wechatBtn = document.querySelector(".wechat-btn");
    var wechatModal = document.getElementById("wechat-modal");
    var wechatContent = document.querySelector(".wechat-modal-content");

    if (!wechatBtn || !wechatModal) {
        return;
    }

    wechatBtn.addEventListener("click", function (e) {
        e.preventDefault();
        wechatModal.classList.add("active");
    });

    wechatModal.addEventListener("click", function () {
        wechatModal.classList.remove("active");
    });

    if (wechatContent) {
        wechatContent.addEventListener("click", function (e) {
            e.stopPropagation();
        });
    }
});