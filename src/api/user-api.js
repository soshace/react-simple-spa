import store from '../store'
import { userLoginSuccess } from '../AC/user'

export function login() {

  const http = new XMLHttpRequest()
  const url = 'http://test.easybook.ie/api/login'
  const params = 'user=info@thepearlsband.ie&password=27e877c3d7c5c939fb3b995a366f52d9'

  http.open('POST', url, true);

  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

  http.onreadystatechange = () => {
    if (http.readyState == 4 && http.status == 200) {
      const res = JSON.parse(http.responseText)

      if (!res.error && res.success) {
        store.dispatch(userLoginSuccess(res.response))
      }

    }
  }
  http.send(params);
}
