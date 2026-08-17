import { useState } from "react";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import styles from "./SignUp.module.scss";
import SignUpList from "./SignUpList/SignUpList";
import { SignUpSection } from "@/types/types";

const SignUp = () => {
  const [signUpSection, setSignUpSection] = useState<SignUpSection>("info");

  const renderDetailSection = () => {
    switch (signUpSection) {
      case "info":
        return <PersonalInfo />;
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
            <SignUpList />
          </div>
          <div className={styles.gridItem}>{renderDetailSection()}</div>
        </div>
        {/* <Grid w="100%" gap={0}>
            <Grid.Col
              span={listSpan}
              className={classNames(classes.col, classes.sidebar)}
              style={{ minWidth: "260px" }}
            >
              {listLoading ? <Loading /> : list}
            </Grid.Col>

            <Grid.Col
              span={detailSpan}
              className={classNames(classes.col, classes.mainContent)}
            >
              {detailLoading ? <Loading /> : detail}
            </Grid.Col>
          </Grid> */}
      </div>
      <div className={styles.mobileOnly}>Mobile content</div>
      {/* {isMobile ? (
        <Box mx={20}>
          {view === ProfileView.LIST ? (
            <Box>
              <Text
                size="32px"
                lh="40px"
                fw={700}
                my="lg"
                c={theme.colors.blue[8]}
              >
                {header}
              </Text>
              {listLoading ? <Loading /> : list}
            </Box>
          ) : (
            <Box> {detailLoading ? <Loading /> : detail}</Box>
          )}
        </Box>
      ) : (
        <Box className={classes.wrapper}>
          <Grid w="100%" gap={0}>
            <Grid.Col
              span={listSpan}
              className={classNames(classes.col, classes.sidebar)}
              style={{ minWidth: "260px" }}
            >
              {listLoading ? <Loading /> : list}
            </Grid.Col>

            <Grid.Col
              span={detailSpan}
              className={classNames(classes.col, classes.mainContent)}
            >
              {detailLoading ? <Loading /> : detail}
            </Grid.Col>
          </Grid>
        </Box>
      )} */}
    </>
  );
};

export default SignUp;
