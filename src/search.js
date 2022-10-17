function out(Slist, Tlist , query, parameter) {
    let result = []
    const startTime = new Date().getTime()
    switch(query) {
        case 'classesBySurname': {
            for (Slist.front(); Slist.currPos() < Slist.length(); Slist.next()) {
                if(parameter === Slist.getElement().Surname){
                    result += `${Slist.getElement().Classroom}\n`
                }
            }
            
            break
        }
        case 'busBySurname': {
            for (Slist.front(); Slist.currPos() < Slist.length(); Slist.next()) {
                if(parameter === Slist.getElement().Surname){
                    result += `${Slist.getElement().Bus}\n`
                }
            }
            
            break
        }
        case 'studentsByTeacher': {
            for (Tlist.front(); Tlist.currPos() < Tlist.length(); Tlist.next()) {
                if(parameter === Tlist.getElement().TSurname){
                    for (Slist.front(); Slist.currPos() < Slist.length(); Slist.next()) {
                        if(Tlist.getElement().TClassroom === Slist.getElement().Classroom){
                            result += `${Slist.getElement().Surname} ${Slist.getElement().Name} ${Slist.getElement().Classroom}\n`
                        }
                    }
                }
            }
            
            break
        }
        case 'studentsByBus': {
            for (Slist.front(); Slist.currPos() < Slist.length(); Slist.next()) {
                if(parseInt(parameter, 10) === Slist.getElement().Bus){
                    result += `${Slist.getElement().Surname} ${Slist.getElement().Name} ${Slist.getElement().Classroom}\n`
                }
            }
            
            break
        }
        case 'studentsByClassroom': {
            for (Slist.front(); Slist.currPos() < Slist.length(); Slist.next()) {
                if(parseInt(parameter, 10) === Slist.getElement().Classroom){
                    result += `${Slist.getElement().Surname} ${Slist.getElement().Name} ${Slist.getElement().Classroom}\n`
                }
            }
            
            break
        }
        case 'teachersByClassroom': {
            for (Tlist.front(); Tlist.currPos() < Tlist.length(); Tlist.next()) {
                if(parseInt(parameter, 10) === Tlist.getElement().TClassroom){
                    result += `${Tlist.getElement().TSurname} ${Tlist.getElement().TName} ${Tlist.getElement().TClassroom}\n`
                }
            }
            
            break
        }
        case 'teachersByGrade': {
            for(Slist.front(); Slist.currPos() < Slist.length(); Slist.next()){
                if(parseInt(parameter, 10) === Slist.getElement().Grade){
                    for (Tlist.front(); Tlist.currPos() < Tlist.length(); Tlist.next()){
                        if(Slist.getElement().Classroom === Tlist.getElement().TClassroom){
                            result += `${Tlist.getElement().TSurname} ${Tlist.getElement().TName} ${Tlist.getElement().TClassroom}\n`
                        }
                    }
                }
            }
        }
        
    }
    searchTime = new Date().getTime() - startTime;
    return(`Done in ${(searchTime * 1e-3).toFixed(3) + 'sec'} \n\n${result}`)

}
 // for(Slist.front(); Slist.currPos() < list.length(); list.next()){
    //     result += `${list.getElement().Name}\n`
    // }
    // break