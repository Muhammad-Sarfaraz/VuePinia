import {defineStore} from 'pinia';

export const useUserStore = defineStore('UserStore',{
    state (){
        return{
            user: 'Sarfaraz',
            avatar:'https://nvm-boilerplate.chrislee.kr/frontend-nuxt/_nuxt/img/icon.6de3ceb.png'
        }
    },
    getters:{
        firstName(){
            return this.user.split(" ")[0];
        }
    }
});
