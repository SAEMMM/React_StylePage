import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import SelectComp from "./components/SelectComp";
import FirstModal from "./modal/FirstModal";
import SecondModal from "./modal/SecondModal";
import { useState } from "react";

function App() {
  return (
    <>
      <Button />
      <Input />
      <Modal />
      <SelectComp />
    </>
  );
}

export default App;