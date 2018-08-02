<template>
    <v-toolbar dark color="blue">

    <v-toolbar-title class="white--text">Kanban</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon large dark @click="clearData">
      <v-icon>fas fa-plus-circle</v-icon>
    </v-btn>

  </v-toolbar>
</template>

<script>
import {ref} from '../firebase'
import swal from 'sweetalert2'
export default {
  name: 'Navigation',
  data() {
    return {
      title: '',
      content: '',
      assignedTo: '',
      status: 'back-log'
    }
  },
  methods: {
    clearData () {
      this.title = ''
      this.content = ''
      swal({
          title: 'New Task',
          html: 
          '<input id="title" type="text" class="swal2-input" placeholder="Title">' +
          '<input id="content" type="text" class="swal2-input" placeholder="Task">',
          focusConfirm: false,
          preConfirm: () => {
              let task = {
                  title: document.getElementById('title'),
                  content: document.getElementById('content')
              }
              ref.push({
                    title: task.title,
                    content: task.content,
                    status: task.status
                })
          }
      })
    }
  }
}
</script>

<style>

</style>
