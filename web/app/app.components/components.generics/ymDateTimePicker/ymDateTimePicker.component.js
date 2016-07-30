var controller = require('./ymDateTimePicker.controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/app.components/components.generics/ymDateTimePicker/ymDateTimePicker.html',
  controllerAs: 'ctrl',
  bindings: {
    model: '=',
    options: '=?',
    onlyDate: '=?', // boolean: show only de calendar for date, not time.
    datepickerOptions: '=?', // UIB datepicker options
    label: '@',
    componetName: '@',
    required: '@',
    onUpdate: '&'
  },
  controller: controller
};
