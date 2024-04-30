// var dataProject = [];

// function addProject(event) {
//     event.preventDefault();

//     let nama = document.getElementById("name").value;
//     let start = document.getElementById("start").value;
//     let end = document.getElementById("end").value;
//     let message = document.getElementById("text-area").value;
//     let upload = document.getElementById("formFile").files[0];
//     let uploadURL = URL.createObjectURL(upload);


//     if (nama === "") {
//         return alert("Please entered your project name!")
//     } else if (start === "") {
//         return alert("Please entered your start date!")
//     } else if (end === "") {
//         return alert("Please entered your end date!")
//     } else if (message === "") {
//         return alert("Please entered description!")
//     } else if (uploadURL === "") {
//         return alert("Please upload your image!")
//     }

//     if (start > end) {
//         return alert("404 errorrrrrrrrrrrr start date tidak boleh lebih besar dari end date !!")
//     }

//     let startDatePart = start.split("/")
//     let endDatePart = end.split("/")

//     let formatStartDate = startDatePart[2] + "-" + startDatePart[1] + "-" + startDatePart[0]
//     let formatEndtDate = endDatePart[2] + "-" + endDatePart[1] + "-" + endDatePart[0]

//     let newStartDate = new Date(formatStartDate)
//     let newEndtDate = new Date(formatEndtDate)

//     let timeDifference = newEndtDate - newStartDate

//     let differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

//     let differenceInMonths = Math.floor(differenceInDays / 30.44)

//     let differenceInYears = Math.floor(differenceInMonths / 12)

//     let duration;

//     if (differenceInYears > 0) {
//         duration = `${differenceInYears} years`
//     } else if (differenceInMonths > 0) {
//         duration = `${differenceInMonths} month`
//     } else {
//         duration = `${differenceInDays} days`
//     }



//     dataProject.push({
//         nama: nama,
//         start: start,
//         end: end,
//         message: message,
//         upload: uploadURL,
//         duration: duration
//     })

//     console.log(dataProject);

//     newData()
// }

// function newData() {
//     document.getElementById("card").innerHTML = ""

//     for (let i = 0; i < dataProject.length; i++) {
//         const project = dataProject[i]


//         document.getElementById("card").innerHTML += `
//         <div class="card" style="width: 18rem; margin: auto;">
//         <img src="${project.upload}" class="card-img-top" alt="dumbways">
//         <div class="card-body">
//           <h5 class="card-title">${project.nama}</h5>
//           <p class="card-text">${project.start} - ${project.end}</p>
//           <p class="duration">durasi : ${project.duration}</p>
//           <p class="card-text">${project.message}</p>
//           <div class="button-card">
//           <a href="#" class="btn btn-primary">edit</a>
//           <a href="#" class="btn btn-primary">deleted</a>
//           </div>
//         </div>
//       </div>
    
//     `
//     }

// }