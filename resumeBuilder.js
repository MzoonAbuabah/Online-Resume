
 var bio = { name : "Mzoon Abuabah",
          role : "Information Systems Student",
         contacts:{mobile:"0555226746",email:"mzoon.abuabah@gmail.com",
         github:"MzoonAbuabah",location:"Saudi Arabia, Riyadh"},
    welcomeMessage: "A Welcome Msg Here!",
        skills: ["TeamWork","Microsoft Office"],
            biopic: "female.jpg"
            

        };


var education={
  schools: [ uni={name:"Princess Noura university",location:"Riyadh",degree:"Bachelor Degree",
            major:["Information Systems"],
  dates:"1-4-2015"}, 
            Highschool={name:"81 Highschool",location:"Riyadh",degree:"High school diploma",
            major:["Scientific"], dates:"11-6-2014"}],
  
  onlineCourses: [ UiPath={title:"UiPath",school:" RPA Academy", dates:"4-9-2019 ",
                    url:"https://academy.uipath.com"},
                  Python={title:"Python",school:" MISK Foundation", dates:"3-3-2019 ",
                    url:'https://misk.org.sa'}
                 ]

};

var work={ jobs:
          [internship={employer:"Mobily",title:"Intern",location:"Riyadh",
                            dates:"In progress",description:"Project Manager<br> Responsibilities: maintained plans and schedule, and coordinated between teams. "}]};

var projects={projects_arr:
              [web_development={title:"Online rental shop Multi-tier web development",dates:"5-6-2018",description:"Online rental shop Multi-tier web development using php, HTML, css, and JS.",images:"Proj1.png",image2:"projPic.png"},
                       
               hospital_sys={title:"Hospital Appointment System",dates:"3-2-2017",description:"Project analysis and design on a hospital appointment system.",images:""} ]
             
             };

 $(document).ready(function(){
 
 

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
   $("#header").append(formattedName);
     var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
   $("#header").append(formattedRole);
   
   var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
   $("#header").append(formattedMobile);
   var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
   $("#header").append(formattedEmail);
   var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
   $("#header").append(formattedGithub);
   var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
   $("#header").append(formattedLocation);
   
   var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
   $("#header").append(formattedPic);
   
   var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
   $("#header").append(formattedMsg);
   
     var formattedSkillsTitle = HTMLskillsStart;
   $("#header").append(formattedSkillsTitle);
   
   var formattedSkills0 = HTMLskills.replace("%data%", bio.skills[0]);
   $("#header").append(formattedSkills0);
   var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[1]);
   $("#header").append(formattedSkills1);
   
   
   var formattedJobEmp0 = HTMLworkEmployer.replace("%data%",work.jobs[0].employer);
   $("#workExperience").append(formattedJobEmp0);
   var formattedJobTitle0 = HTMLworkTitle.replace("%data%",work.jobs[0].title);
   $("#workExperience").append(formattedJobTitle0);
   var formattedJobLocation0 = HTMLworkLocation.replace("%data%",work.jobs[0].location);
   $("#workExperience").append(formattedJobLocation0);
   var formattedJobDates0 = HTMLworkDates.replace("%data%",work.jobs[0].dates);
   $("#workExperience").append(formattedJobDates0);
   var formattedJobDesc0 = HTMLworkDescription.replace("%data%",work.jobs[0].description);
   $("#workExperience").append(formattedJobDesc0);
   
   
   var formattedProTitle0 = HTMLprojectTitle.replace("%data%",projects.projects_arr[0].title);
   $("#projects").append(formattedProTitle0);
   var formattedProDates0 = HTMLprojectDates.replace("%data%",projects.projects_arr[0].dates);
   $("#projects").append(formattedProDates0);
   var formattedProDesc0 = HTMLprojectDescription.replace("%data%",projects.projects_arr[0].description);
   $("#projects").append(formattedProDesc0);
   var formattedProImg0 = HTMLprojectImage.replace("%data%",projects.projects_arr[0].images);
   $("#projects").append(formattedProImg0);
   var formattedProImg2 = HTMLprojectImage.replace("%data%",projects.projects_arr[0].image2);
   $("#projects").append(formattedProImg2);
   
   
   var formattedProTitle1 = HTMLprojectTitle.replace("%data%",projects.projects_arr[1].title);
   $("#projects").append(formattedProTitle1);
   var formattedProDates1 = HTMLprojectDates.replace("%data%",projects.projects_arr[1].dates);
   $("#projects").append(formattedProDates1);
   var formattedProDesc1 = HTMLprojectDescription.replace("%data%",projects.projects_arr[1].description);
   $("#projects").append(formattedProDesc1);
   var formattedProImg1 = HTMLprojectImage.replace("%data%",projects.projects_arr[1].images);
   $("#projects").append(formattedProImg1);
   
   var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[0].name);
   $("#education").append(formattedSchoolName);
   var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[0].degree);
   $("#education").append(formattedSchoolDegree);
   var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[0].location);
   $("#education").append(formattedSchoolLocation);
   var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[0].dates);
   $("#education").append(formattedSchoolDates);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[0].major[0]);
   $("#education").append(formattedSchoolMajor);
    
   
   var formattedSchoolName1 = HTMLschoolName.replace("%data%",education.schools[1].name);
   $("#education").append(formattedSchoolName1);
   var formattedSchoolDegree1 = HTMLschoolDegree.replace("%data%",education.schools[1].degree);
   $("#education").append(formattedSchoolDegree1);
   var formattedSchoolLocation1 = HTMLschoolLocation.replace("%data%",education.schools[1].location);
   $("#education").append(formattedSchoolLocation1);
   var formattedSchoolDates1 = HTMLschoolDates.replace("%data%",education.schools[1].dates);
   $("#education").append(formattedSchoolDates1);
    var formattedSchoolMajor1 = HTMLschoolMajor.replace("%data%",education.schools[1].major[0]);
   $("#education").append(formattedSchoolMajor1);
    
      var formattedOnlineClasses = HTMLonlineClasses;
   $("#education").append(formattedOnlineClasses);
   
   var formattedClassTitle0 = HTMLonlineTitle.replace("%data%",education.onlineCourses[0].title);
   $("#education").append(formattedClassTitle0);
   var formattedClassSchool0 = HTMLonlineSchool.replace("%data%",education.onlineCourses[0].school);
   $("#education").append(formattedClassSchool0);
   var formattedClassDate0 = HTMLonlineDates.replace("%data%",education.onlineCourses[0].dates);
   $("#education").append(formattedClassDate0);
   var formattedClassUrl0 = HTMLonlineURL.replace("%data%",education.onlineCourses[0].url);
   $("#education").append(formattedClassUrl0);
   

  
   var formattedClassTitle1 = HTMLonlineTitle.replace("%data%",education.onlineCourses[1].title);
   $("#education").append(formattedClassTitle1);
   var formattedClassSchool1 = HTMLonlineSchool.replace("%data%",education.onlineCourses[1].school);
   $("#education").append(formattedClassSchool1);
   var formattedClassDate1 = HTMLonlineDates.replace("%data%",education.onlineCourses[1].dates);
   $("#education").append(formattedClassDate1);
   
   var formattedClassUrl1 = HTMLonlineURL.replace("%data%",education.onlineCourses[1].url);
      $("#education").append(formattedClassUrl1);
  var formattedClassUrl1_r = education.onlineCourses[1].url;

  
   var formattedButton = internationalizeButton;
   $("#mapDiv").append(formattedButton);
      var formattedMap = googleMap;
   $("#mapDiv").append(formattedMap);
   

   var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
   $("#footerContacts").append(formattedMobile);
   var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
   $("#footerContacts").append(formattedEmail);
   var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
   $("#footerContacts").append(formattedGithub);
   var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
   $("#footerContacts").append(formattedLocation);
   

  
   
});




             