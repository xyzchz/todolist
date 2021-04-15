import Login from '../pages/login/Login.vue'
import UserList from '../pages/userList/UserList.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/user', component: UserList },
  { path: "*", redirect: "/"}
]

export default routes