import Vue from 'vue'

import config from '~/config'

Vue.filter('monitorAccount', function (account) {
  return `${config.monitor}/account/${account}`
})


Vue.prototype.$tokenLogo = function(symbol, contract) {
  if (symbol == 'PIXEOS' && contract == 'pixeos1token')
    return 'https://pixeos.io/ico/apple-touch-icon-57-precomposed.png'

  return `https://raw.githubusercontent.com/BlockABC/eos-tokens/master/tokens/${contract}/${symbol}.png`
}
