var wms_layers = [];


        var lyr_HintergrundKarte_0 = new ol.layer.Tile({
            'title': 'Hintergrund Karte',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Einwohner_1 = new ol.format.GeoJSON();
var features_Einwohner_1 = format_Einwohner_1.readFeatures(json_Einwohner_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Einwohner_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Einwohner_1.addFeatures(features_Einwohner_1);
var lyr_Einwohner_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Einwohner_1, 
                style: style_Einwohner_1,
                popuplayertitle: 'Einwohner',
                interactive: false,
    title: 'Einwohner<br />\
    <img src="styles/legend/Einwohner_1_0.png" /> 3 - 30<br />\
    <img src="styles/legend/Einwohner_1_1.png" /> 30 - 76<br />\
    <img src="styles/legend/Einwohner_1_2.png" /> 76 - 149<br />\
    <img src="styles/legend/Einwohner_1_3.png" /> 149 - 414<br />\
    <img src="styles/legend/Einwohner_1_4.png" /> 414 - 820<br />' });
var format_Stadtteile_2 = new ol.format.GeoJSON();
var features_Stadtteile_2 = format_Stadtteile_2.readFeatures(json_Stadtteile_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stadtteile_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stadtteile_2.addFeatures(features_Stadtteile_2);
var lyr_Stadtteile_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stadtteile_2, 
                style: style_Stadtteile_2,
                popuplayertitle: 'Stadtteile',
                interactive: false,
                title: '<img src="styles/legend/Stadtteile_2.png" /> Stadtteile'
            });
var format_Hausrzte_3 = new ol.format.GeoJSON();
var features_Hausrzte_3 = format_Hausrzte_3.readFeatures(json_Hausrzte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hausrzte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hausrzte_3.addFeatures(features_Hausrzte_3);
var lyr_Hausrzte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hausrzte_3, 
                style: style_Hausrzte_3,
                popuplayertitle: 'Hausärzte',
                interactive: true,
                title: '<img src="styles/legend/Hausrzte_3.png" /> Hausärzte'
            });

lyr_HintergrundKarte_0.setVisible(true);lyr_Einwohner_1.setVisible(true);lyr_Stadtteile_2.setVisible(true);lyr_Hausrzte_3.setVisible(true);
var layersList = [lyr_HintergrundKarte_0,lyr_Einwohner_1,lyr_Stadtteile_2,lyr_Hausrzte_3];
lyr_Einwohner_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'id': 'id', 'GITTER_ID_100m': 'GITTER_ID_100m', 'ags': 'ags', 'Einwohner': 'Einwohner', 'AnteilAuslaender': 'AnteilAuslaender', 'Durchschnittsalter': 'Durchschnittsalter', 'Unter18': 'Unter18', 'a18bis29': 'a18bis29', 'a30bis49': 'a30bis49', 'a50bis64': 'a50bis64', 'a65undaelter': 'a65undaelter', 'AnteilUnter18': 'AnteilUnter18', 'AnteilUeber65': 'AnteilUeber65', 'DurchschnHHGroesse': 'DurchschnHHGroesse', 'durchschnMieteQM': 'durchschnMieteQM', 'durchschnFlaechejeWohn': 'durchschnFlaechejeWohn', 'durchschnFlaechejeBew': 'durchschnFlaechejeBew', 'Eigentuemerquote': 'Eigentuemerquote', 'Leerstandsquote': 'Leerstandsquote', 'MALeerstQuote': 'MALeerstQuote', 'Insgesamt_Energietraeger': 'Insgesamt_Energietraeger', 'Gas': 'Gas', 'Heizoel': 'Heizoel', 'Holz_Holzpellets': 'Holz_Holzpellets', 'Biomasse_Biogas': 'Biomasse_Biogas', 'Solar_Geothermie_Waermepumpen': 'Solar_Geothermie_Waermepumpen', 'Strom': 'Strom', 'Kohle': 'Kohle', 'Fernwaerme': 'Fernwaerme', 'kein_Energietraeger': 'kein_Energietraeger', 'Insgesamt_Heizungsart': 'Insgesamt_Heizungsart', 'Fernheizung': 'Fernheizung', 'Etagenheizung': 'Etagenheizung', 'Blockheizung': 'Blockheizung', 'Zentralheizung': 'Zentralheizung', 'Einzel_Mehrraumoefen': 'Einzel_Mehrraumoefen', 'keine_Heizung': 'keine_Heizung', 'Insgesamt_Gebaeude': 'Insgesamt_Gebaeude', 'Vor1919': 'Vor1919', 'a1919bis1948': 'a1919bis1948', 'a1949bis1978': 'a1949bis1978', 'a1979bis1990': 'a1979bis1990', 'a1991bis2000': 'a1991bis2000', 'a2001bis2010': 'a2001bis2010', 'a2011bis2019': 'a2011bis2019', 'a2020undspaeter': 'a2020undspaeter', });
lyr_Stadtteile_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATIST_BE': 'STATIST_BE', 'NR_STATIST': 'NR_STATIST', 'NAME_STATI': 'NAME_STATI', 'STADTBEZIR': 'STADTBEZIR', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'Einwohner': 'Einwohner', 'X.1_count': 'X.1_count', 'X.1_sum': 'X.1_sum', 'EinwohnerP': 'EinwohnerP', });
lyr_Hausrzte_3.set('fieldAliases', {'X.1': 'X.1', 'Praxis': 'Praxis', 'LAT': 'LAT', 'LON': 'LON', 'Adresse': 'Adresse', 'DocName': 'DocName', 'Name': 'Name', });
lyr_Einwohner_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'id': 'TextEdit', 'GITTER_ID_100m': 'TextEdit', 'ags': 'TextEdit', 'Einwohner': 'Range', 'AnteilAuslaender': 'TextEdit', 'Durchschnittsalter': 'TextEdit', 'Unter18': 'Range', 'a18bis29': 'Range', 'a30bis49': 'Range', 'a50bis64': 'Range', 'a65undaelter': 'Range', 'AnteilUnter18': 'TextEdit', 'AnteilUeber65': 'TextEdit', 'DurchschnHHGroesse': 'TextEdit', 'durchschnMieteQM': 'TextEdit', 'durchschnFlaechejeWohn': 'TextEdit', 'durchschnFlaechejeBew': 'TextEdit', 'Eigentuemerquote': 'TextEdit', 'Leerstandsquote': 'TextEdit', 'MALeerstQuote': 'TextEdit', 'Insgesamt_Energietraeger': 'Range', 'Gas': 'Range', 'Heizoel': 'Range', 'Holz_Holzpellets': 'Range', 'Biomasse_Biogas': 'Range', 'Solar_Geothermie_Waermepumpen': 'Range', 'Strom': 'Range', 'Kohle': 'Range', 'Fernwaerme': 'Range', 'kein_Energietraeger': 'Range', 'Insgesamt_Heizungsart': 'Range', 'Fernheizung': 'Range', 'Etagenheizung': 'Range', 'Blockheizung': 'Range', 'Zentralheizung': 'Range', 'Einzel_Mehrraumoefen': 'Range', 'keine_Heizung': 'Range', 'Insgesamt_Gebaeude': 'Range', 'Vor1919': 'Range', 'a1919bis1948': 'Range', 'a1949bis1978': 'Range', 'a1979bis1990': 'Range', 'a1991bis2000': 'Range', 'a2001bis2010': 'Range', 'a2011bis2019': 'Range', 'a2020undspaeter': 'Range', });
lyr_Stadtteile_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'STATIST_BE': 'TextEdit', 'NR_STATIST': 'TextEdit', 'NAME_STATI': 'TextEdit', 'STADTBEZIR': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'Einwohner': 'TextEdit', 'X.1_count': 'TextEdit', 'X.1_sum': 'TextEdit', 'EinwohnerP': 'TextEdit', });
lyr_Hausrzte_3.set('fieldImages', {'X.1': 'Range', 'Praxis': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'Adresse': 'TextEdit', 'DocName': 'TextEdit', 'Name': 'TextEdit', });
lyr_Einwohner_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'id': 'no label', 'GITTER_ID_100m': 'no label', 'ags': 'no label', 'Einwohner': 'no label', 'AnteilAuslaender': 'no label', 'Durchschnittsalter': 'no label', 'Unter18': 'no label', 'a18bis29': 'no label', 'a30bis49': 'no label', 'a50bis64': 'no label', 'a65undaelter': 'no label', 'AnteilUnter18': 'no label', 'AnteilUeber65': 'no label', 'DurchschnHHGroesse': 'no label', 'durchschnMieteQM': 'no label', 'durchschnFlaechejeWohn': 'no label', 'durchschnFlaechejeBew': 'no label', 'Eigentuemerquote': 'no label', 'Leerstandsquote': 'no label', 'MALeerstQuote': 'no label', 'Insgesamt_Energietraeger': 'no label', 'Gas': 'no label', 'Heizoel': 'no label', 'Holz_Holzpellets': 'no label', 'Biomasse_Biogas': 'no label', 'Solar_Geothermie_Waermepumpen': 'no label', 'Strom': 'no label', 'Kohle': 'no label', 'Fernwaerme': 'no label', 'kein_Energietraeger': 'no label', 'Insgesamt_Heizungsart': 'no label', 'Fernheizung': 'no label', 'Etagenheizung': 'no label', 'Blockheizung': 'no label', 'Zentralheizung': 'no label', 'Einzel_Mehrraumoefen': 'no label', 'keine_Heizung': 'no label', 'Insgesamt_Gebaeude': 'no label', 'Vor1919': 'no label', 'a1919bis1948': 'no label', 'a1949bis1978': 'no label', 'a1979bis1990': 'no label', 'a1991bis2000': 'no label', 'a2001bis2010': 'no label', 'a2011bis2019': 'no label', 'a2020undspaeter': 'no label', });
lyr_Stadtteile_2.set('fieldLabels', {'OBJECTID': 'no label', 'STATIST_BE': 'no label', 'NR_STATIST': 'no label', 'NAME_STATI': 'no label', 'STADTBEZIR': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', 'Einwohner': 'no label', 'X.1_count': 'no label', 'X.1_sum': 'no label', 'EinwohnerP': 'no label', });
lyr_Hausrzte_3.set('fieldLabels', {'X.1': 'hidden field', 'Praxis': 'header label - visible with data', 'LAT': 'hidden field', 'LON': 'hidden field', 'Adresse': 'inline label - visible with data', 'DocName': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_Hausrzte_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});