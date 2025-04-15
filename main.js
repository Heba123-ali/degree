let degree = document.getElementById("degree");
let result = document.getElementById('submit');
let resetBtn = document.getElementById('reset');
let outPut = document.getElementById('out-put');
let studentCount = 1;

const value = (degree.value.trim());

result.addEventListener('click', function (e) {
    e.preventDefault();

    if (studentCount > 5) {
        alert
        ("لقد قمت بادخال 5 درجات بالفعل 👍");
        return;
    }
    if (degree.value.trim() === "") {
        alert("من فضلك ادخلي درجة الطالب أولًا ⚠️");
        return;
    }
    
    const value = Number(degree.value.trim());

    if (isNaN(value) || value < 0 || value > 100) {
        alert("الرجاء ادخال درجة صحيحة من 0 إلى 100");
        return;
    }

    let message = `الطالب ${studentCount} : حصل علي ${value} : التقدير : `;
    let comment = '';

    if (value >= 90 ) {
        message += "ممتاز";
        comment = "مبروك لتفوقك ايها المتميز 😍";
        var gradeClass = "excellent";
    } else if (value >= 80) {
        message += "جيد جدا";
        comment = "مبروك لنجاحك ايها البطل⭐";
        var gradeClass = "vgood";
    } else if (value >= 70) {
        message += "جيد";
        comment = "مبروك لنجاحك 😁";
        var gradeClass = "good";
    } else if (value >= 50) {
        message += "مقبول";
        comment = "مبروك لنجاحك 😊";
        var gradeClass = "pass";
    } else if (value >= 0) {
        message += "راسب";
        comment = "حاول مرة اخري 😔";
        var gradeClass = "fail";
    }
    else {
        alert("الرجاء ادخال درجة صحيحة من 0 الي 100");
        return;
    }
    let textMessage = document.createElement('p');  
    textMessage.textContent = message;
    textMessage.classList.add(gradeClass);
    
    let textComment = document.createElement('p');
    textComment.textContent = comment;
    textComment.classList.add(gradeClass);
    
    outPut.appendChild(textMessage);
    outPut.appendChild(textComment);

    studentCount++;
    degree.value = '';
});

resetBtn.addEventListener('click', function () {
    outPut.innerHTML = '';
    degree.value = '';
    studentCount = 1;
});

