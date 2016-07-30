var loaderService = require('./loader.service');
var toastrService = require('./toastr.service');
var bootBoxService = require('./bootbox.service');
var dateService = require('./date.service');
var administratorService = require('./administrator.service');
var sportService = require('./sport.service');
var validationService = require('./validation.service');
var eventService = require('./event.service');
var addressService = require('./address.service');
var modalService = require('./modal.service');
var partnerService = require('./partner.service');
var blobService = require('./blob.service');
var tipsService = require('./tips.service');
var advertisementService = require('./advertisement.service');
var configSystemService = require('./configSystem.service');
var pushNotificationService = require('./pushNotification.service');
var backOfficeUserService = require('./backOfficeUser.service');
var dashboardService = require('./dashboard.service');

module.exports =  angular.module('you-movin.services', [
    loaderService,
    toastrService,
    bootBoxService,
    dateService,
    administratorService,
    sportService,
    validationService,
    eventService,
    addressService,
    modalService,
    partnerService,
    blobService,
    tipsService,
    advertisementService,
    configSystemService,
    pushNotificationService,
    backOfficeUserService,
    dashboardService
  ])
  .name;
