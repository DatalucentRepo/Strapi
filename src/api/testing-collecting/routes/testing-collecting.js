'use strict';

/**
 * testing-collecting router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::testing-collecting.testing-collecting');
