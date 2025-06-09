import React from 'react';


export default function EmployerProfileForm(){

  return (<>
    <form>
      <label>Company Name</label>
      <input type="text" name="company" />
      <label>Industry</label>
      <input type="text" name="industry" />
      {/* other employer-specific fields */}
    </form>
    </>
  );
};
