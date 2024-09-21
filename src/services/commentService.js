import http from "./httpService";

export async function createCommentApi(data, options) {
    return http.post("/comment/add", data, options).then(({ data }) => data.data)
}