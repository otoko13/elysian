import $ from 'jquery';

/* @ngInject */
function FixAndShrinkDirective() {
    return {
        scope: {
            top: '=',
        },
        restrict: 'A',
        link: (scope, element) => {
            $(window).scroll(() => {
                if ($(document).scrollTop() > scope.top) {
                    element.addClass('shrunk');
                } else {
                    element.removeClass('shrunk');
                }
            });
        },
    };
}

module.exports = FixAndShrinkDirective;
