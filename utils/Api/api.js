//api请求的封装
const API_BASE_URL = "http://zmap.club:3000"
const request = (url,data,method) =>{
  let dataurl = `${API_BASE_URL}${url}`
  return new Promise((resolve,reject)=>{
        wx.request({
          url: dataurl,
          method: method,
          data:data,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          success(request) {
            resolve(request.data)

          },
          fail(error) {
            reject(error)
          }

        })
  })
}
const API={
    //获取轮播图数据
    getBanner(data){
      return request('/banner',data)
    }
}
export default API