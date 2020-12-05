Vue.component('todo-form', {
	template: `<div class="todoform">
	<input class="input-group mb-3 w-10" v-model="task">
	<button class="btn-primary" v-on:click="add">Add</button>
	</div>`,
	data(){
		return {
			task:"Add Task",	
		}
	},
	methods: {
		add(){
			this.$emit('new-task',this.task)
			this.task="Add Task"
		},
	}
})

Vue.component('ongoing-task',{
	props: ['tasks'],
	template: `<div class="ongoing" >
	<ul v-for="(task,i) in tasks">
		<li class="bggg" @click="handleClick(i)">{{ task }}</li>
	</ul>
	</div>`,

	methods:{
		handleClick(index){
			this.$emit('task-done',index)
		},
	}
})

Vue.component('done-task',{
	props: ['tasks'],
	template: `<div class="done" >
	<ul v-for="(task,i) in tasks">
		<li class="bggg" @click="handleClick(i)">{{ task }}</li>
	</ul>
	</div>`,

	methods:{
		handleClick(index){
			this.$emit('task-incomplete',index)
		},
	}
})

const app = new Vue({
	el: "#app",
	data: {
		ongoingTask: [],
		completedTask: []
	},
	methods: {
		handleTask(task){
			this.ongoingTask.push(task)
		},
		updateOngoingTask(index){
			this.completedTask.push(this.ongoingTask[index])
			this.ongoingTask.splice(index,1)
		},
		updateCompletedTask(index){
			this.ongoingTask.push(this.completedTask[index])
			this.completedTask.splice(index,1)
		}
	}
})

