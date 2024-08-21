import type { Schema, Attribute } from '@strapi/strapi';

export interface ContextDynamic extends Schema.Component {
  collectionName: 'components_context_dynamics';
  info: {
    displayName: 'Dynamic';
    icon: 'repeat';
    description: '';
  };
  attributes: {
    words: Attribute.String;
    language: Attribute.String;
    level: Attribute.String;
    tenses: Attribute.String;
    theme: Attribute.String;
    native: Attribute.String;
    study: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'context.dynamic': ContextDynamic;
    }
  }
}
