import * as React from "react";
import { Button, CircleButton, Modal, Image } from "components/lib";
import LoginForm from "components/LoginForm";

export default function LoginPage() {
  const [openModal, setOpenModal] = React.useState("none");
  const openLoginHandler = () => setOpenModal("login");
  const openRegisterHandler = () => setOpenModal("register");
  const closeDialogHandler = () => setOpenModal("none");
  const registerHandler = (data) => {
    console.log(data);
  };
  const loginHandler = (data) => {
    console.log(data);
  };
  return (
    <div style={{ maxWidth: "320px", margin: "20vh auto" }}>
      <Image
        src="https://avatars.githubusercontent.com/u/3837437?s=460&u=41dbd69ae36d8fe8a6f8834d160b495d1b640d7b&v=4"
        alt="bookshelf"
        width="80"
      />
      <h1>Bookshelf</h1>
      <div>
        <Button onClick={openLoginHandler} style={{ marginRight: "16px" }}>
          Login
        </Button>
        <Button onClick={openRegisterHandler} variant="secondary">
          Register
        </Button>
      </div>
      <Modal aria-label="Login form" isOpen={openModal === "login"}>
        <CircleButton onClick={closeDialogHandler}>x</CircleButton>
        <LoginForm buttonText={"Login"} onSubmit={loginHandler} />
      </Modal>
      <Modal aria-label="Register form" isOpen={openModal === "register"}>
        <CircleButton onClick={closeDialogHandler}>x</CircleButton>
        <LoginForm buttonText="Register" onSubmit={registerHandler} />
      </Modal>
    </div>
  );
}
