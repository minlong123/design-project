import { request } from "@/util/request.js"


export function getphotoparam() {
  return request({
    url: "/api/design/getphotoparam",
    method: "get"
  })
}

export function getCateImgDetail(data) {
  return request({
    url: "/api/design/getCateImgDetail",
    method: "get",
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

