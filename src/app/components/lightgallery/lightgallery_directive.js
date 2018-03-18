/* @ngInject */
function LightgalleryDirective() {
    return {
        restrict: 'A',
        link: (scope, element) => {
            scope.$watch('$last', (newVal) => {
                if (newVal) {
                    // ng-repeat is completed
                    element.parent().lightGallery({
                        mode: 'lg-slide',
                        fullScreen: true,
                        download: false,
                        hash: false,
                        addClass: 'elysian-lg',
                    });
                }
            });
        },
    };
}

module.exports = LightgalleryDirective;
