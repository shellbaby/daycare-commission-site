/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  static: {
    home: typeof routes['static.home']
    prices: typeof routes['static.prices']
    form: typeof routes['static.form']
    tos: typeof routes['static.tos']
    gallery: typeof routes['static.gallery']
    contact: typeof routes['static.contact']
  }
}
