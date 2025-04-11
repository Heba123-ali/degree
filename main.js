let degree = document.getElementById("degree");
let result = document.getElementById('submit');
let outPut = document.getElementById('out-put');
let i = 1;


  
    result.addEventListener('click', function (e) {
        e.preventDefault();

       if(degree.value >100 || degree.value <= 0){
            outPut.innerHTML += `الرجاء ادخال درجة صحيحة ⚠️ </br>`;
            return;
        }
        if (i > 5) {
            outPut.innerHTML += `لقد قمت بادخال 5 درجات بالفعل 👍 </br>`;
            return;
        }
        if (degree.value >= 90) {
            outPut.innerHTML += `الطالب ${i} : حصل علي ${degree.value} : التقدير : ممتاز </br> 
              مبروك لتفوقك ايها البطل😍  <br>`;
        }
        else if(degree.value >= 80 && degree.value <90){
            outPut.innerHTML += ` الطالب ${i} : حصل علي ${degree.value} : التقدير : جيد جدا </br>
              مبروك لنجاحك ايها البطل⭐ <br>`;
        }
        else if(degree.value >= 70 && degree.value <80){
            outPut.innerHTML += ` الطالب ${i} : حصل علي ${degree.value} : التقدير : جيد </br> 
              مبروك لنجاحك ايها البطل😁 <br>`;
        }
        else if(degree.value >= 50 && degree.value <70){
            outPut.innerHTML += ` الطالب ${i} : حصل علي ${degree.value} : التقدير : مقبول </br>
              مبروك لنجاحك   😊<br>`;
        }
        else if(degree.value <= 50 && degree.value >0){
            outPut.innerHTML += ` الطالب ${i} : حصل علي ${degree.value} : التقدير : راسب </br> 
              حاول مرة اخري  😔<br>`;
        }
        else {
            outPut.innerHTML += `الرجاء ادخال درجة صحيحة ⚠️</br>`;
            return;
        }

        i++;
        degree.value = '';
    });
    

    


  
   
