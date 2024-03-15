import { ENV_OBJ, changeOpts, handleSuccess } from '../../../common/js'

function setClipboardData (options = {}) {
  const opts = changeOpts(options, {
    data: 'text'
  })
  handleSuccess(opts, res => {
    return changeOpts(res, {
      success: ''
    }, {
      errMsg: 'setClipboardData:ok'
    })
  })
  ENV_OBJ.setClipboard(opts)
}

function getClipboardData (options = {}) {
  const opts = changeOpts(options)

  handleSuccess(opts, res => {
    return changeOpts(res, { text: 'data' })
  })

  ENV_OBJ.getClipboard(opts)
}

export {
  setClipboardData,
  getClipboardData
}
