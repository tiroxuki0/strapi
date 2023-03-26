"use strict";

/**
 * author-list controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::author-list.author-list",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.entityService.findOne(
        "api::author-list.author-list",
        id,
        {}
      );
      const entityBlogs = await strapi.entityService.findMany(
        "api::blog-list.blog-list",
        {
          populate: { author_list: true },
          fields: ["avgRating"],
          filters: {
            avgRating: { $gt: 0 },
            author_list: {
              id: entity.id,
            },
          },
        }
      );
      const countBlog = await strapi.entityService.count(
        "api::blog-list.blog-list",
        {
          populate: { author_list: true },
          filters: { author_list: entity },
        }
      );
      await strapi.entityService.update("api::author-list.author-list", id, {
        data: {
          totalBlog: countBlog,
        },
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      sanitizedEntity.ratings = entityBlogs;
      return this.transformResponse(sanitizedEntity);
    },
  })
);
