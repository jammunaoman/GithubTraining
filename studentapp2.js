function readstudentdata() {
  var sdata = {};
  sdata.name = document.querySelector("#sname").value;
  sdata.gender = document.querySelector("input[name=sgender]:checked").value;
  sdata.class = document.querySelector("#sClass").value;
  
  /*sdata.marks = [];
  var id;
  for (var i = 0; i <= 4; i++) {
    id = "#m" + (i + 1);
    sdata.marks[i] = document.querySelector(id).value;
    sdata.marks[i] = parseInt(sdata.marks[i]);
  }
  sdata.getTotalandAvg = function () {
    sdata.total = 0;
    for (var i = 0; (i = sdata.marks.length); i++) {
      this.total += this.marks[i];
    }
    this.avg = this.total / 5;
  };
  */
   var m1=document.querySelector('#m1').value;
   m1=parseInt(m1);
    var m2=document.querySelector('#m2').value;
    m2=parseInt(m2);
   var m3=document.querySelector('#m3').value;
   m3=parseInt(m3);
   var m4=document.querySelector('#m4').value;
   m4=parseInt(m4);
  var m5= document.querySelector('#m5').value;
  m5=parseInt(m5);
   
   sdata.total=m1+m2+m3+m4+m5;
   sdata.avg = this.total / 5;

  sdata.getgrade = function () {
    sdata.grade = "";
    if (this.avg >= 40) {
      this.grade = "you have passed";
    } else {
      this.grade = "hey you have surprise";
    }
  };

  sdata.displaydata = function () {
   // this.getTotalandAvg();
    this.getgrade();

    document.querySelector("#d_name").innerText = this.name;
    console.log("student name " + sdata.name);

    document.querySelector("#d_gender").innerText = sdata.gender;
    console.log("student gender " + this.gender);

    console.log("student class " + this.class);
    document.querySelector("#d_class").innerText = this.class;

    document.querySelector("#d_total").innerText = sdata.total;
    console.log("total " + this.Total);

    document.querySelector("#d_avg").innerText = this.avg;
    console.log("Avg " + this.avg);

    document.querySelector("#d_grade").innerText = this.grade;
    console.log("grade " + this.grade);
  };
  sdata.displaydata();
}
