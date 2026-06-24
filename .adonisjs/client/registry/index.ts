/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'drive.fs.serve': {
    methods: ["GET","HEAD"],
    pattern: '/uploads/*',
    tokens: [{"old":"/uploads/*","type":0,"val":"uploads","end":""},{"old":"/uploads/*","type":2,"val":"*","end":""}],
    types: placeholder as Registry['drive.fs.serve']['types'],
  },
  'static.home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['static.home']['types'],
  },
  'static.prices': {
    methods: ["GET","HEAD"],
    pattern: '/commission/prices',
    tokens: [{"old":"/commission/prices","type":0,"val":"commission","end":""},{"old":"/commission/prices","type":0,"val":"prices","end":""}],
    types: placeholder as Registry['static.prices']['types'],
  },
  'static.form': {
    methods: ["GET","HEAD"],
    pattern: '/commission/form',
    tokens: [{"old":"/commission/form","type":0,"val":"commission","end":""},{"old":"/commission/form","type":0,"val":"form","end":""}],
    types: placeholder as Registry['static.form']['types'],
  },
  'static.commissions.confirm': {
    methods: ["GET","HEAD"],
    pattern: '/commission/confirmation',
    tokens: [{"old":"/commission/confirmation","type":0,"val":"commission","end":""},{"old":"/commission/confirmation","type":0,"val":"confirmation","end":""}],
    types: placeholder as Registry['static.commissions.confirm']['types'],
  },
  'static.tos': {
    methods: ["GET","HEAD"],
    pattern: '/commission/tos',
    tokens: [{"old":"/commission/tos","type":0,"val":"commission","end":""},{"old":"/commission/tos","type":0,"val":"tos","end":""}],
    types: placeholder as Registry['static.tos']['types'],
  },
  'static.gallery': {
    methods: ["GET","HEAD"],
    pattern: '/gallery',
    tokens: [{"old":"/gallery","type":0,"val":"gallery","end":""}],
    types: placeholder as Registry['static.gallery']['types'],
  },
  'static.contact': {
    methods: ["GET","HEAD"],
    pattern: '/contact',
    tokens: [{"old":"/contact","type":0,"val":"contact","end":""}],
    types: placeholder as Registry['static.contact']['types'],
  },
  'static.test': {
    methods: ["GET","HEAD"],
    pattern: '/test',
    tokens: [{"old":"/test","type":0,"val":"test","end":""}],
    types: placeholder as Registry['static.test']['types'],
  },
  'api.commission.store': {
    methods: ["POST"],
    pattern: '/api/v1/commissions',
    tokens: [{"old":"/api/v1/commissions","type":0,"val":"api","end":""},{"old":"/api/v1/commissions","type":0,"val":"v1","end":""},{"old":"/api/v1/commissions","type":0,"val":"commissions","end":""}],
    types: placeholder as Registry['api.commission.store']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
