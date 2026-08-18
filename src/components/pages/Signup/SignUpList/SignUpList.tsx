import styles from "./SignUpList.module.scss";

const SignUpList = () => {
  const steps = [
    { step: 1, title: "YOUR INFO" },
    { step: 2, title: "SELECT PLAN" },
    { step: 3, title: "ADD-ONS" },
    { step: 4, title: "SUMMARY" },
  ];

  return (
    <div className={styles.signUpList}>
      <ol>
        {steps.map((step) => (
          <li key={step.step} className={styles.listItem}>
            <button className={styles.stepButton}>
              <div className={styles.stepNumber}>{step.step}</div>
              <div className={styles.stepText}>
                <p className={styles.stepLabel}>STEP {step.step}</p>
                <p className={styles.stepTitle}>{step.title}</p>
              </div>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SignUpList;
