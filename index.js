const loadLessons = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayLessons(data.data)
        })
}

const removeBtn = () => {
    const lessonsBtn = document.querySelectorAll(".lesson-btn");
    // console.log(lessonsBtn)
    lessonsBtn.forEach(btn => {
        btn.classList.remove("active"); //Remove all active class
    });
}

const loadLevelWord = (id) => {
    const url1 = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url1)
        .then(res => res.json())
        .then(data => {
            removeBtn();
            const clickedBtn = document.getElementById(`lesson-btn-${id}`);
            // console.log(clickedBtn)
            clickedBtn.classList.add("active") // active all lesson button class for button active
            displayLevelWord(data.data)
        })
}

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = "";

    if (words.length == 0) {
        wordContainer.innerHTML = `
          <div class="text-center col-span-full rounded-xl py-10 space-y-6 font-bangla">
          <img class="mx-auto" src="./assets/alert-error.png">
            <p class="text-xl font-medium text-gray-400">
            এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
            </p>
            <h2 class="font-bold text-4xl">
            নেক্সট Lesson এ যান!!
            </h2>
        </div>
        `;
        return;
    }

    words.forEach(word => {
        const card = document.createElement("div");
        card.innerHTML = `
     <div class="bg-white rounded-xl shadow-sm text-center py-20 px-5 space-y-4">
            <h2 class="font-bold text-2xl">${word.word ? word.word : "Not Found"}</h2>
            <p class="font-semibold">Meaning / pronounciation</p>
            <div class="font-bangla font-medium text-2xl">"${word.meaning ? word.meaning : "Not Found"} /
             ${word.pronunciation ? word.pronunciation : "Not Found"}"</div>
            <div class="flex justify-between items-center">
                <button onclick="my_modal_5.showModal()" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
    `
        wordContainer.append(card)
    });
}

const displayLessons = (lessons) => {
    // console.log(lessons)
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    lessons.forEach(lesson => {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" 
            class="btn btn-outline btn-primary lesson-btn">
            <i class="fa-solid fa-book-open"></i> Lesson -${lesson.level_no}
            </button>
        `
        levelContainer.append(btnDiv);
    });
}

loadLessons()