import { type SchemaTypeDefinition } from 'sanity'

import { carType } from './car'
import { categoryType } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [carType, categoryType],
}
