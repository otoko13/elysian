import $ from 'jquery';

/* @ngInject */
function ClickOutsideDirective($document) {
    return {
        scope: {
            clickOutside: '&',
            exceptSelector: '=',
        },
        restrict: 'A',
        link: (scope, element) => {
            // select not element - otherwise the clickOutside is called on opening the menu too
            $document.on('click', (event) => {
                if (!$.contains($(scope.exceptSelector).get(0), event.target)) {
                    scope.clickOutside();
                    scope.$apply();
                }
            });

            element.on('click', (event) => {
                event.stopPropagation();
            });
        },
    };
}

module.exports = ClickOutsideDirective;
