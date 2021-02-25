import axios from "@axios"

import { SET_DATA } from './mutation-types'

/**
 *
 * @param { function } commit
 * @param { string } data
 */
export function setData ({ commit }, { data }) {
    commit(SET_DATA, { data })
}

export function viewTo ({ commit }, payload) {
        commit("view", payload)
    }

export function fetchChatsAndContacts () {
        return new Promise((resolve, reject) => {
            axios
                .get("/apps/chat/chats-and-contacts")
                .then(response => resolve(response))
                .catch(error => reject(error))
        })
    }

export function getProfileUser () {
        return new Promise((resolve, reject) => {
            axios
                .get("/apps/chat/users/profile-user")
                .then(response => resolve(response))
                .catch(error => reject(error))
        })
    }

export function getChat (ctx, { userId }) {
        return new Promise((resolve, reject) => {
            axios
                .get(`/apps/chat/chats/${ userId }`)
                .then(response => resolve(response))
                .catch(error => reject(error))
        })
    }

export function sendMessage (ctx, {
        contactId,
        message,
        senderId
    }) {
        return new Promise((resolve, reject) => {
            axios
                .post(`/apps/chat/chats/${ contactId }`, {
                    message,
                    senderId
                })
                .then(response => resolve(response))
                .catch(error => reject(error))
        })
    }
