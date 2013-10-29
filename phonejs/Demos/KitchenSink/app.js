window.KitchenSink = window.KitchenSink || {};
$(function() {
    KitchenSink.app = new DevExpress.framework.html.HtmlApplication({
        namespace: KitchenSink,
        
        defaultLayout: KitchenSink.config.defaultLayout,
        navigation: KitchenSink.config.navigation
    });

    // NOTE: turn on ios7 theme
    var devices = DevExpress.devices;
    if(devices.current().platform === "ios" && devices.iosVersion() && devices.iosVersion()[0] === 7) {
        $(".dx-viewport")
            .removeClass("dx-theme-ios")
            .addClass("dx-theme-ios7");
    }

    KitchenSink.app.router.register(":view/:id", { view: "Home", id: undefined });

    function showMenu() {
        KitchenSink.app.viewShown.remove(showMenu);

        if (document.location.hash !== "#Home")
            return;

        setTimeout(function() {
            $(".nav-button").click();
        }, 1000);
    }
   
    KitchenSink.app.viewShown.add(showMenu);
});
