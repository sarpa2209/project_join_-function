List_of_crafts_array = [];

function submit() {
    var display_craft_array = [];

    for (var j = 1; j <= 4; j++) {
        var List_of_crafts = document.getElementById("List of crafts_" + j).Value

        console.log(name_of_student);
        name_of_student_array.push(name_of_student);
        console.log(name_of_student_array);

    }

    var lenght_of_name_of_students_array = name_of_student_array.length;
    console.log(lenght_of_name_of_students_array);

    for (var i = 1; i<=6; i++) {
        display_student_array.push("<h4>NAME - " + name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array);

        console.log(display_student_array);

        document.getElementById("display_name_with_commas").innerHTML = display_student_array;

        var remove_commas = display_student_array.join(" ");
        console.log(remove_commas);
        document.getElementById("display_name_without_commas").innerHTML = remove_commas;

        
    }
}

