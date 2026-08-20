import Button from "@/components/ui/Button/Button";
import styles from "./PersonalInfo.module.scss";

interface IPersonalInfoProps {
  values: {
    name: string;
    email: string;
    phone: string;
  };
  onChange: (field: string, value: string) => void;
}

const PersonalInfo = ({ values, onChange }: IPersonalInfoProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <h1 className={styles.title}>Personal info</h1>
      <p className={styles.description}>
        Please provide your name, email address, and phone number.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="e.g Stephen King"
              onChange={(e) => onChange("name", e.target.value)}
              value={values.name}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="e.g stephenking@example.com"
              onChange={(e) => onChange("email", e.target.value)}
              value={values.email}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="e.g +447828133038"
              onChange={(e) => onChange("phone", e.target.value)}
              value={values.phone}
            />
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Button variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
