import { Context, store } from '@koishijs/client'
import {} from '@koishijs/plugin-market'
import { watch } from 'vue'

export default function (ctx: Context) {
  const dispose = watch(() => store.market?.data, (value) => {
    if (!store.market?.data) return
    for (const key in store.market.data) {
      store.market.data[key].verified = false
      store.market.data[key].insecure = true
    }
  }, { deep: true, immediate: true })

  ctx.on('dispose', dispose)
}
