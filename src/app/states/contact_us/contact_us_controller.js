/* @ngInject */
function ContactUsController($scope, $http) {
    $scope.comment = '';
    $scope.emailAddress = '';
    $scope.submitted = false;
    $scope.loading = false;

    $scope.submitComment = function () {
        $scope.loading = true;
        $scope.submitted = true;
        $http.post('app/server/comments.php', { msg: $scope.comment, from: $scope.emailAddress }).then(() => {
            $scope.success = true;
            $scope.resultMessage = 'Your message was submitted successfully. Thank you for your feedback.';
        }).catch(() => {
            $scope.success = false;
            $scope.resultMessage = 'We\'re sorry, there was a problem submitting your comment. Please try again later.';
        }).finally(() => {
            $scope.loading = false;
        });
    };
}

module.exports = ContactUsController;
