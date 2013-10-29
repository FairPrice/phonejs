KitchenSink.Categories = function (params) {
    id = undefined;
    if (params.id!=undefined) {
        id = params.id;
    }
    var viewModel = {
        dataSource: DevExpress.data.createDataSource({
            load: function (loadOptions) {
                if (loadOptions.refresh) {
                    var deferred = new $.Deferred();
                    $.getJSON('http://m.chestnayacena.ru/categories/list', { id: id }, function(result) {
                        var response = [];
                        if (result.data.length>0) {
                            for (i in result.data) {
                                response[i] = {
                                    name: result.data[i].name,
                                    id: result.data[i].id
                                }
                            }
                        }
                        deferred.resolve(response);
                    })
                    return deferred;
                }
            }
        })
    };
    return viewModel;
};