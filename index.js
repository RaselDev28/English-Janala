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
    wordContainer.innerHTML=""; 

    words.forEach(word => {
    const card=document.createElement("div");
    card.innerHTML=`
     <div class="bg-white rounded-xl shadow-sm text-center py-20 px-5 space-y-4">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold">Meaning / pronounciation</p>
            <div class="font-bangla font-medium text-2xl">"${word.meaning} / ${word.pronunciation}"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
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