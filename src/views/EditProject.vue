<template>
  <form @submit.prevent="handleUpdate">
    <label>Title</label>
    <input type="text" v-model="title" required />
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
import { DataStore } from "@aws-amplify/datastore";
import { Projects } from "../models";

export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      currentProject: {}
    };
  },
  async mounted() {
    this.currentProject = await DataStore.query(Projects, this.id);

    this.title = this.currentProject.title;
    this.details = this.currentProject.description;
  },
  methods: {
    async handleUpdate() {
      await DataStore.save(
        Projects.copyOf(this.currentProject, (item) => {
          item.title = this.title
          item.description = this.details
        })
      );
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>