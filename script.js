const text = [
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer"
    "Django Developer",
    "UI Designer"
];

let i = 0;

setInterval(() => {
    document.querySelector("h2").innerHTML = text[i];
    i++;
    if(i === text.length){
        i = 0;
    }
},2000);
function openImage(src){

    document.getElementById("popup").style.display="flex";

    document.getElementById("popup-img").src=src;

}

function closeImage(){

    document.getElementById("popup").style.display="none";

}

window.onclick=function(e){

    const popup=document.getElementById("popup");

    if(e.target===popup){

        closeImage();

    }

}
emailjs.init("vDR5FAhtmBstmlbtZ");
document
.getElementById("contact-form")
.addEventListener("submit", function(event){

event.preventDefault();

emailjs.sendForm(
"service_gzje39i",
"template_01tavh7",
this
)
.then(function(){

alert("Message Sent Successfully!");

document.getElementById("contact-form").reset();

}, function(error){

alert("Failed to send message");

console.log("EmailJS Error:", error);

alert(
    "Error: " +
    (error.text || error.message || JSON.stringify(error))
);

});

});
