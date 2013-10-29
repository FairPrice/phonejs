KitchenSink.Lists = function(params) { 
    var lists = [
        {
            items: KitchenSink.db.products,
            grouped: ko.observable(false),
            customTemplate: ko.observable(false),
            showSearchField: ko.observable(false)
        },
        {
            items: KitchenSink.db.productsGrouped,
            grouped: ko.observable(true),
            customTemplate: ko.observable(false),
            showSearchField: ko.observable(false)
        },
        {
            items: ko.observable(KitchenSink.db.productsCustom),
            grouped: ko.observable(false),
            customTemplate: ko.observable(true),
            showSearchField: ko.observable(true),
            searchQuery: ko.observable().extend({ throttle: 500 })
        }
    ];

    var viewModel = {
        tabs: [
            { text: "Simple" },
            { text: "Grouped" },
            { text: "Custom" }
        ],
        selectedTab: ko.observable(0),
        tabContent: ko.observable()
    };

    lists[2].searchQuery.subscribe(function(value) {
        var result = $.grep(KitchenSink.db.productsCustom, function(product, index) {
            var regExp = new RegExp(value, "i");
            return !!product.Name.match(regExp);
        });
        lists[2].items(result);
    });
    ko.computed(function() {
        viewModel.tabContent(lists[viewModel.selectedTab()]);
    });
    
    return viewModel;
};