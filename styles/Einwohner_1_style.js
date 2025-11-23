var size = 0;
var placement = 'point';

var style_Einwohner_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Einwohner");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 3.000000 && value <= 30.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(202,224,194,0.941)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 30.000000 && value <= 76.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(152,201,154,0.941)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 76.000000 && value <= 149.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(101,178,114,0.941)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 149.000000 && value <= 414.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(51,154,75,0.941)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 414.000000 && value <= 820.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,131,35,0.941)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
