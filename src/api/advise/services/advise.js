'use strict';

/**
 * advise service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::advise.advise');
