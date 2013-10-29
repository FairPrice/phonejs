KitchenSink.Form = function(params) {
    var viewModel = {
        autocomplete: {
            text: ko.observable(""),
            cities: [
                "New York","Los Angeles","Chicago","Houston","Philadelphia","Phoenix","San Antonio",
                "San Diego","Dallas","San Jose","Jacksonville","Indianapolis","Austin","San Francisco",
                "Columbus","Fort Worth","Charlotte","Detroit","El Paso","Memphis","Boston","Seattle",
                "Denver","Baltimore","Washington","Nashville","Louisville","Milwaukee","Portland","Oklahoma"
            ]
        },
        "switch": {
            value: ko.observable(true)
        },
        slider: {
            value: ko.observable(5)
        },
        rangeSlider: {
            minValue: ko.observable(3),
            maxValue: ko.observable(7),
        },
        lookup: {
            data: ["red", "green", "blue", "yellow"],
            value: ko.observable(null)
        },
        checkbox: {
            checked: ko.observable(false)
        }
    };

    return viewModel;
};