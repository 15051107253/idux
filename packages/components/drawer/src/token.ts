/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

import type { DrawerBindings, DrawerProps, DrawerProviderRef } from './types'
import type { CommonConfig, DrawerConfig } from '@idux/components/config'
import type { ComputedRef, InjectionKey, Ref, Slots } from 'vue'

export interface DrawerContext {
  props: DrawerProps
  slots: Slots
  common: CommonConfig
  config: DrawerConfig
  mergedPrefixCls: ComputedRef<string>
  visible: ComputedRef<boolean>
  animatedVisible: Ref<boolean | undefined>
  mergedVisible: ComputedRef<boolean>
  level: Ref<number>
  levelAction: Ref<'push' | 'pull' | undefined>
  push: () => void
  pull: () => void
}

export const drawerToken: InjectionKey<DrawerContext> = Symbol('drawerToken')

export const drawerProviderToken: InjectionKey<DrawerProviderRef> = Symbol('drawerProviderToken')

// public token
export const DRAWER_TOKEN: InjectionKey<DrawerBindings> = Symbol('DRAWER_TOKEN')
