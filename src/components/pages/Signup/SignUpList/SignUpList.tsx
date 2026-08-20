import classNames from "classnames";
import styles from "./SignUpList.module.scss";
import { Dispatch, SetStateAction } from "react";
import { SignUpSection } from "@/types/types";
import { steps } from "../SignUp";

interface ISignUpListProps {
  signUpSection: string;
  setSignUpSection: Dispatch<SetStateAction<SignUpSection>>;
}

const SignUpList = ({ signUpSection, setSignUpSection }: ISignUpListProps) => {
  return (
    <div className={styles.signUpList}>
      <ol>
        {steps.map((step) => (
          <li key={step.step} className={styles.listItem}>
            <button
              className={styles.stepButton}
              onClick={() => setSignUpSection(step.label as SignUpSection)}
            >
              <div
                className={classNames(styles.stepNumber, {
                  [styles.active]: step.label === signUpSection,
                })}
              >
                {step.step}
              </div>
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
