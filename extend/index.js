import mpExtend from './mp-extend.js'

import extendPage from './complex/extend-page.js'

mpExtend(extendPage)

export default {
    App: mpExtend.App,
    Page: mpExtend.Page
}