let students = [
    { name: "Anannia", marks: 92 },
    { name: "shreya", marks: 85 },
    { name: "uthara", marks: 78 }
];


const list = document.getElementById("studentList");
const form = document.getElementById("studentForm");
const nameInput = document.getElementById("nameInput");
const marksInput = document.getElementById("marksInput");


function renderStudents() {
    list.innerHTML = ""; 
    students.forEach(student => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="name">${student.name}</span>
            <span class="marks">${student.marks}</span>
        `;
        list.appendChild(li);
    });
}


renderStudents();


form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const marks = parseInt(marksInput.value);

    if (name && !isNaN(marks)) {
        students.push({ name, marks });
        renderStudents();
        form.reset();
    }
});
