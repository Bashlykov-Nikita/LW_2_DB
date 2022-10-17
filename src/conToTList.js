
function conversionToTSList(fileText) {
    let teacherState = fileText
    class Teacher {
        TName = ""
        TSurname = ""
        TClassroom = 0
    }

    let teacher = new Teacher()
    let teacherList = new List()

    splitString(teacherState, newLine).forEach(line => {
        let word = splitString(line, comma)
        teacher = {
            TSurname: word[0],
            TName: word[1],
            TClassroom: parseInt(word[2], 10),
        }
        teacherList.append(teacher)
    })
    return teacherList
}