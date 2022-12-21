//DESAFIO 02 DA ROCKETSEAT


const students = [

{
    name: "Pedro Hugo",
    noteOne: 6,
    noteTwo: 8,
},
{
    name: "Erick", 
    noteOne: 9,
    noteTwo: 6,
},
{
    name: "Hellen",
    noteOne: 6,
    noteTwo: 10,
},
{
    name: "João Lucas",
    noteOne: 6,
    noteTwo: 6,
},
{
    name: "Luana",
    noteOne: 3,
    noteTwo: 5,
},
]


function avarageStudent(student) {
    return ` O aluno(a) ${student.name} obteve a média de: ${((student.noteOne + student.noteTwo) / 2)} 
    `
}   

for (let student of students) {
    
if (((student.noteOne + student.noteTwo) / 2) >= 7) {
    alert(avarageStudent(student) + "Parabéns, você passou no consurso!")
} else {
    alert(avarageStudent(student) + "Infezlimente você não obteve média para ser aprovado!")
}
}

    
    
   