
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');


    var submit = document.getElementById("submitexercise");
    var exercise = document.getElementById("exercise");
    var sets = document.getElementById("sets");
    var reps = document.getElementById("reps");
    var button = document.getElementById("button");
    var workoutTrackerBox = document.getElementById("workoutTrackerBox");
    console.log(submit)
    console.log(sets, reps)
    // document.querySelector(".submitexercise").addEventListener("submit", addData);

    // function addData(){
    //     console.log(submit)
    //     console.log(exercise.value)
    // }
    var idCount = 1;
    let email = '';
    var d = new Date();
    email+=d+'\n';
    
    
    
    submit.addEventListener('submit', e => {
        e.preventDefault();
        let trackedWorkout = document.createElement("trackedWorkout")
        trackedWorkout.id = idCount
        console.log(trackedWorkout.id)
        trackedWorkout.innerHTML += "Exercise: " + exercise.value + '<br>' + "Sets: " + sets.value + '<br>' + "Reps: " + reps.value + '<br>' +'<br>'
        trackedWorkout.style.setProperty('height', '10vh')
        trackedWorkout.style.setProperty('width', '10vw')
        workoutTrackerBox.appendChild(trackedWorkout);
        let deleteButton = document.createElement('BUTTON')
        deleteButton.innerHTML="✖"+'<br>'
        deleteButton.style.setProperty('background', '#ff0000')
        deleteButton.style.setProperty('color', '#fff')
        deleteButton.style.setProperty('border', 'none')
        deleteButton.style.setProperty('padding', '5px 9px')
        deleteButton.style.setProperty('border-radius', '50%')
        deleteButton.style.setProperty('cursor', 'pointer')
        deleteButton.style.setProperty('position', 'relative')
        deleteButton.style.setProperty('bottom', '150px')
        deleteButton.style.setProperty('left', '200px')
        //deleteButton.setAttribute('onclick',"this.parentNode.parentNode.removeChild(this.parentNode)")
        deleteButton.setAttribute('onclick',"this.parentNode.parentNode.innerHTML=DELETED")
        
        trackedWorkout.appendChild(deleteButton)
        


        //window.open('mailto:test@example.com')


        idCount++

        exercise.value = ''
        sets.value = ''
        reps.value = ''
    });
    button.addEventListener('click', e => {
        makeList()
        var filename='workout.txt'
        var text=email;
        download(filename, text);
    })
    function makeList() {

        for (let i = 1; i < idCount ; i++) {
            
            if(document.getElementById(i).innerText != false){
            email += (document.getElementById(i).innerText)}
        }
        console.log(email)
        
    }
    function download(filename, text) {
        console.log('running')
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
    
        element.style.display = 'none';
        document.body.appendChild(element);
    
        element.click();
    
        document.body.removeChild(element);
    }
    
    

});