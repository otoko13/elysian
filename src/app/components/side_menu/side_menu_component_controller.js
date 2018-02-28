import _ from 'lodash';

class SideMenuComponentController {

    /* @ngInject */
    constructor() {
        if (_.isUndefined(this.isOpen)) {
            this.isOpen = false;
        }
    }
}

module.exports = SideMenuComponentController;
