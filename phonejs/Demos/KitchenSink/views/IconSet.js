KitchenSink.IconSet = function (params) {
    var iconNames = [
        "Airplane", "ArrowDown", "ArrowLeft",
        "ArrowRight", "ArrowUp", "Bookmark",
        "Box", "Car", "Card",
        "Cart", "Chart", "Clock",
        "Close", "Comment", "Doc",
        "Download", "Edit", "Email",
        "Event", "Favorites", "Find",
        "Folder", "Food", "Gift",
        "Globe", "Group", "Help",
        "Home", "Image", "Info",
        "Key", "Like", "Map",
        "Menu", "Money", "Music",
        "Percent", "Photo", "Preferences",
        "Product", "Refresh", "Remove",
        "Runner", "Save", "Tags",
        "Tel", "Tips", "Todo",
        "Toolbox", "User"
    ];

    var icons = $.map(iconNames, function(name) {
        return {
            name: name,
            cssClass: "dx-icon-" + name.toLowerCase()
        };
    });

    return {
       icons: icons 
    };
};