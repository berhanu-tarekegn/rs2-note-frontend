import { createStore } from "vuex";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/8080/api",
});

export default createStore({
  state: {
    notes: [
      {
        id: 12,
        title: "Note title",
        note: "my note",
        labels: ["lebel 1", "Label 2"],
      },
      {
        id: 3412,
        title: "Note two",
        note: "my second note",
        labels: ["Label 3", "Label 4"],
      },
    ],
  },
  mutations: {
    setNotes(state, data) {
      state.notes = data;
    },
  },
  actions: {
    loadAllNotes(context) {
      api
        .get("notes")
        .then((res) => {
          context.commit("setNotes", res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    createNote(context, payload) {
      api
        .post("notes", payload)
        .then((res) => {
          context.dispatch("loadAllNotes");
        })
        .catch((error) => {
          console.error(error);
        });
    },

    updateNote(context, payload) {
      api
        .put(`notes/${payload.id}`, payload)
        .then((res) => {
          context.dispatch("loadAllNotes");
        })
        .catch((error) => {
          console.error(error);
        });
    },

    deleteNote(context, noteId) {
      api
        .delete(`notes/${noteId}`)
        .then((res) => {
          context.dispatch("loadAllNotes");
        })
        .catch((error) => {
          console.error(error);
        });
    },

    filterNotes(context, query) {
      api
        .get(`notes/${query}`, payload)
        .then((res) => {
          context.dispatch("loadAllNotes");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
