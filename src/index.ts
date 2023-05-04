import { Context, z } from 'koishi'
import {} from '@koishijs/plugin-console'
import { resolve } from 'path'

export const name = 'insecure'
export const using = ['console']

export interface Config {}
export const Config: z<Config> = z.object({})

export function apply(ctx: Context, config: Config) {
  ctx.console.addEntry({
    dev: resolve(__dirname, '../client/index.ts'),
    prod: resolve(__dirname, '../dist'),
  })
}
