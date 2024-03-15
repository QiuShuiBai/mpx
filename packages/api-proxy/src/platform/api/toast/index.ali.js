import { ENV_OBJ, changeOpts, warn } from '../../../common/js'

const TIPS_NAME = '支付宝环境 mpx'

function showToast (options = {}) {
  const opts = changeOpts(options, {
    title: 'content',
    icon: 'type'
  })
  ENV_OBJ.showToast(opts)
}

function hideToast (options = {}) {
  if (options.success || options.fail || options.complete) {
    warn(`${TIPS_NAME}.hideToast 不支持 success/fail/complete 参数`)
  }
  ENV_OBJ.hideToast(options)
}

function showLoading (options = {}) {
  const opts = changeOpts(options, {
    title: 'content'
  })
  ENV_OBJ.showLoading(opts)
}

function hideLoading (options = {}) {
  if (options.success || options.fail || options.complete) {
    warn(`${TIPS_NAME}.hideLoading 不支持 success/fail/complete 参数`)
  }
  ENV_OBJ.hideLoading(options)
}

export {
  showToast,
  hideToast,
  showLoading,
  hideLoading
}
