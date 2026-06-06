/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
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
