import $ from 'jquery';

/* @ngInject */
function FixAndShrinkDirective() {
    return {
        scope: {
            top: '=',
            shrunkCallback: '&',
            unshrunkCallback: '&',
        },
        restrict: 'A',
        link: (scope, element) => {
            $(window).scroll(() => {
                if ($(document).scrollTop() > scope.top) {
                    element.addClass('shrunk');
                    scope.$apply(scope.shrunkCallback);
                } else {
                    element.removeClass('shrunk');
                    scope.$apply(scope.unshrunkCallback);
                }
            });
        },
    };
}

module.exports = FixAndShrinkDirective;
