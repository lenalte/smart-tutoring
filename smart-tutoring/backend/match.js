// import React, { useState } from 'react';

// function Questionnaire() {
//   // Use the useState hook to keep track of the answers
//   const [answers, setAnswers] = useState({});

//   // Handle changes to the form inputs
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
//   }

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     calculateMatch(answers);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Question 1:
//         <input type="text" name="question1" onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Question 2:
//         <input type="text" name="question2" onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Question 3:
//         <input type="text" name="question3" onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Question 4:
//         <input type="text" name="question4" onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Question 5:
//         <input type="text" name="question5" onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Question 6:
//         <input type="text" name="question6" onChange={handleChange} />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// function calculateMatch(answers) {
//     // Create a variable to keep track of the total number of matching answers
//     let matchingAnswers = 0;
//     let answers2 = {...answers}; // this is the second person answers, you can fetch them from the server or ask the user to fill them
//     // Iterate through the answers of the first person
//     for (let i = 1; i <= 6; i++) {
//       // Check if the answer of the first person matches the answer of the second person
//       if (answers[`question${i}`] === answers2[`question${i}`]) {
//         // If there is a match, increment the matchingAnswers variable
//         matchingAnswers++;
//       }
//     }
  
//     // Calculate the percentage of matching answers
//     const matchPercentage = (matchingAnswers / 6) * 100;
  
//     // You can use this match percentage to show it to the user or save it to the server
//     console.log(`Match percentage: ${matchPercentage}`);
//   }
  

  