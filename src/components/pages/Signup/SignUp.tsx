import { useState } from "react";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import styles from "./SignUp.module.scss";
import SignUpList from "./SignUpList/SignUpList";
import { SignUpSection } from "@/types/types";

export const steps = [
  { step: 1, title: "YOUR INFO", label: "info" },
  { step: 2, title: "SELECT PLAN", label: "plan" },
  { step: 3, title: "ADD-ONS", label: "addons" },
  { step: 4, title: "SUMMARY", label: "summary" },
];

const SignUp = () => {
  const [signUpSection, setSignUpSection] = useState<SignUpSection>("info");
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const renderDetailSection = () => {
    switch (signUpSection) {
      case "info":
        return (
          <PersonalInfo
            values={personalInfo}
            onChange={(field, value) => {
              setPersonalInfo((current) => ({
                ...current,
                [field]: value,
              }));
            }}
          />
        );
      case "plan":
        return <div>Plan Section</div>;
      case "addons":
        return <div>Addons Section</div>;
      case "summary":
        return <div>Summary Section</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.desktopOnly}>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <SignUpList
              signUpSection={signUpSection}
              setSignUpSection={setSignUpSection}
            />
          </div>
          <div className={styles.gridItem}>{renderDetailSection()}</div>
        </div>
      </div>
      <div className={styles.mobileOnly}>
        <div className={styles.mobileBanner}>
          <ol className={styles.mobileSteps}>
            {steps.map((step) => (
              <li key={step.step}>
                <button
                  className={styles.stepNumber}
                  data-active={step.label === signUpSection}
                >
                  {step.step}
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.mobileContent}>{renderDetailSection()}</div>
      </div>
    </>
  );
};

export default SignUp;
