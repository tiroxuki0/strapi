'use strict';

/**
 * tool-calculate-interest service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tool-calculate-interest.tool-calculate-interest');
