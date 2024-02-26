var wms_layers = [];

var format_dep_france_0 = new ol.format.GeoJSON();
var features_dep_france_0 = format_dep_france_0.readFeatures(json_dep_france_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dep_france_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dep_france_0.addFeatures(features_dep_france_0);
var lyr_dep_france_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dep_france_0, 
                style: style_dep_france_0,
                interactive: true,
                title: '<img src="styles/legend/dep_france_0.png" /> dep_france'
            });
var format_Lgende_1 = new ol.format.GeoJSON();
var features_Lgende_1 = format_Lgende_1.readFeatures(json_Lgende_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgende_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgende_1.addFeatures(features_Lgende_1);
var lyr_Lgende_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lgende_1, 
                style: style_Lgende_1,
                interactive: true,
    title: 'Légende<br />\
    <img src="styles/legend/Lgende_1_0.png" /> CFA<br />\
    <img src="styles/legend/Lgende_1_1.png" /> CFPPA<br />\
    <img src="styles/legend/Lgende_1_2.png" /> ECOLE<br />\
    <img src="styles/legend/Lgende_1_3.png" /> IAHP<br />\
    <img src="styles/legend/Lgende_1_4.png" /> INSTITUT<br />\
    <img src="styles/legend/Lgende_1_5.png" /> LAP<br />\
    <img src="styles/legend/Lgende_1_6.png" /> LEAP<br />\
    <img src="styles/legend/Lgende_1_7.png" /> LEGTA<br />\
    <img src="styles/legend/Lgende_1_8.png" /> LEGTPA<br />\
    <img src="styles/legend/Lgende_1_9.png" /> LP<br />\
    <img src="styles/legend/Lgende_1_10.png" /> LYCEE<br />\
    <img src="styles/legend/Lgende_1_11.png" /> MFR<br />\
    <img src="styles/legend/Lgende_1_12.png" /> MFREO<br />\
    <img src="styles/legend/Lgende_1_13.png" /> SITE<br />'
        });

lyr_dep_france_0.setVisible(true);lyr_Lgende_1.setVisible(true);
var layersList = [lyr_dep_france_0,lyr_Lgende_1];
lyr_dep_france_0.set('fieldAliases', {'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', });
lyr_Lgende_1.set('fieldAliases', {'uai': 'uai', 'nom': 'nom', 'region': 'region', 'departemen': 'departemen', 'adresse': 'adresse', 'adresse1': 'adresse1', 'adresse3': 'adresse3', 'code_posta': 'code_posta', 'commune': 'commune', 'telephone': 'telephone', 'email': 'email', 'site_web': 'site_web', 'uai_rne': 'uai_rne', 'code_dger': 'code_dger', 'TYPE': 'TYPE', });
lyr_dep_france_0.set('fieldImages', {'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', });
lyr_Lgende_1.set('fieldImages', {'uai': 'TextEdit', 'nom': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'adresse': 'TextEdit', 'adresse1': 'TextEdit', 'adresse3': 'TextEdit', 'code_posta': 'TextEdit', 'commune': 'TextEdit', 'telephone': 'TextEdit', 'email': 'TextEdit', 'site_web': 'TextEdit', 'uai_rne': 'TextEdit', 'code_dger': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_dep_france_0.set('fieldLabels', {'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', });
lyr_Lgende_1.set('fieldLabels', {'uai': 'no label', 'nom': 'no label', 'region': 'no label', 'departemen': 'no label', 'adresse': 'no label', 'adresse1': 'no label', 'adresse3': 'no label', 'code_posta': 'no label', 'commune': 'no label', 'telephone': 'no label', 'email': 'no label', 'site_web': 'no label', 'uai_rne': 'no label', 'code_dger': 'no label', 'TYPE': 'no label', });
lyr_Lgende_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});