var controller = require('./ymInputMoneyPercent.controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/app.components/components.generics/ymInputMoneyPercent/ymInputMoneyPercent.html',
  controllerAs: 'ctrl',
  bindings: {
      model: '=',
      blur: '=?',
      helper: '=?',
      componentName: '@',
      componentId: '@',
      label: '@',
      percentage: '@',
      money: '@',
      required: '=',
      disabled: '@',
      placeholder: '@',
      currency: '@?'
  },
  controller: controller
};
