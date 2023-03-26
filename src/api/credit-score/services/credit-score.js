'use strict';

/**
 * credit-score service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::credit-score.credit-score');
