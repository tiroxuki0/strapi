'use strict';

/**
 * blog-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog-list.blog-list', ({strapi}) => ({
  async findOne(ctx) {
    const {id} = ctx.params;

    const entity = await strapi.entityService.findOne('api::blog-list.blog-list', id, {
        populate: { createdBy: true },
      });
    const entityAll = await strapi.entityService.findMany('api::blog-list.blog-list', {
        fields: ['avgRating'],
        filters: { createdBy: entity.createdBy }
    });
    const total = await strapi.entityService.count('api::blog-list.blog-list', {
      // fields: ['rating'],
      filters: { createdBy: entity.createdBy }
  });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    sanitizedEntity.createdBy = {
      id: entity.createdBy.id,
      email: entity.createdBy.email,
      firstname: entity.createdBy.firstname,
      lastname: entity.createdBy.lastname,
    };
    sanitizedEntity.ratings = entityAll
    sanitizedEntity.total_blogs = total
    return this.transformResponse(sanitizedEntity);
  }
}));
