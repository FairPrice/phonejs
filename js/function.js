/**
 * Возвращает время по гринвичу
 * @return {Number}
 */
function time()
{
    return Math.floor(new Date().getTime() / 1000);
}

function load_ajax( selector )
{
    $(selector).html('<img src="/images/ajax-loader.gif" />');
}

/**
 * Транслит
 * @type {*}
 */
String.prototype.translit = (function(){
    var L = {
            'А':'A','а':'a','Б':'B','б':'b','В':'V','в':'v','Г':'G','г':'g',
            'Д':'D','д':'d','Е':'E','е':'e','Ё':'Yo','ё':'yo','Ж':'Zh','ж':'zh',
            'З':'Z','з':'z','И':'I','и':'i','Й':'Y','й':'y','К':'K','к':'k',
            'Л':'L','л':'l','М':'M','м':'m','Н':'N','н':'n','О':'O','о':'o',
            'П':'P','п':'p','Р':'R','р':'r','С':'S','с':'s','Т':'T','т':'t',
            'У':'U','у':'u','Ф':'F','ф':'f','Х':'Kh','х':'kh','Ц':'Ts','ц':'ts',
            'Ч':'Ch','ч':'ch','Ш':'Sh','ш':'sh','Щ':'Sch','щ':'sch','Ъ':'"','ъ':'"',
            'Ы':'Y','ы':'y','Ь':"'",'ь':"'",'Э':'E','э':'e','Ю':'Yu','ю':'yu',
            'Я':'Ya','я':'ya'
        },
        r = '',
        k;
    for (k in L) r += k;
    r = new RegExp('[' + r + ']', 'g');
    k = function(a){
        return a in L ? L[a] : '';
    };
    return function(){
        return this.replace(r, k);
    };
})();

/**
 * Переключаетль checkbox
 * @param id1 - первый checkbox
 * @param id2 - второй checkbox
 */
function checked_no_check(id1, id2)
{
    $(id1).live('click', function(){
        if($(this).is(":checked")==false) {
            $(id2).attr('checked', true);
        } else {
            $(id2).attr('checked', false);
        }
    });

    $(id2).live('click', function(){
        if($(this).is(":checked")==false) {
            $(id1).attr('checked', true);
        } else {
            $(id1).attr('checked', false);
        }
    });

}
function isValidURL(url) {
    return /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&amp;?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/.test(url);
}

function number_format( number, decimals, dec_point, thousands_sep ) {	// Format a number with grouped thousands
    //
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +	 bugfix by: Michael White (http://crestidg.com)

    var i, j, kw, kd, km;

    // input sanitation & defaults
    if( isNaN(decimals = Math.abs(decimals)) ){
        decimals = 2;
    }
    if( dec_point == undefined ){
        dec_point = ".";
    }
    if( thousands_sep == undefined ){
        thousands_sep = " ";
    }

    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

    if( (j = i.length) > 3 ){
        j = j % 3;
    } else{
        j = 0;
    }

    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


    return km + kw + kd;
}

function strip_tags(html){

    //PROCESS STRING
    if(arguments.length < 3) {
        html=html.replace(/<\/?(?!\!)[^>]*>/gi, '');
    } else {
        var allowed = arguments[1];
        var specified = eval("["+arguments[2]+"]");
        if(allowed){
            var regex='</?(?!(' + specified.join('|') + '))\b[^>]*>';
            html=html.replace(new RegExp(regex, 'gi'), '');
        } else{
            var regex='</?(' + specified.join('|') + ')\b[^>]*>';
            html=html.replace(new RegExp(regex, 'gi'), '');
        }
    }

    //CHANGE NAME TO CLEAN JUST BECAUSE
    var clean_string = html;

    //RETURN THE CLEAN STRING
    return clean_string;
}
function str_replace (search, replace, subject, count) {
    var i = 0,
        j = 0,
        temp = '',
        repl = '',
        sl = 0,
        fl = 0,
        f = [].concat(search),
        r = [].concat(replace),
        s = subject,
        ra = Object.prototype.toString.call(r) === '[object Array]',
        sa = Object.prototype.toString.call(s) === '[object Array]';
    s = [].concat(s);
    if (count) {
        this.window[count] = 0;
    }

    for (i = 0, sl = s.length; i < sl; i++) {
        if (s[i] === '') {
            continue;
        }
        for (j = 0, fl = f.length; j < fl; j++) {
            temp = s[i] + '';
            repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
            s[i] = (temp).split(f[j]).join(repl);
            if (count && s[i] !== temp) {
                this.window[count] += (temp.length - s[i].length) / f[j].length;
            }
        }
    }
    return sa ? s : s[0];
}

function implode( glue, pieces ) {	// Join array elements with a string
    //
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: _argos

    return ( ( pieces instanceof Array ) ? pieces.join ( glue ) : pieces );
}

function trim( str, charlist ) {	// Strip whitespace (or other characters) from the beginning and end of a string
    //
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: mdsjack (http://www.mdsjack.bo.it)
    // +   improved by: Alexander Ermolaev (http://snippets.dzone.com/user/AlexanderErmolaev)
    // +	  input by: Erkekjetter
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)

    charlist = !charlist ? ' \s\xA0' : charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
    var re = new RegExp('^[' + charlist + ']+|[' + charlist + ']+$', 'g');
    return str.replace(re, '');
}
function in_array(needle, haystack, strict) {	// Checks if a value exists in an array
    //
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)

    var found = false, key, strict = !!strict;

    for (key in haystack) {
        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
            found = true;
            break;
        }
    }

    return found;
}
function number_format( number, decimals, dec_point, thousands_sep ) {	// Format a number with grouped thousands
    //
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +	 bugfix by: Michael White (http://crestidg.com)

    var i, j, kw, kd, km;

    // input sanitation & defaults
    if( isNaN(decimals = Math.abs(decimals)) ){
        decimals = 2;
    }
    if( dec_point == undefined ){
        dec_point = ",";
    }
    if( thousands_sep == undefined ){
        thousands_sep = ".";
    }

    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

    if( (j = i.length) > 3 ){
        j = j % 3;
    } else{
        j = 0;
    }

    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


    return km + kw + kd;
}
isAccorion = 0;
function updateShoppingList() {
    $.getJSON("/shoppingList/listJson", function(e) {
        if (e.items.length>0) {
            console.log(getShoppingListId());
            var indexShoppingList = e.items.length+1;
            var html = '';
            for (i in e.items) {
                console.log('- ' + e.items[i].id);
                if (getShoppingListId()!==undefined && getShoppingListId()==e.items[i].id) {
                    indexShoppingList = i;
                }
                html += '<div data-shopping-list-id="' + e.items[i].id + '" class="shopping_list_header" >' +
                    '<span class="title">' + e.items[i].name + '</span><em id="count" data-shopping-list-id="' + e.items[i].id + '">' + e.items[i].products.length + '</em>' +
                    '</div>';
                html += '<div class="shopping_list_items rtl-shoppng-list-panel">';
                html += '<ul class="shopping_list">';
                if (e.items[i].products.length>0) {
                    for (j in e.items[i].products) {
                        html += '<li>' +
                            '<a href="' + e.items[i].products[j].link + '">' + e.items[i].products[j].name + '</a>' +
                            '<span data-shopping-list-id="' + e.items[i].id + '" data-id="' + e.items[i].products[j].id + '" class="close"></span>' +
                            '<form action="#">' +
                            '   <span class="amount_down"></span>' +
                            '   <div class="amount_value_wrap"><input class="amount_value" type="text" value="' + e.items[i].products[j].count + '"><span>шт.</span></div>' +
                            '   <span class="amount_up"></span>' +
                            '   <input data-id="' + e.items[i].products[j].id + '" type="submit" value="">' +
                            '</form>';
                        if (e.items[i].products[j].price!==undefined) {
                            html += '<div class="shop">' +
                                '   <span class="price">' + e.items[i].products[j].price.price +' руб.</span><br>' +
                                '   <span class="amount">' + e.items[i].products[j].price.date +'</span>' +
                                '   <span class="shop_name">' + e.items[i].products[j].price.seller_name +'</span>' +
                                '</div>';
                        }
                        html += '</li>';
                    }
                } else {
                    html += '<li>Нет товаров</li>';
                }
                html += '</ul>';
                html += '</div>';
            }
            $("#shopping_list_item").remove();
            $("#shopping-list-ajax").html("<div id='shopping_list_item'>" + html + "</div>");
            $("#shopping_list_item").accordion({ header: ".shopping_list_header", active: parseInt(indexShoppingList) });
        } else {
            $("#shopping_list_item").html('<div>У вас нет списоков.</div>');
        }
    });
}
var isShowPanel = 0;
function showPanelShoppingList() {
    var self = $("#right_slide_panel_switch");
    if(self.hasClass("disclosed") != true) {
        self.toggleClass("disclosed");
        $("#right_slide_panel").animate({right:"0"},500);
        updateShoppingList();
        isShowPanel = 1;
    }
    else {
        self.toggleClass("disclosed");
        $("#right_slide_panel").animate({right:"-268"},500);
        isShowPanel = 0;
    }
}
function getIsShoppingSelected() {
    if (user_is_guest=="1") {
        alert('Пожалуйста авторизируйтесь');
    } else {
        if (getShoppingListId()==null) {
            alert('Выберите список покупок.');
            showPanelShoppingList();
            return false;
        }
    }
    return true;
}
function getShoppingListId() {
    shoppingListId = $.cookies.get("shoppingListId");
    return shoppingListId;
}
function setShoppingListId(shoppingId) {
    shoppingListId = shoppingId;
    $.cookies.set("shoppingListId", shoppingId);
}
function setCountProductShoppingList(id, count) {
    $.getJSON('/shoppingProducts/setCount', { id: id, count: count });
}
function deleteProductShoppingList(productId) {
    var form = $("#shoppingList-delete-form");
    $.post(form.attr('action') + "?id=" + productId , form.serializeArray());
}