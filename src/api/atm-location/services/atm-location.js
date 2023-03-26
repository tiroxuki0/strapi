'use strict';

/**
 * atm-location service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::atm-location.atm-location');
