import $ from 'jquery';
// import '../../../../node_modules/unitegallery/dist/js/unitegallery';
// import '../../../../node_modules/unitegallery/dist/css/unite-gallery.css';
// import '../../../../node_modules/unitegallery/dist/themes/default/ug-theme-default';
// import '../../../../node_modules/unitegallery/dist/themes/default/ug-theme-default.css';
// import '../../../../node_modules/unitegallery/dist/themes/tilesgrid/ug-theme-tilesgrid';

/* @ngInject */
function PortfolioController($document, $timeout) {
    $document.ready(() => {
        $timeout(() => {
            $('#gallery').unitegallery({
                gallery_theme: 'tilesgrid',
                tile_enable_icons: false,
                tile_width: 114,
                tile_height: 100,
                tile_enable_border: false,
                grid_num_rows: 10000,
                grid_space_between_cols: 10,
            });
        });
    });
}

module.exports = PortfolioController;
