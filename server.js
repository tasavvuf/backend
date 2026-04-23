const express = require("express");
const app = express();
const students = [
  { id: 1, name: "Raj", age: 20 },
  { id: 2, name: "Priya", age: 21 },
];
app.use(express.json());
app.get("/api/students", (req, res) => {
  res.json(students);
});
app.get("/api/students/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, student: students.filter((elem) => elem.id == id) });
});
app.post("/api/students", (req, res) => {
  const { id, name, age } = req.body;
  students.push({ id, name, age });
  if (!name || !age || !id) {
    return res.status(400).json({
      message: " error all data is requied ",
    });
  } else {
    res.status(201).json({
      message: "data added ",
    });
  }
});
app.put("/api/students/:id",(req,res)=>{
  const id  = Number( req.params.id)

  const { name, age } = req.body
  let student = students.find((elem)=>elem.id===id )
  if(!student){
    return res.status(404).json({message:"no student with id found"})
  }
  if(name) student.name = name 
  if(age) student.age = age
  res.json({message:"user upadted",student})
})
app.delete('/api/students/:id',(req,res)=>{
  const id = Number(req.params.id)
  let index = students.findIndex((elem)=>elem.id===id )
  
  if(index === -1){
    return res.status(404).json({message:"no student with id found"})
  }
  const deletedStudent = students.splice(index, 1)
res.json({message:"user deleted", student : deletedStudent})
})
app.listen(5000, () => {
  console.log("server is running on port http://localhost:5000");
});
