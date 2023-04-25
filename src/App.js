import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import SelectComp from "./components/SelectComp";
import FirstModal from "./modal/FirstModal";
import SecondModal from "./modal/SecondModal";
import { useState } from "react";

function App() {
  const [modalFir, setModalFir] = useState(false)
  const [modalSec, setModalSec] = useState(false)
  return (
    <>
      <FirstModal modalFir={modalFir} setModalFir={setModalFir} />
      <SecondModal modalSec={modalSec} setModalSec={setModalSec} />
      <Button />
      <Input />
      <Modal setModalFir={setModalFir} setModalSec={setModalSec} />
      <SelectComp />
    </>
  );
}

export default App;