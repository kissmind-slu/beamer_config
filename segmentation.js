var usr = currentUser();
var filteredVal = '';
var usrName= "";
var usrLastName= "";
var usrEmail= "";
var usrId = "";

if(usr){
    var filterAttr = [];
    
    //add current course
    if(usr.courseId){
        var currentCourseId = 'current-course-'+usr.courseId;
        filterAttr.push(currentCourseId);
    }
    //add other courses
    if(usr.courseIds){
        var otherCoursesIds = "";
        usr.courseIds.forEach(function(id, index){
            if (id!="meta") otherCoursesIds = otherCoursesIds + "has-enrolled-in-" + id + ";";
        });
        otherCoursesIds = otherCoursesIds.substring(0, otherCoursesIds.length - 1);
        filterAttr.push(otherCoursesIds);
    }
    
    //join all filters in one string
    filterAttr.forEach(function(el){
        filteredVal = filteredVal + el + ';';
    }); 
    
    usrName = usr.name;
    usrEmail = usr.email;
    usrId = usr.id.toString();
}


var beamer_config = {
    product_id : "BDEZxTtx9509", //DO NOT CHANGE: This is your product code on Beamer
    button_position: 'bottom-right', /*Position for the default notification button. Other possible values are 'bottom-left', 'top-left' and 'top-right'.*/
    filter : filteredVal,
    //usr info
    user_firstname : usrName,
    user_lastname : usrLastName,
    user_email : usrEmail,
    user_id : usrId
};
