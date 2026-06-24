/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  drive: {
    fs: {
      serve: typeof routes['drive.fs.serve']
    }
  }
  static: {
    home: typeof routes['static.home']
    prices: typeof routes['static.prices']
    form: typeof routes['static.form']
    commissions: {
      confirm: typeof routes['static.commissions.confirm']
    }
    tos: typeof routes['static.tos']
    gallery: typeof routes['static.gallery']
    contact: typeof routes['static.contact']
    test: typeof routes['static.test']
  }
  api: {
    commission: {
      store: typeof routes['api.commission.store']
    }
  }
}
