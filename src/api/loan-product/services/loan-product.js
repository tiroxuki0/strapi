'use strict';

/**
 * loan-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::loan-product.loan-product');
