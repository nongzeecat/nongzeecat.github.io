let buttonSkill = document.getElementById("buttonSkill");

let h1Skill = document.getElementById("h1Skill");
let Header1 = document.getElementById("boxHeader1");
let Header2 = document.getElementById("boxHeader2");
let Header3 = document.getElementById("boxHeader3");
let Header4 = document.getElementById("boxHeader4");

let Picture1 = document.getElementById("boxPic1");
let Picture2 = document.getElementById("boxPic2");
let Picture3 = document.getElementById("boxPic3");
let Picture4 = document.getElementById("boxPic4");


let heading = ["My Programming Skill", "My Sport Skill", "Other Skill"];

let boxHeader1 = ["BASIC", "FOOTBALL", "BLENDER"];
let boxHeader2 = ["BASIC", "BASKETBALL", "SKETCHUP"];
let boxHeader3 = ["BASIC", "MUAYTHAI", "PHOTOSHOP"];
let boxHeader4 = ["BASIC", "TAKRAW", "PREMIERE"];

let Picture_1 = ["HTML.png", "Football.png", "blender.png"]
let Picture_2 = ["CSS.png", "basketball.png", "sketchup.png" ]
let Picture_3 = ["JS.png", "boxbox.png", "photoshop.png" ]
let Picture_4 = ["python.png", "takraw.png", "premiere pro.png" ]

let showlistskill = 0;
let showlistHeader1 = 0;
let showlistHeader2 = 0;
let showlistHeader3 = 0;
let showlistHeader4 = 0;

let showlistPicture1 = 0;
let showlistPicture2 = 0;
let showlistPicture3 = 0;
let showlistPicture4 = 0;

buttonSkill.addEventListener("click", function() {
    // เปลี่ยนหัวข้อของ H1
    h1Skill.innerHTML = heading[showlistskill];
    showlistskill = (showlistskill + 1) % heading.length;

    // เปลี่ยนหัวข้อของกล่องที่ 1
    Header1.innerHTML = boxHeader1[showlistHeader1];
    showlistHeader1 = (showlistHeader1 + 1) % boxHeader1.length;

    // เปลี่ยนหัวข้อของกล่องที่ 2
    Header2.innerHTML = boxHeader2[showlistHeader2];
    showlistHeader2 = (showlistHeader2 + 1) % boxHeader2.length;

    // เปลี่ยนหัวข้อของกล่องที่ 3
    Header3.innerHTML = boxHeader3[showlistHeader3];
    showlistHeader3 = (showlistHeader3 + 1) % boxHeader3.length;

    // เปลี่ยนหัวข้อของกล่องที่ 4
    Header4.innerHTML = boxHeader4[showlistHeader4];
    showlistHeader4 = (showlistHeader4 + 1) % boxHeader4.length;

    // เปลี่ยนรูปภาพกล่องที่ 1
    Picture1.src = Picture_1[showlistPicture1];
    showlistPicture1 = (showlistPicture1 + 1) % Picture_1.length;

    // เปลี่ยนรูปภาพกล่องที่ 2
    Picture2.src = Picture_2[showlistPicture2];
    showlistPicture2 = (showlistPicture2 + 1) % Picture_2.length;

    // เปลี่ยนรูปภาพกล่องที่ 3
    Picture3.src = Picture_3[showlistPicture3];
    showlistPicture3 = (showlistPicture3 + 1) % Picture_3.length;

    // เปลี่ยนรูปภาพกล่องที่ 4
    Picture4.src = Picture_4[showlistPicture4];
    showlistPicture4 = (showlistPicture4 + 1) % Picture_4.length;

});