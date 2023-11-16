let employee = {
    id: 1,
    name: "Mary",
    surname: "Anderson",
    profession: "Doctor",
    salary: "8000",
    company: "*****Hospital",
    age:"34" ,
    infoEmp: function() {
        console.log(`${this.name} ${this.company}-də ${this.profession}dir.`);
    },
    salaryinfo: function(){
      console.log(`Maaşi ${this.salary}-AZN`);
    },
    ageinfo: function() {
      console.log(`Yaşi ${this.age}`);
    },
    hbd: function() {
        this.age++;
    },
    getFullName: function() {
        return `${this.name} ${this.surname}`;
    },
    upgradeSalary: function(increaseAmount) {
        this.salary += increaseAmount;
    }
  };
  
  employee.infoEmp(); 
  
  employee.salaryinfo(); 
  
  employee.ageinfo(); 
  
  employee.hbd();
  console.log(`Yeni yaş: ${employee.age}`); 
  
  console.log(`Tam ad: ${employee.getFullName()}`); 
  
  employee.upgradeSalary(0 + "$");
  console.log(`Yeni maaş: ${employee.salary}`); 