KitchenSink.Search = function (params) {
    var skip = 0;
    var PAGE_SIZE = 10;
    var q = '';
    var viewModel = {
        search: function(e) {
            e.actionValue = trim(e.actionValue);
            if (e.actionValue.length>0) {
                q = e.actionValue;
                viewModel.dataSource.reload();
            } else {
                $("#toastContainer").dxToast('instance').show();
            }
        },
        dataSource: DevExpress.data.createDataSource({
            load: function (loadOptions) {
                if (loadOptions.refresh) {
                    if (q!='') {
                        var deferred = new $.Deferred();
                        $.getJSON('http://m.chestnayacena.ru/searchProduct/index', { q: q }, function(result) {
                            var response = [];
                            if (result.data.items.length>0) {
                                for (i in result.data.items) {
                                    var price_seller_name = '';
                                    var price_date = '';
                                    var price = '';
                                    if (result.data.items[i].price!=undefined) {
                                        price_seller_name = result.data.items[i].price.point_sales.seller_name;
                                        price_date = result.data.items[i].price.date;
                                        price = result.data.items[i].price.price + ' руб.';
                                    }
                                    response[i] = {
                                        id: result.data.items[i].id,
                                        name: result.data.items[i].name,
                                        url_image: result.data.items[i].url_image,
                                        weight_unit_name: result.data.items[i].weight_unit_name,
                                        barcode: result.data.items[i].barcode,
                                        price_seller_name: price_seller_name,
                                        price_date: price_date,
                                        price: price
                                    };
                                    console.log(price_seller_name);
                                }
                            }
                            //console.log(result.data.size());
                            deferred.resolve(response);
                        })
                        return deferred;
                    }
                }
            }
        })
    };
    return viewModel;
};