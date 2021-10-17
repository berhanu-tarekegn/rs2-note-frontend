<template>
  <form @submit.prevent="saveNote">
    <div class="shadow overflow-hidden sm:rounded-md w-72 my-5">
      <div class="px-4 py-5 bg-white sm:p-6">
        <input
          v-model="note.title"
          type="text"
          name="first-name"
          id="first-name"
          autocomplete="given-name"
          placeholder="note title"
          class="bkeep-input"
        />
        <textarea
          v-model="note.note"
          type="text"
          rows="6"
          placeholder="note text"
          class="bkeep-input"
        />
        <input type="text" placeholder="label" class="bkeep-input" />
      </div>
      <div class="py-3 bg-gray-50 text-right sm:px-6">
        <button
          type="submit"
          class="
            inline-flex
            justify-center
            w-full
            py-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          {{ isEdit ? "Edit" : "Save" }}
        </button>
      </div>
    </div>
  </form>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    note: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapState(["notes"]),

    isEdit() {
      return this.note.id;
    },
  },
  methods: {
    ...mapActions(["createNote", "updateNote"]),
    saveNote() {
      try {
        if (this.isEdit) {
          this.updateNote(this.note);
          return;
        }
        this.createNote(this.note);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.bkeep-input {
  @apply mt-1  block w-64 py-4 px-2 shadow-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500;
}
</style>
