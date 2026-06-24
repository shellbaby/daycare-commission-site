import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'static.home': { paramsTuple?: []; params?: {} }
    'static.prices': { paramsTuple?: []; params?: {} }
    'static.form': { paramsTuple?: []; params?: {} }
    'static.commissions.confirm': { paramsTuple?: []; params?: {} }
    'static.tos': { paramsTuple?: []; params?: {} }
    'static.gallery': { paramsTuple?: []; params?: {} }
    'static.contact': { paramsTuple?: []; params?: {} }
    'static.test': { paramsTuple?: []; params?: {} }
    'api.commission.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'static.home': { paramsTuple?: []; params?: {} }
    'static.prices': { paramsTuple?: []; params?: {} }
    'static.form': { paramsTuple?: []; params?: {} }
    'static.commissions.confirm': { paramsTuple?: []; params?: {} }
    'static.tos': { paramsTuple?: []; params?: {} }
    'static.gallery': { paramsTuple?: []; params?: {} }
    'static.contact': { paramsTuple?: []; params?: {} }
    'static.test': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'static.home': { paramsTuple?: []; params?: {} }
    'static.prices': { paramsTuple?: []; params?: {} }
    'static.form': { paramsTuple?: []; params?: {} }
    'static.commissions.confirm': { paramsTuple?: []; params?: {} }
    'static.tos': { paramsTuple?: []; params?: {} }
    'static.gallery': { paramsTuple?: []; params?: {} }
    'static.contact': { paramsTuple?: []; params?: {} }
    'static.test': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'api.commission.store': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}