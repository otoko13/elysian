import $ from 'jquery';

/* @ngInject */
function ClickOutsideDirective() {
    return {
        scope: {
            clickOutside: '&',
        },
        restrict: 'A',
        link: (scope, element) => {
            // select not element - otherwise the clickOutside is called on opening the menu too
            $('html').click(() => {
                scope.clickOutside();
            });

            element.click((event) => {
                event.stopPropagation();
            });
        },
    };
}

module.exports = ClickOutsideDirective;
