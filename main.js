name_of_student_array=[];
function submit(){
    var display_array=[];
    for(var i=1;i<=4;i++){  
        var name_of_student=document.getElementById("name_of_the_student_"+ i).value;
 console.log(name_of_student);
 name_of_student_array.push(name_of_student);

    }
var length_of_array=name_of_student_array.length;
for(var k=0;k<length_of_array;k++){
    display_array.push("<h4>Name-"+name_of_student_array[k]+"</h4>");
    console.log(display_array);

}
document.getElementById("display_name_with_commas").innerHTML=display_array;
var remove_commas=display_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}