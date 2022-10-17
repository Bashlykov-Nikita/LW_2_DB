const studentFile = document.getElementById('studentsFile')
const teacherFile = document.getElementById('teachersFile')
const btn = document.getElementById('start')
const result = document.getElementById('result')
const query = document.getElementById('query')
const parameter = document.getElementById('param')
btn.addEventListener('click', function () {
    let studentsFile = studentFile.files[0];
    let teachersFile = teacherFile.files[0];
    let studentsReader = new FileReader();
    studentsReader.readAsText(studentsFile);
    studentsReader.onload = function () {
        let studentList = conversionToSList(studentsReader.result)
        
        let teachersReader = new FileReader()
        teachersReader.readAsText(teachersFile)
        teachersReader.onload = function() {
            let teachersList = conversionToTSList(teachersReader.result)
            result.innerHTML = out(studentList, teachersList, query.value, parameter.value)
            //result.innerHTML = typeof(studentList)
        }
    }
    studentsReader.onerror = function () {
        console.log(studentsReader.error);
    }
})
