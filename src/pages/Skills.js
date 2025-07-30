import React from 'react'
import "../styles/Skills.css";

function Skills()
{
    return(
       <>
       
        <div class="allskills">
  {/* <!-- SKILL SET 1 --> */}
  <div class="frontend">
  <div className="head1"><h1>FRONTEND</h1></div>
    <div class="htmlskill">
      
      <div class="skillname">HTML</div><div class="html">
        <h3>90%</h3></div>
    </div>
  
  
    <div class="cssskill">
    <div class="skillname">CSS</div><div class="css"><h3>70%</h3></div>
  </div>
  
  
   <div class="jsskill">
   
     <div class="skillname">REACTJS</div><div class="javascript"><h3>80%</h3></div>
  </div>
  
  </div>

{/* <!-- SKILLS SET 2 --> */}
  <div class="moreskills">
  <div className="head2"><h1>BACKEND</h1></div>

    <div class="CPPskill">
      <div class="skillname">NODEJS</div><div class="cpp"><h3>95%</h3></div>
    </div>
  
  
    <div class="reactskill">
    <div class="skillname">EXPRESSJS</div><div class="react"><h3>75%</h3></div>
  </div>
  
  
   <div class="nodeskill"> <div class="skillname">MONGODB</div><div class="node"><h3>50%</h3></div>
  </div>
  
  </div>

  {/* <!-- SKILL SET 2 ENDS HERE --> */}

  <div class="programming">
  <div className="head3"><h1>PROGRAMMING</h1></div>
  
    <div class="Javaskill">
      <div class="skillname">JAVA</div><div class="Java"><h3>95%</h3></div>
    </div>
  
  
    <div class="Cskill">
    <div class="skillname">C/C++</div><div class="c"><h3>75%</h3></div>
  </div>
  
  
   <div class="Pythonskill"> <div class="skillname">PYTHON</div><div class="python"><h3>50%</h3></div>
  </div>
  
  </div>
</div>
       </>
    );
}
export default Skills
