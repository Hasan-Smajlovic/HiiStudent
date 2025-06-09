import { useContext } from "react";
import { AuthContext } from "../../services/AuthContext";
import StudentProfileForm from "./StudentProfileForm";
import EmployerProfileForm from "./EmployerProfileForm";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) return <div>Please log in</div>;

  return (<>
    <Navbar />
    <div>
        
      <h1>Update Profile</h1>

      {user.role === "employer" && <EmployerProfileForm />}
      {user.role === "student" && <StudentProfileForm />}
    </div>
        <Footer />
    </>
  );
}
