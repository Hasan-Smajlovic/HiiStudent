import React from 'react'; 


export default function Profile(){

  return (<> 
    
     <form>
      <label>University</label>
      <input type="text" name="university" />
      <label>Major</label>
      <input type="text" name="major" />
      {/* other student-specific fields */}
    </form>
    </>
  );
};
