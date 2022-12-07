import { request } from "@/util/request.js"



export function getBanners() {
  return request({
    url: "/api/design/getBanners",
    method: "get"
  })
}



export function getphotoparam(data) {
  return request({
    url: "/api/design/getphotoparam",
    method: "get",
    params: data,
  })
}




export function getCateImgDetail(data) {
  return request({
    url: "/api/design/getCateImgDetail",
    method: "get",
    params: data,
  })
}

export function savebanerre(data) {
  return request({
    url: "/api/design/savebanerre",
    method: "get",
    params: data,
  })
}


export function savephotowall(data) {
  return request({
    url: "/api/design/savephotowall",
    method: "post",
    params: data,
  })
}

export function getphototem() {
  return request({
    url: "/api/design/getphototem",
    method: "get"
  })
}


export function getdocument() {
  return request({
    url: "/api/design/getdocument",
    method: "get"
  })
}


export function getdocumentDetails(data) {
  return request({
    url: "/api/design/getdocumentDetails",
    method: "get",
    params: data,
  })
}


export function savewashphoto(data) {
  return request({
    url: "/api/design/savewashphoto",
    method: "get",
    params: data,
  })
}


