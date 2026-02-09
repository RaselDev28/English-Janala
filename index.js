const loadLessons=()=>{
    const url="https://openapi.programming-hero.com/api/levels/all";
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        displayLessons(data.data)
    })
}

const loadLevelWord=(id)=>{
    
    const url1=`https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url1)
    .then(res=>res.json())
    .then(data=>displayLevelWord(data.data))
}

const displayLevelWord=(words)=>{
    const wordContainer=document.getElementById('word-container');
    // wordContainer.innerHTML="";

    words.forEach(word => {
    const card=document.createElement("div");
    card.innerHTML=`
    <p>Cat</p>
    `      
    wordContainer.append(card)
    });
}

const displayLessons=(lessons)=>{
    // console.log(lessons)
    const levelContainer=document.getElementById("level-container");
    levelContainer.innerHTML="";
    lessons.forEach(lesson => {
        // console.log(lesson)
        const btnDiv=document.createElement("div");
        btnDiv.innerHTML=`
            <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i> Lesson -${lesson.level_no}
            </button>
        `
        levelContainer.append(btnDiv);
    });
}

loadLessons()