var qData = [
    { q: "ভারত-নিউজিল্যান্ড FTA কবে স্বাক্ষরিত হবে?", a: "২৭ এপ্রিল ২০২৬", opts: ["২৫ এপ্রিল ২০২৬", "২৬ এপ্রিল ২০২৬", "২৭ এপ্রিল ২০২৬", "২৮ এপ্রিল ২০২৬"] },
    { q: "ভারত-নিউজিল্যান্ড FTA-এর মাধ্যমে কত ডলার বিনিয়োগ প্রত্যাশিত?", a: "$20 billion", opts: ["$10 billion", "$15 billion", "$20 billion", "$25 billion"] },
    { q: "Dowry Prohibition Act, 1961 অনুযায়ী কাদের বিরুদ্ধে মামলা করা যাবে না বলে সুপ্রিম কোর্ট জানিয়েছে?", a: "যারা ভুক্তভোগী হয়ে অভিযোগ জানায়", opts: ["যারা পণ নেয়", "যারা পণ দেয়", "যারা ভুক্তভোগী হয়ে অভিযোগ জানায়", "কেউই নয়"] },
    { q: "হরিবংশ নারায়ণ সিং কততম বার রাজ্যসভার উপ-সভাপতি নির্বাচিত হলেন?", a: "তৃতীয়বার", opts: ["প্রথমবার", "দ্বিতীয়বার", "তৃতীয়বার", "চতুর্থবার"] },
    { q: "হরিবংশ নারায়ণ সিং কীভাবে নির্বাচিত হয়েছেন?", a: "বিনা প্রতিদ্বন্দ্বিতায়", opts: ["ভোটের মাধ্যমে", "মনোনীত", "বিনা প্রতিদ্বন্দ্বিতায়", "রাষ্ট্রপতির মাধ্যমে"] },
    { q: "MyLIC অ্যাপটি কাদের জন্য চালু করা হয়েছে?", a: "গ্রাহক", opts: ["এজেন্ট", "গ্রাহক", "সরকার", "ব্যাংক"] },
    { q: "Super Sales Saathi অ্যাপটি কার জন্য?", a: "LIC এজেন্ট", opts: ["গ্রাহক", "ছাত্র", "LIC এজেন্ট", "ব্যাংকার"] },
    { q: "World Hemophilia Day কবে পালিত হয়?", a: "১৭ এপ্রিল", opts: ["১৬ এপ্রিল", "১৭ এপ্রিল", "১৮ এপ্রিল", "১৯ এপ্রিল"] },
    { q: "২০২৬ সালের World Hemophilia Day-এর থিম কী?", a: "Access for All: Women and Girls Bleed Too", opts: ["Health for All", "Blood Awareness", "Access for All: Women and Girls Bleed Too", "Save Life"] },
    { q: "Hemophilia কী ধরনের রোগ?", a: "জেনেটিক", opts: ["সংক্রামক", "জেনেটিক", "ভাইরাল", "ব্যাকটেরিয়াল"] },
    { q: "কোন রাজ্য UCC বাস্তবায়নের জন্য কমিটি গঠন করেছে?", a: "ছত্তিশগড়", opts: ["গুজরাট", "মহারাষ্ট্র", "ছত্তিশগড়", "রাজস্থান"] },
    { q: "UCC-এর পূর্ণরূপ কী?", a: "Uniform Civil Code", opts: ["United Civil Code", "Uniform Civil Code", "Universal Code", "Union Civil Code"] },
    { q: "CAPF সম্মেলনের নেতৃত্ব কে দেবেন?", a: "প্রধানমন্ত্রী", opts: ["রাষ্ট্রপতি", "প্রতিরক্ষা মন্ত্রী", "প্রধানমন্ত্রী", "স্বরাষ্ট্রমন্ত্রী"] },
    { q: "CAPF-এর মূল লক্ষ্য কী?", a: "অভ্যন্তরীণ নিরাপত্তা", opts: ["বিদেশনীতি", "অভ্যন্তরীণ নিরাপত্তা", "অর্থনীতি", "শিক্ষা"] },
    { q: "Sayani Gupta কোন পুরস্কার পেয়েছেন?", a: "Harvard South Asian Person of the Year", opts: ["Padma Shri", "Oscar", "Harvard South Asian Person of the Year", "Booker Prize"] },
    { q: "Mumbai Cricket Association কী চালু করেছে?", a: "Structured Player Contract Model", opts: ["নতুন স্টেডিয়াম", "নতুন টুর্নামেন্ট", "Structured Player Contract Model", "IPL দল"] },
    { q: "Structured Player Contract Model-এর মূল উদ্দেশ্য কী?", a: "খেলোয়াড়দের আর্থিক নিরাপত্তা", opts: ["খেলার নিয়ম পরিবর্তন", "খেলোয়াড়দের আর্থিক নিরাপত্তা", "নতুন দল তৈরি", "আন্তর্জাতিক ম্যাচ বাড়ানো"] },
    { q: "FTA-এর মূল উদ্দেশ্য কী?", a: "বাণিজ্য বৃদ্ধি", opts: ["যুদ্ধ", "বাণিজ্য বৃদ্ধি", "শিক্ষা উন্নয়ন", "পরিবেশ রক্ষা"] },
    { q: "LIC-এর পূর্ণরূপ কী?", a: "Life Insurance Corporation", opts: ["Life Insurance Company", "Life Insurance Corporation", "Legal Insurance Corporation", "Limited Insurance Company"] },
    { q: "World Hemophilia Day কার জন্মদিনে পালিত হয়?", a: "Frank Schnabel", opts: ["Bill Gates", "Frank Schnabel", "Elon Musk", "WHO Director"] }
];

var curQ = 0, userScore = 0, qTimer, secLeft = 15;

function beginQuizNow() {
    document.getElementById("start-area").style.display = "none";
    document.getElementById("quiz-main-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    if (curQ >= qData.length) { showResult(); return; }
    secLeft = 15;
    document.getElementById("timer-box").innerHTML = secLeft;
    document.getElementById("quiz-progress").innerHTML = "প্রশ্ন: " + (curQ + 1) + "/" + qData.length;
    document.getElementById("main-q-text").innerHTML = qData[curQ].q;
    
    var optsHtml = "";
    qData[curQ].opts.forEach(opt => {
        optsHtml += `<button class="opt-btn" onclick="checkAnswer(this, '${opt}')">${opt}</button>`;
    });
    document.getElementById("main-opt-container").innerHTML = optsHtml;
    startTimer();
}

function startTimer() {
    clearInterval(qTimer);
    qTimer = setInterval(() => {
        secLeft--;
        document.getElementById("timer-box").innerHTML = secLeft;
        if (secLeft <= 0) { 
            clearInterval(qTimer);
            checkAnswer(null, ""); 
        }
    }, 1000);
}

function checkAnswer(btn, selected) {
    clearInterval(qTimer);
    var correct = qData[curQ].a.trim();
    var btns = document.getElementsByClassName("opt-btn");
    
    // সঠিক উত্তর হাইলাইট করা
    for (let b of btns) {
        b.disabled = true;
        if (b.innerText.trim() === correct) {
            b.classList.add("correct-ans");
        }
    }

    
    if (selected.trim() === correct) {
        userScore++;
        document.getElementById("score-val").innerText = userScore;
    } else if (btn) {
        btn.classList.add("wrong-ans");
    }

    curQ++;
    setTimeout(loadQuestion, 1500);
}

function showResult() {
    document.getElementById("question-area").style.display = "none";
    document.getElementById("result-area").style.display = "block";
    
    var finalScore = userScore;
    var totalQ = qData.length;
    var feedback = "";
    var color = "";

    
    if (finalScore === totalQ) {
        feedback = "Outstanding! 🌟";
        color = "#388e3c";
    } else if (finalScore >= totalQ * 0.8) {
        feedback = "Very Good! 👏";
        color = "#0d47a1";
    } else if (finalScore >= totalQ * 0.5) {
        feedback = "Good! 👍";
        color = "#f57c00";
    } else {
        feedback = "Need More Practice! 📚";
        color = "#d32f2f";
    }

    document.getElementById("res-score").innerHTML = `
        <div style="color: ${color}; font-weight: bold; margin-bottom: 10px;">${feedback}</div>
        <div style="font-size: 2.5rem;">${finalScore} / ${totalQ}</div>
    `;
}
