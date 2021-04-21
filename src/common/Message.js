import Vue from 'vue';
import Message from './Message.vue'

// Vue.component('message', Message)

export default ({ type }) => {
  if (type !== 'prompt') return
  let instance
  if (instance) return
  return new Promise((resolve) => {
    let instance;
    const MessageBoxConstructor = Vue.extend({
      components: { Message },
      render(h) {
        const props = {
          show: this.show,
          getVal: (val) => {
            resolve(val)
          },
          remove: () => {
            document.body.removeChild(instance.$el) //从body中移除dom
            instance.$destroy()
            instance = null
          }
        }
        return h(Message, { props })
      },
      data() {
        return {
          show: true
        }
      }
    })
    instance = new MessageBoxConstructor().$mount(document.createElement('div'))
    document.body.appendChild(instance.$el);
  })
}