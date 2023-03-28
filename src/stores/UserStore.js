import {defineStore} from 'pinia';

export const useUserStore = defineStore('UserStore',{
    state (){
        return{
            user: 'Sarfaraz',
        }
    },
    getters:{
        firstName(){
            return this.user.split(" ")[0];
        }
    }
});
