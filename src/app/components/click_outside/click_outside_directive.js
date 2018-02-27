import $ from 'jquery';

/* @ngInject */
function ClickOutsideDirective() {
    return {
        scope: {
            clickOutside: '&',
        },
        restrict: 'A',
        link: (scope, element) => {
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
