class SideMenuComponentController {

    $onInit() {
        console.log(`INIT: ${this.options.isOpen}`);
    }

    $onChanges() {
        console.log(`CHANGES: ${this.options.isOpen}`);
    }

    $doCheck() {
        console.log(`CHECK: ${this.options.isOpen}`);
    }
}

module.exports = SideMenuComponentController;
