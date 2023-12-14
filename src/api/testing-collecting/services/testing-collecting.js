'use strict';

/**
 * testing-collecting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testing-collecting.testing-collecting');
