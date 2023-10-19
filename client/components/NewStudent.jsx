import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
export function NewStudent() {
    const [name, setName] = useState();
    const [studyprogram, setStudyprogram] = useState();
    const newStudent = { name, studyprogram };
    const navigate = useNavigate();
    async function handleSubmitNewStudent(event) {
        event.preventDefault(); //To remove the "?" from the Url


            const response = await fetch("../api/student/", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({name,studyprogram})
            });

            if(!response.ok){
                throw new Error("LOL NOE GIKK GALT" + response.statusText);
            }

        navigate("/students");
    }

    return (
        <>
            <form onSubmit={handleSubmitNewStudent}>
                <h2>Add a new student:</h2>
                <p>
                    Name: <br />
                    <input
                        type="text"
                        autoFocus={true} // automatically focus input field so you can type without clicking it
                        value={name}
                        name="name"
                        onChange={(event) => setName(event.target.value)}
                    />
                </p>
                <p>
                    Study Program: <br />
                    <input
                        type="text"
                        name="studyprogram"
                        value={studyprogram}
                        onChange={(event) => setStudyprogram(event.target.value)}
                    />
                </p>
                <button>Submit</button>
                <pre>{JSON.stringify(newStudent, null, "  ")}</pre>
            </form>
        </>
    );
}