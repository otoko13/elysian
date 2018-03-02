import templateUrl from './side_menu.html';
import './side_menu.less';

const SideMenuComponent = {
    templateUrl,
    bindings: {
        isOpen: '=',
        closeMenu: '&',
    },
    controllerAs: 'vm',
};

module.exports = SideMenuComponent;
