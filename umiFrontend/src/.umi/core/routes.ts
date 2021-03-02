// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/freePros/drBang/frontend/node_modules/_@umijs_runtime@3.3.7@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/404",
    "exact": true,
    "component": require('@/pages/404/index.tsx').default
  },
  {
    "path": "/home",
    "exact": true,
    "component": require('@/pages/home/index.tsx').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.tsx').default
  },
  {
    "path": "/login",
    "exact": true,
    "component": require('@/pages/login/index.tsx').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
