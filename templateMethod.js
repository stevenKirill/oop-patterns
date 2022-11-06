class Mentor {
    studyProcess() {
        this.readBook();
        this.solveProblems();
        this.createPetProjects();
        this.makeTestTask();
        this.readyForFirstJob();
    }
}

class Julia extends Mentor {
    readBook() {
        console.log('I read You dont know JS');
    }

    solveProblems() {
        console.log('I solved problems on codewars platform');
    }

    createPetProjects() {
        console.log('I created todo list');
    }

    makeTestTask() {
        console.log('i created table with filters')
    }

    readyForFirstJob() {
        console.log('ready for job at sberbank')
    }
}

class Mark extends Mentor {
    readBook() {
        console.log('I read Javascript for noobs');
    }

    solveProblems() {
        console.log('I solved problems on learnjavascript.ru platform');
    }

    createPetProjects() {
        console.log('I created messanger list');
    }

    makeTestTask() {
        console.log('I created flyight widget')
    }

    readyForFirstJob() {
        console.log('ready for job at gazprombank')
    }
}

const studentOne = new Julia();
const studentTwo = new Mark();

studentOne.studyProcess();
console.log('---------------')
studentOne.studyProcess();