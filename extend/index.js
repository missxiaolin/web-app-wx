import mpExtend from './mp-extend.js'

import extendPage from './complex/extend-page.js'

import simplePv from './simple/extend_pv.js'

mpExtend(extendPage)

mpExtend(simplePv)

export default {
    App: mpExtend.App,
    Page: mpExtend.Page,
    Component: mpExtend.Component
}