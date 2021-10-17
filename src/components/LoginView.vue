<template>
  <div
    class="
      w-96
      bg-white
      shadow-md
      rounded
      px-8
      pt-6
      pb-8
      mb-4
      flex flex-col
      mx-auto
      mt-12
    "
  >
    <div class="mb-4">
      <label
        class="block text-grey-darker text-sm font-bold mb-2"
        for="username"
      >
        Username
      </label>
      <input
        class="
          shadow
          appearance-none
          border
          rounded
          w-full
          py-2
          px-3
          text-grey-darker
        "
        id="username"
        type="text"
        placeholder="Username"
      />
    </div>
    <div class="mb-6">
      <label
        class="block text-grey-darker text-sm font-bold mb-2"
        for="password"
      >
        Password
      </label>
      <input
        class="
          shadow
          appearance-none
          border border-red
          rounded
          w-full
          py-2
          px-3
          text-grey-darker
          mb-3
        "
        id="password"
        type="password"
        placeholder="******************"
      />
      <p v-if="error" class="text-red-600 text-xs italic">
        Incorrect username password.
      </p>
    </div>
    <div class="flex">
      <button
        class="
          bg-indigo-700
          hover:bg-blue-dark
          text-white
          font-bold
          py-2
          px-4
          w-full
          rounded
        "
        type="button"
        @click="$emit('signin')"
      >
        Sign In
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      error: null,
    };
  },
};
</script>
