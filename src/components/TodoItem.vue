<template>
  <div class="flex border-2 rounded-lg p-4 w-full">
    <div class="flex flex-col space-y-4">
      <div class="flex space-x-8 items-center">
        <h1 class="text-lg font-bold">{{ note.title }}</h1>
        <button @click="edit">Edit</button>
      </div>
      <div class="flex">{{ note.note }}</div>
      <div class="flex justify-end">
        <button @click="deleteNote">Delete</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  emits: ["delete-note", "edit-note"],
  methods: {
    ...mapActions(["deleteNote"]),

    // on delete emit event with note id data
    edit() {
      this.$emit("edit-note", this.note);
    },
    deleteNote() {
      this.$emit("delete-note", this.note);
    },
  },
};
</script>
