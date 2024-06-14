import "./PersonalInfo.css";

const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <div className="personalInfo--container">
      <form>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
          }}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => {
            setFormData({ ...formData, confirmPassword: e.target.value });
          }}
        />
      </form>
    </div>
  );
};

export default PersonalInfo;
