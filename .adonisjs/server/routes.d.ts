import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'static.home': { paramsTuple?: []; params?: {} }
    'static.prices': { paramsTuple?: []; params?: {} }
    'static.form': { paramsTuple?: []; params?: {} }
    'static.tos': { paramsTuple?: []; params?: {} }
    'static.gallery': { paramsTuple?: []; params?: {} }
    'static.contact': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'static.home': { paramsTuple?: []; params?: {} }
    'static.prices': { paramsTuple?: []; params?: {} }
    'static.form': { paramsTuple?: []; params?: {} }
    'static.tos': { paramsTuple?: []; params?: {} }
    'static.gallery': { paramsTuple?: []; params?: {} }
    'static.contact': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'static.home': { paramsTuple?: []; params?: {} }
    'static.prices': { paramsTuple?: []; params?: {} }
    'static.form': { paramsTuple?: []; params?: {} }
    'static.tos': { paramsTuple?: []; params?: {} }
    'static.gallery': { paramsTuple?: []; params?: {} }
    'static.contact': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}