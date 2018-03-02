import templateUrl from './side_menu.html';
import css from './side_menu.less';

const SideMenuComponent = {
    templateUrl,
    bindings: {
        isOpen: '=',
        closeMenu: '&',
    },
    controllerAs: 'vm',
};

module.exports = SideMenuComponent;
