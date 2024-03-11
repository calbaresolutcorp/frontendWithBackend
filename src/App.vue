<script>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';


export default{
data(){
  return {
    employees: [],
    employee_details: null
  }
},
async mounted() {
  await axios.get("http://localhost:8000/api/employee").then((response) =>{
    console.log(response.data.data);
    console.log(response.status);
    this.employees = response.data.data;
  }).catch((error) => {

  });

  
  // await axios.post()
},
methods: {
  async onShowEmployeeDetails(id){
      var response = await axios.get(`http://localhost:8000/api/employee/${id}`);
      this.employee_details = response.data.data;
  },
 async onCreateEmployee(){
    var response = await axios.post(`http://localhost:8000/api/employee`);
  }
},
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <ol>
      <li v-for="element of employees" :key="element" @click="onShowEmployeeDetails(element.id)">Employee Name:{{element.name}}</li>
    </ol>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <div class="d-flex flex-column gap-3">
        <span>Name: {{employee_details?.name}}</span> 
        <span>Employee ID: {{employee_details?.id}}</span> 
        <span>Gender: {{employee_details?.gender}}</span> 
        <span>Birthday: {{employee_details?.birthdate}}</span> 
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
