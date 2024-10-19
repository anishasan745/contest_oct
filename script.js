const employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
  ];
  
  // Function to print developers using map
  function PrintDeveloperbyMap() {
    employees.map(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  // Function to print developers using forEach
  function PrintDeveloperbyForEach() {
    employees.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  // Function to add a new employee
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log(employees);
  }
  
  // Function to remove admin
  function removeAdmin() {
    const updatedEmployees = employees.filter(employee => employee.profession !== "admin");
    console.log(updatedEmployees);
  }
  
  // Function to concatenate arrays
  function ConcatinateArray() {
    const newEmployees = [
      { id: 5, name: "alice", age: "22", profession: "designer" },
      { id: 6, name: "bob", age: "24", profession: "manager" },
      { id: 7, name: "charlie", age: "21", profession: "analyst" }
    ];
    
    const combinedArray = employees.concat(newEmployees);
    console.log(combinedArray);
  }