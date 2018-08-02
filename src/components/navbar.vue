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
import swal from 'sweetalert2'
import {ref} from '../firebase'
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
      console.log(ref)
      this.title = ''
      this.content = ''
      swal({
          title: 'New Task',
          html: 
          '<input id="title" type="text" class="swal2-input" placeholder="Title">' +
          '<input id="content" type="text" class="swal2-input" placeholder="Task">',
          focusConfirm: false,
          preConfirm: () => {
            console.log(document.getElementById('title'))
              let task = {
                  title: document.getElementById('title').value,
                  content: document.getElementById('content').value
              }
              ref.push({
                    title: task.title,
                    content: task.content,
                    status: 'back-log'
                })
          }
      })
    }
  }
}
</script>

<style>

</style>

