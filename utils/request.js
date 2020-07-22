class Request {
    constructor(option) {
        let baseConfig = {
            baseUrl: urlConfig.gsUrl
        }
        this.config = {
            ...baseConfig,
            ...option
        }
        // 设置请求头
        this.header = {
            'Content-Type': 'application/json',
        }
    }

    request({
        url,
        data,
        method
    }) {
        return new Promise((resolve, reject) => {
            this._request(url, resolve, reject, data, method)
        })
    }

    // 发送请求
    _request(url, resolve, reject, data, method) {
        let self = this,
            token = wx.getStorageSync('token')
        this.header["OKEN"] = token
        // 记录请求发起时间
        wx.request({
            url: `${self.config.baseUrl}${url}`,
            data: data,
            header: self.header,
            method: method ? method : 'POST',
            dataType: 'json',
            timeout: 10000,
            success: (res) => { // token 失效 的编码需要补充
                resolve(res.data) 
            },
            fail: (res) => {
                reject(res)
            }
        })
    }

    loding(data) {
        wx.showLoading({
            content: '加载中',
            delay: 500
        })
        return this
    }
}

export {
    Request
};
