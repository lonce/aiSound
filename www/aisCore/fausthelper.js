var parse_faust_ui = function (ui)
{
    var plist=[];
    for (var i = 0; i < ui.length; i++) {
        parse_item(ui[i], plist);
    }
    return(plist);
}


var parse_item = function (item, plist)
{
    if (item.type === "vgroup"
        || item.type === "hgroup"
        || item.type === "tgroup") {
        parse_items(item.items, plist);
    }  else if (item.type === "vslider"
        || item.type === "hslider"
        || item.type === "button"
        || item.type === "checkbox"
        || item.type === "nentry") {
        // Keep inputs adresses
        plist.push( {"address" : item.address,
                    "label" : item.label,
                    "min" : parseFloat(item.min) || 0,
                    "max" : parseFloat(item.max) || 1,
                    "value": parseFloat(item.init) || 0});
    }
}

export default parse_faust_ui;
