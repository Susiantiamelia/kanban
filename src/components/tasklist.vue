<template>
    <v-container>
      <v-layout row wrap>
        <v-flex xs3>
            <v-card color="blue">
              <v-card-title>Back Log</v-card-title>
              <v-container v-for="task of tasks" :key="task['.key']">
                <v-layout justify-center>
                  <v-flex >
                    <v-card color="white" v-if="task.status === 'back-log'">
                      <v-layout justify-space-between>
                        <v-card-title>{{ task.title }}</v-card-title>
                        <v-btn icon small color="black" @click="deleteTask(task['.key'])"><v-icon>fas fa-times</v-icon></v-btn>
                      </v-layout>
                      <div>
                        <p>{{ task.content }}</p>
                        </div>
                      <v-card-actions>
                        <v-layout justify-center>
                          <v-btn color="blue" fab small @click="changeStatus(task['.key'], 'todo')"><v-icon>fas fa-angle-right</v-icon></v-btn>
                        </v-layout>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs3>
            <v-card color="grey">
              <v-card-title>To Do</v-card-title>
              <v-container v-for="task of tasks" :key="task['.key']">
                <v-layout justify-center>
                  <v-flex >
                    <v-card color="white" v-if="task.status === 'todo'">
                      <v-layout>
                        <v-card-title>{{ task.title }}</v-card-title>
                        <v-btn icon small color="black" @click="deleteTask(task['.key'])"><v-icon>fas fa-times</v-icon></v-btn>

                      </v-layout>
                      <div>
                        <p>{{ task.content }}</p>
                        </div>
                      <v-card-actions>
                        <v-layout justify-center>
                           <v-btn fab small color="blue" @click="changeStatus(task['.key'], 'back-log')"><v-icon>fas fa-angle-left</v-icon></v-btn>
                            <v-btn fab small color="blue" @click="changeStatus(task['.key'], 'doing')"><v-icon>fas fa-angle-right</v-icon></v-btn>
                        </v-layout>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs3>
            <v-card color="green">
              <v-card-title>Doing</v-card-title>
              <v-container v-for="task of tasks" :key="task['.key']">
                <v-layout justify-center>
                  <v-flex >
                    <v-card color="white" v-if="task.status === 'doing'">
                      <v-layout>
                        <v-card-title>{{ task.title }}</v-card-title>
                        <v-btn icon small color="black" @click="deleteTask(task['.key'])"><v-icon>fas fa-times</v-icon></v-btn>

                      </v-layout>
                      <div>
                        <p>{{ task.content }}</p>
                        </div>
                      <v-card-actions>
                        <v-layout justify-center>
                          <v-btn fab small color="blue" @click="changeStatus(task['.key'], 'todo')"><v-icon>fas fa-angle-left</v-icon></v-btn>
                          <v-btn fab small color="blue" @click="changeStatus(task['.key'], 'done')"><v-icon>fas fa-angle-right</v-icon></v-btn>
                        </v-layout>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs3>
            <v-card color="red">
              <v-card-title>Done</v-card-title>
              <v-container v-for="task of tasks" :key="task['.key']">
                <v-layout justify-center>
                  <v-flex >
                    <v-card color="white" v-if="task.status === 'done'">
                      <v-layout>
                        <v-card-title>{{ task.title }}</v-card-title>
                        <v-btn icon small color="black" @click="deleteTask(task['.key'])"><v-icon>fas fa-times</v-icon></v-btn>
                      </v-layout>
                      <div>
                        <p>{{ task.content }}</p>
                        </div>
                      <v-card-actions>
                        <v-layout justify-center>
                          <v-btn fab small color="blue" @click="changeStatus(task['.key'], 'doing')"><v-icon>fas fa-angle-left</v-icon></v-btn>
                          <v-btn fab small color="blue" @click="finishTask(task['.key'])"><v-icon>fas fa-check</v-icon></v-btn>
                        </v-layout>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>


<script>
import swal from 'sweetalert2'
import {ref} from '../firebase.js'
export default {
  name: 'TasksList',
  firebase: {
    tasks: ref
  },
  methods: {
    changeStatus (key, status) {
      ref.child(key).update({ status: status })
    },
    deleteTask(key){
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    ref.child(key).remove()
                    swal(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
                } else if (
                    // Read more about handling dismissals
                    result.dismiss === swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                    )
                }
            })
    },
    finishTask(key){
      ref.child(key).remove()
      swal(
      'Finish!',
      'Your have finish the task.',
      'success'
    )
    }
  }
}
</script>

<style>

</style>


