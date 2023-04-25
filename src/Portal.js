import reactDom from "react-dom";

const Portal = ({ children }) => {
  const el = document.getElementById("portal"); // 독립 공간
  if(!el) {
    return null
  }
  return reactDom.createPortal(children, el);
};

export default Portal;