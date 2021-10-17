<template>
  <div v-if="isLoggedIn" class="container mx-auto text-left pb-10">
    <div class="flex flex-wrap w-full">
      <div class="w-full">
        <nav class="px-2 py-3 bg-black">
          <div
            class="container px-4 flex flex-wrap items-center justify-between"
          >
            <div class="flex lg:flex-grow items-center">
              <ul class="flex flex-col lg:flex-row list-none">
                <li class="nav-item">
                  <button
                    class="
                      px-3
                      py-2
                      flex
                      items-center
                      text-xs
                      font-bold
                      text-white
                      hover:opacity-75
                    "
                    @click="
                      filter = false;
                      noteForm = false;
                      notes = true;
                    "
                  >
                    Notes
                  </button>
                </li>
                <li class="nav-item">
                  <button
                    class="
                      px-3
                      py-2
                      flex
                      items-center
                      text-xs
                      font-bold
                      text-white
                      hover:opacity-75
                    "
                    @click="
                      filter = false;
                      noteForm = true;
                      notes = false;
                      noteId = null;
                    "
                  >
                    New Note
                  </button>
                </li>
                <li class="nav-item">
                  <button
                    class="
                      px-3
                      py-2
                      flex
                      items-center
                      text-xs
                      font-bold
                      text-white
                      hover:opacity-75
                    "
                    @click="
                      filter = true;
                      noteForm = false;
                      notes = false;
                    "
                  >
                    Filter
                  </button>
                </li>
              </ul>
            </div>
            <div
              class="
                w-full
                relative
                flex
                justify-between
                lg:w-auto
                px-4
                lg:static lg:block lg:justify-start
              "
            >
              <a
                class="
                  text-sm
                  font-bold
                  leading-relaxed
                  inline-block
                  mr-4
                  py-2
                  whitespace-nowrap
                  text-white
                "
                href="#pablo"
              >
                Log out
              </a>
              <button
                class="
                  cursor-pointer
                  text-xl
                  leading-none
                  px-3
                  py-1
                  border border-solid border-transparent
                  rounded
                  bg-transparent
                  block
                  lg:hidden
                  outline-none
                  focus:outline-none
                "
                type="button"
              >
                <span
                  class="block relative w-6 h-px rounded-sm bg-white"
                ></span>
                <span
                  class="block relative w-6 h-px rounded-sm bg-white mt-1"
                ></span>
                <span
                  class="block relative w-6 h-px rounded-sm bg-white mt-1"
                ></span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div v-if="notes" class="flex space-x-4 py-4">
      <div class="flex w-64">Labels</div>
      <div class="flex">
        <todo-view @show-editor="showNoteForm" />
      </div>
    </div>
    <div v-if="noteForm" class="flex justify-center">
      <note-form :note="currentNote" />
    </div>
  </div>
  <login-view v-else @signin="getUserDetail" />
</template>

<script>
import TodoView from "./components/TodoView.vue";
import LoginView from "./components/LoginView.vue";
import NoteForm from "./components/NoteForm.vue";
export default {
  name: "app",
  components: { TodoView, LoginView, NoteForm },
  data() {
    return {
      notes: true,
      noteForm: false,
      filter: false,
      currentNote: {},
      userDetail: undefined, // authenticated user detail
    };
  },
  methods: {
    showNoteForm(note) {
      this.currentNote = note;
      this.noteForm = true;
      this.filter = false;
      this.notes = false;
    },
  },

  computed: {
    isLoggedIn() {
      return this.userDetail;
    },
  },

  methods: {
    getUserDetail() {
      this.userDetail = {};
    },
  },
};
</script>
