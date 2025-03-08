import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>User Registration</h1>

      <h2>Controlled Form</h2>
      <RegistrationForm />

      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;
