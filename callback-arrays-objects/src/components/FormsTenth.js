import React, { useRef } from 'react'

function FormsTenth() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let englishInputRef = useRef();
    let teluguInputRef = useRef();
    let hindiInputRef = useRef();
    let mathsInputRef = useRef();
    let scienceInputRef = useRef();
    let socialInputRef = useRef();

    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let englishResultRef = useRef();
    let teluguResultRef = useRef();
    let hindiResultRef = useRef();
    let mathsResultRef = useRef();
    let scienceResultRef = useRef();
    let socialResultRef = useRef();

    let resultLabelref = useRef();

    let CalculateResult=()=>{
                let firstName=firstNameInputRef.current.value;
                let lastName=lastNameInputRef.current.value;
                let englishMarks=Number(englishInputRef.current.value);
                let teluguMarks=Number(teluguInputRef.current.value);
                let hindiMarks=Number(hindiInputRef.current.value);
                let mathsMarks=Number(mathsInputRef.current.value);
                let scienceMarks=Number(scienceInputRef.current.value);
                let socialMarks=Number(socialInputRef.current.value);
                let result

                if(englishMarks <35 || teluguMarks<35 || hindiMarks<35 || mathsMarks<35 || scienceMarks<35 || socialMarks<35){
                    result="Failed"
                }
                else{
                    result="Passed"
                }

                let totalMarks=englishMarks+teluguMarks+hindiMarks+mathsMarks+scienceMarks+socialMarks;
                resultLabelref.current.innerHTML=`${firstName} ${lastName} ${result} in tenth got total marks are ${totalMarks}`

                alert(`Total Marks are ${totalMarks}`);

        console.log("Calculate the result");
    };

    let firstNameonFocus=()=>{
        firstNameInputRef.current.style.backgroundColor="violet";
    }

    let firstNameonBlur=()=>{
        firstNameInputRef.current.style.backgroundColor="white";
    }

    let lastNameonFocus=()=>{
        lastNameInputRef.current.style.backgroundColor="violet";
    }

    let lastNameonBlur=()=>{
        lastNameInputRef.current.style.backgroundColor="white";   
    }

    let inputonFocus=(inputRef,bgColor="orange",textColor="black")=>{
        inputRef.current.style.backgroundColor=bgColor;
        inputRef.current.style.color=textColor;
    }

    let inputonChange=(inputRef,resultRef)=>{
        if(inputRef.current.value >=0 && inputRef.current.value<=100){
            if(inputRef.current.value >=35){
                resultRef.current.innerHTML="Pass";
                resultRef.current.style.backgroundColor="green";
            }
            else{
                resultRef.current.innerHTML="Fail";
                resultRef.current.style.backgroundColor="red"
            }
        }
        else{
            resultRef.current.innerHTML="Invalid";
            resultRef.current.style.backgroundColor="yellow";
        }
    }

    let inputonBlur=(inputRef)=>{
        inputRef.current.style.backgroundColor="white";
    }
    

    let calculateMarksResult=(engMarks,telMarks,hinMarks,matMarks,sciMarks,socMarks)=>{
        let passMarks=35;
        if(engMarks >= passMarks &&
           telMarks >= passMarks &&
           hinMarks >= passMarks &&
           matMarks >= passMarks &&
           sciMarks >= passMarks &&
           socMarks >= passMarks){
            console.log(`Student Passed in Tenth schooling`);
        }
        else{
            console.log(`Student Failed in Tenth schooling`);
        }
    }
    calculateMarksResult(67,36,56,78,89,50);

    let calculateMarksResults=(engMarks,telMarks,hinMarks,matMarks,sciMarks,socMarks,passFunction,failFunction)=>{
        let passMarks=35;
        if(engMarks >= passMarks &&
           telMarks >= passMarks &&
           hinMarks >= passMarks &&
           matMarks >= passMarks &&
           sciMarks >= passMarks &&
           socMarks >= passMarks){
            passFunction();
        }
        else{
            failFunction();
        }
    }
    calculateMarksResults(67,32,56,78,89,50,()=>{
        console.log(`Student Passed in Tenth schooling`);
    },()=>{
        console.log(`Student Failed in Tenth schooling`)
    });
    

    let dhoniDetails={
        firstName: "Mahendra singh",
        lastName: "Dhoni",
        Age: 43,
        Loaction: "Jharkhand",
        Team: "Chennai super kings",
        awards: "Padma shri",
        engMarks: 78,
        telMarks: 67,
        hinMarks: 80,
        matMarks: 90,
        sciMarks: 89,
        socMarks: 80,
        }
        console.log(dhoniDetails.firstName);
        console.log(dhoniDetails.lastName);
        console.log(dhoniDetails.Age);
        console.log(dhoniDetails.Team);
        console.log(`Dhoni is a best batter`);

        let bumrahDetails={
            firstName: "Jasprit Jasbirsingh",
            lastName: "Bumrah",
            Age: 30,
            Loaction: "Gujarat",
            Team: "Mumbai Indians",
            awards: "T20 World cup",
            engMarks: 89,
            telMarks: 90,
            hinMarks: 80,
            matMarks: 56,
            sciMarks: 78,
            socMarks: 92,
            }
            console.log(bumrahDetails.firstName);
            console.log(bumrahDetails.lastName);
            console.log(bumrahDetails.Loaction);
            console.log(bumrahDetails.awards);
            console.log(`Bumrah is a best bowler`);

            if(dhoniDetails.Age > bumrahDetails.Age){
                console.log(`Dhoni is senior`);
            }
            else{
                console.log(`Bumrah is senior`);
            }


            let {engMarks:DhoniengMarks,telMarks:DhonitelMarks,hinMarks:DhonihinMarks,matMarks:DhonimatMarks,sciMarks:DhonisciMarks,socMarks:DhonisocMarks}=dhoniDetails;
            console.log(DhoniengMarks,DhonitelMarks,DhonihinMarks,DhonimatMarks,DhonisciMarks,DhonisocMarks);

            let {engMarks:BumrahengMarks,telMarks:BumrahtelMarks,hinMarks:BumrahhinMarks,matMarks:BumrahmatMarks,sciMarks:BumrahsciMarks,socMarks:BumrahsocMarks}=bumrahDetails;
            console.log(BumrahengMarks,BumrahtelMarks,BumrahhinMarks,BumrahmatMarks,BumrahsciMarks,BumrahsocMarks);


            let hardikDetails=["Hardik Himanshu","Pandya","31","Gujarat","All rounder",88,99,57,80,90,60];
            console.log(hardikDetails);
            console.log(hardikDetails[3]);
            console.log(hardikDetails[1]);
            console.log(hardikDetails[6]);
            console.log(hardikDetails[9]);
            console.log(hardikDetails[2]);

            let [hardikfirstName,hardiklastName,hardikAge,hardikLocation,hardikrole,hardikengMarks,hardiktelMarks,hardikhinMarks,hardikmatMarks,hardiksciMarks,hardiksocMarks]=hardikDetails
            console.log(hardikfirstName,hardiklastName,hardikAge,hardikLocation,hardikrole,hardikengMarks,hardiktelMarks,hardikhinMarks,hardikmatMarks,hardiksciMarks,hardiksocMarks);
  return (
    <div>
      <form>
            <fieldset>
                <legend>Please enter your Marks and Calculate</legend>
            </fieldset>
        <div>
            <label>First Name</label>
            <input type="text" ref={firstNameInputRef}
            onFocus={()=>{
            firstNameonFocus();
            }}
            onBlur={()=>{
            firstNameonBlur();
            }}></input>
            <label ref={firstNameResultRef}></label>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" ref={lastNameInputRef}
            onFocus={()=>{
            lastNameonFocus();
            }}
            onBlur={()=>{
            lastNameonBlur();
            }}></input>
            <label ref={lastNameResultRef}></label>
        </div>
        <div>
            <label>English Marks</label>
            <input type="number" ref={englishInputRef} 
            onFocus={()=>{
            inputonFocus(englishInputRef,"yellow");
            }}
            onChange={()=>{
            inputonChange(englishInputRef,englishResultRef);
            }}
            onBlur={()=>{
            inputonBlur(englishInputRef);
            }}></input>
            <label ref={englishResultRef}></label>
        </div>
        <div>
            <label>Telugu Marks</label>
            <input type="number" ref={teluguInputRef}
            onFocus={()=>{
            inputonFocus(teluguInputRef);
            }}
            onChange={()=>{
            inputonChange(teluguInputRef,teluguResultRef);
            }}
            onBlur={()=>{
            inputonBlur(teluguInputRef);
            }}></input>
            <label ref={teluguResultRef}></label>
        </div>
        <div>
            <label>Hindi Marks</label>
            <input type="number" ref={hindiInputRef}
            onFocus={()=>{
            inputonFocus(hindiInputRef,"blue","white");
            }}
            onChange={()=>{
            inputonChange(hindiInputRef,hindiResultRef);
            }}
            onBlur={()=>{
            inputonBlur(hindiInputRef);
            }}></input>
            <label ref={hindiResultRef}></label>
        </div>
        <div>
            <label>Maths Marks</label>
            <input type="number" ref={mathsInputRef}
            onFocus={()=>{
            inputonFocus(mathsInputRef);
            }}
            onChange={()=>{
            inputonChange(mathsInputRef,mathsResultRef);
            }}
            onBlur={()=>{
            inputonBlur(mathsInputRef);
            }}></input>
            <label ref={mathsResultRef}></label>
        </div>
        <div>
            <label>Science Marks</label>
            <input type="number" ref={scienceInputRef}
            onFocus={()=>{
            inputonFocus(scienceInputRef,"pink");
            }}
            onChange={()=>{
            inputonChange(scienceInputRef,scienceResultRef);
            }}
            onBlur={()=>{
            inputonBlur(scienceInputRef);
            }}></input>
            <label ref={scienceResultRef}></label>
        </div>
        <div>
            <label>Social Marks</label>
            <input type="number" ref={socialInputRef}
            onFocus={()=>{
            inputonFocus(socialInputRef);
            }}
            onChange={()=>{
            inputonChange(socialInputRef,socialResultRef);
            }}
            onBlur={()=>{
            inputonBlur(socialInputRef);
            }}></input>
            <label ref={socialResultRef}></label>
        </div>
        <div>
            <label style={{width: "700px"}} ref={resultLabelref}>Please enter your Marks and Calculate</label>
        </div>
        <div>
            <button type="button" onClick={()=>{
                CalculateResult();
            }}>Calculate</button>
        </div>
      </form>
    </div>
  )
}

export default FormsTenth
