export default function setCookiesOnReq(cookies){
    const accessToken = cookies.cookies.get("accessToken");
    const refreshToken = cookies.cookies.get("refreshToken");

    const options = {
        credentials: "include",
        headers: {
            Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`
        }
    }
    return options
}