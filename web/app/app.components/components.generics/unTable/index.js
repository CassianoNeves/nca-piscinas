var component = require('./unTableComponent');

var cellComponent = require('./unCell');
var actionsComponent = require('./unTableActions');

module.exports = angular
	.module('unTable', [
		cellComponent,
		actionsComponent
	])
	.component('unTable', component)
	.name;
