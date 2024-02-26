"use strict";

/**
 * `landing-page-populate` middleware
 */

const populate = {
  metadata: {
    populate: {
      metaUmage: {
        populate: "true",
        fields: {
          0: "name",
          1: "alternativeText",
          2: "url",
        },
      },
    },
  },
  blocks: {
    populate: {
      link: {
        populate: "true",
      },
      image: {
        fields: {
          0: "name",
          1: "alternativeText",
          2: "url",
        },
      },
      card: {
        populate: {
          image: {
            fields: {
              0: "name",
              1: "alternativeText",
              2: "url",
            },
          },
        },
      },
      plan: {
        populate: {
          0: "services",
          1: "link",
        },
      },
      form: {
        populate: {
          0: "input",
          1: "button",
        },
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In landing-page-populate middleware.");
    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
