KitchenSink.Maps = function(params) {
    var viewModel = {
        tabs: [
            { text: "Bing map" },
            { text: "Google map" },
        ],
        selectedTab: ko.observable(0),
        options: {
            provider: ko.observable(),
            mapType: ko.observable(),
            location: "40.749825, -73.987963",
            width: "100%",
            height: "100%",
            zoom: 13,
            markers: [
              { label: "A", location: [40.737102, -73.990318] },
              { label: "B", location: [40.749825, -73.987963] },
              { label: "С", location: [40.755823, -73.986397] }
            ],
            routes: [{
                weight: 5,
                color: "blue",
                locations: [
                  [40.737102, -73.990318],
                  [40.749825, -73.987963],
                  [40.755823, -73.986397]
                ]
            }]
        }
    };
    var maps = [
        {
            provider: ko.observable("bing"),
            mapType: ko.observable("roadmap")
        },
        {
            provider: ko.observable("google"),
            mapType: ko.observable("satellite")
        }
    ];
    ko.computed(function() {
        viewModel.options.provider(maps[viewModel.selectedTab()].provider());
        viewModel.options.mapType(maps[viewModel.selectedTab()].mapType());
    });

    return viewModel;
};