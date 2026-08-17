import styles from "./SignUpList.module.scss";

const SignUpList = () => {
  return (
    <div className={styles.signUpList}>
      <ol>
        <li>
          <button>
            <div className={styles.stepText}>
              <p>STEP 1</p>
              <p>YOUR INFO</p>
            </div>
          </button>
        </li>
        <li>
          <button>
            <div className={styles.stepText}>
              <p>STEP 2</p>
              <p>SELECT PLAN</p>
            </div>
          </button>
        </li>
        <li>
          <button>
            <div className={styles.stepText}>
              <p>STEP 3</p>
              <p>ADD-ONS</p>
            </div>
          </button>
        </li>
        <li>
          <button>
            <div className={styles.stepText}>
              <p>STEP 4</p>
              <p>SUMMARY</p>
            </div>
          </button>
        </li>
      </ol>
    </div>
  );
};

export default SignUpList;
