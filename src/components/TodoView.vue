<template>
  <div class="flex space-x-8">
    <todo-item
      class="w-1/4"
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @delete-note="confirm"
      @edit-note="showEditor"
    />
  </div>
  <delete-note-dialog
    v-if="showDialog"
    :note="currentNote"
    @cancel="showDialog = false"
  />
</template>
<script>
import { mapActions, mapState } from "vuex";
import TodoItem from "./TodoItem.vue";
import DeleteNoteDialog from "./DeleteNoteDialog.vue";

export default {
  name: "TodoView",
  data() {
    return {
      currentNote: null,
      showDialog: false,
    };
  },
  components: {
    TodoItem,
    DeleteNoteDialog,
  },

  computed: {
    ...mapState(["notes"]),
  },

  created() {
    this.loadAllNotes();
  },
  methods: {
    ...mapActions(["loadAllNotes"]),

    confirm(note) {
      this.currentNote = note;
      this.showDialog = true;
    },
    showEditor(note) {
      this.$emit("show-editor", note);
    },
  },
};
</script>
