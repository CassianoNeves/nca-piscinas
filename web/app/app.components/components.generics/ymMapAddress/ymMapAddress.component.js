var controller = require('./ymMapAddress.controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/app.components/components.generics/ymMapAddress/ymMapAddress.html',
  controllerAs: 'ctrl',
  bindings: {
    address: '=',
    required: '@',
    componentName: '@'
  },
  controller: controller
};
