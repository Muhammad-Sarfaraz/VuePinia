import {defineStore} from 'pinia';
import EventService from '../services/EventService.js'

export const useEventStore = defineStore('EventStore',{
    state(){
        return{
            user: '',
            events: [],
            event: {}
        }
    },
    actions:{
        fetchEvents() {
            return EventService.getEvents()
              .then(response => {
                this.events = response.data
              })
              .catch(error => {
                throw error
              })
          },
    }
});