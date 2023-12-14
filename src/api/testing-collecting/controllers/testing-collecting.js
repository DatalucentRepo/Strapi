'use strict';

/**
 * testing-collecting controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::testing-collecting.testing-collecting');
