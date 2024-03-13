<script>
import axios from 'axios';
export default{
data(){
  return {
    employee: {
      name:'',
      employee_id:'',
      position:'',
      gender:'',
      birthday:'',
      address:''
    }
  }
},
async mounted() {
  await axios.get("http://localhost:8000/api/employee").then((response) =>{
    console.log(response.data.data);
    console.log(response.status);
    this.employee = response.data.data;
  }).catch((error) => {
      console.error(error);
  });
},

methods: {
  async onShowEmployeeDetails(id) {
    try {
      var response = await axios.get(`http://localhost:8000/api/employee/${id}`);
      this.employee_details = response.data.data;
    } catch (error) {
      console.error(error);
    }
  },

  async addEmployee() {
    try {
      // Validate required fields
      if (!this.employee.employee_id || !this.employee.name || !this.employee.position) {
        alert("Required fields are missing");
        return;
      }

      // Create a data object with the required fields
      const data = {
        employee_id: this.employee.employee_id,
        name: this.employee.name,
        position: this.employee.position,
        address: this.employee.address || '',
        gender: this.employee.gender || '',
        birthday: this.employee.birthday || ''
      };

      // Make the POST request
      const response = await axios.post('http://localhost:8000/api/employee', data);

      // Reset form on successful submission
      this.output = response.data;
      this.employee = {
        employee_id: '',
        name: '',
        position: '',
        address: '',
        gender: '',
        birthday: ''
      };
    } catch (error) {
      console.error(error);
      }
    }
  },
}
</script>

<template>
  <div class="p-5">
    <h1 class="text-center">Create Employee</h1>
    <div class="my-5">
      <form>
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-3">
              <div class="form-group">
                <label for="formGroupExampleInput">Employee ID:</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter employee ID" v-model="employee.employee_id">
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="form-group">
                <label for="formGroupExampleInput2">Position:</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your position" v-model="employee.position">
              </div>
            </div>
          </div>
  
          <div class="d-flex flex-column gap-1">
            <div class="mb-3">
              <label for="formGroupExampleInput2">Fullname:</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your full name" v-model="employee.name">
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput3">Address:</label>
              <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Enter your address" v-model="employee.address">
            </div>
  
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="formGroupExampleInput4">Gender:</label>
                <input type="text" class="form-control" id="formGroupExampleInput4" placeholder="Enter your gender" v-model="employee.gender">
              </div>
              <div class="col-md-6 mb-3">
                <label for="formGroupExampleInput5">Birthday:</label>
                <input type="date" class="form-control" id="formGroupExampleInput5" v-model="employee.birthday">
              </div>
            </div>
          </div>
          <div class="d-inline-flex mt-3">
            <button type="button" @click="addEmployee" class="btn btn-warning me-3">SUBMIT</button>
            <button type="button" class="btn btn-warning" @click.stop="$router.push('/home')">BACK</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
