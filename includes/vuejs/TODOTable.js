Vue.component('todo-table', {
  props: ['tarefas'],
  data: function() {
    return {}
  },
  methods: {
    remove: function(tarefa) {
      var idx = this.tarefas.indexOf(tarefa)
      this.tarefas.splice(idx, 1)
    }
  },
  template: `
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>To-do</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tarefa in tarefas">
          <td>
            <input type="checkbox" v-model="tarefa.feita">
          </td>
          <td :class="{risca: tarefa.feita}">{{ tarefa.tarefa }}</td>
          <td>
            <span class="icon has-text-info span-is-link" @click="remove(tarefa)">
              <i class="fa fa-trash-o"></i>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  `
})