import{NewStudent} from "./NewStudent";
import {useEffect, useState} from "react";

export function AllStudents( ) {

    const [students, setStudents] = useState([])

    async function fetchStudents(){
        try{

            const response = await fetch("api/student/");

            const students = await response.json();

            setStudents(students);

        } catch (error){
            throw error;
        }
    }

    useEffect(() => {
        fetchStudents();
    }, []);


    return (
        <>
            <h2>All students at Kristiania</h2>
            {students.map((student) => (
                <StudentListing name={student.name} studyprogram={student.studyprogram} />
            ))}
        </>
    );
}


function StudentListing({name,studyprogram}) {
    return (
        <div>
            <p>
            {name}: {studyprogram}
            </p>
        </div>
    );
}




