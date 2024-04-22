import axios from "axios";
import {ElMessage} from "element-plus";
import router from "@/router";


const defaultError = () => ElMessage.error('发生了一些错误，请联系管理员')
const defaultFailure = (message) => ElMessage.warning(message)
/*function post(url, data, success, failure = defaultFailure(), error = defaultError) {
    axios.post(url, data).then(response => {
        console.log(response)
        if(response.status === 401) {
            localStorage.removeItem('user')
            store.auth.user = undefined
            router.push('/')
        } else if(response.status === 200)
            success(response.data);
        else failure(response.data);
    }).catch(error)
}
function get(url, data,success, failure = defaultError(), error = defaultError) {
    axios.get(url, data).then(response => {
        console.log(response)
        if(response.status === 401) {
            localStorage.removeItem('user')
            store.auth.user = undefined
            router.push('/')
        } else if(response.status === 200)
            success(response.data)
        else
            failure()
    }).catch(error)
}

const logout = () => {
    get('/api/auth/logout', (message) => {
        ElMessage.success(message)
        store.auth.user = null
        localStorage.removeItem('user')
        router.push('/')
    })
}

 */
/*
const me = (message) => {
    store.auth.user = message;
    localStorage.setItem("user", JSON.stringify(message));
    if (index) {
        router.push('/index')
    }
}
 */

export { defaultFailure ,defaultError }
