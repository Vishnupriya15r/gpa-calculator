function generateInputs() {
    const numCourses = document.getElementById('num-courses').value;
    const coursesInputs = document.getElementById('courses-inputs');
    coursesInputs.innerHTML = '';

    for (let i = 0; i < numCourses; i++) {
        coursesInputs.innerHTML += `
            <div class="course">
                <label for="course-grade-${i}">Course ${i + 1} Grade:</label>
                <input type="text" id="course-grade-${i}" name="course-grade-${i}" required>

                <label for="course-credits-${i}">Course ${i + 1} Credits:</label>
                <input type="number" id="course-credits-${i}" name="course-credits-${i}" min="1" required>
            </div>
        `;
    }
}

function calculateGPA() {
    const numCourses = document.getElementById('num-courses').value;
    let totalQualityPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < numCourses; i++) {
        const grade = document.getElementById(`course-grade-${i}`).value.toUpperCase();
        const credits = parseInt(document.getElementById(`course-credits-${i}`).value);

        const gradePoints = getGradePoints(grade);

        if (gradePoints === null) {
            alert(`Invalid grade input for Course ${i + 1}. Please enter a valid grade (A, B, C, D, F).`);
            return;
        }

        totalQualityPoints += gradePoints * credits;
        totalCredits += credits;
    }

    const gpa = totalQualityPoints / totalCredits;
    document.getElementById('result').innerText = `Your GPA is: ${gpa.toFixed(2)}`;
}

function getGradePoints(grade) {
    switch (grade) {
        case 'A': return 4.0;
        case 'B': return 3.0;
        case 'C': return 2.0;
        case 'D': return 1.0;
        case 'F': return 0.0;
        default: return null;
    }
}
