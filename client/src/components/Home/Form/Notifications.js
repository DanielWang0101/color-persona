import React from "react";
import { Notification } from "./styled-components";
import { FiCheck, FiX } from "react-icons/fi";
const Notifications = ({ response, setResponse }) => {
  if (response) {
    setTimeout(() => {
      setResponse(null);
    }, 2000);
    return (
      <Notification success={response.success}>
        {response.message} {response.success ? <FiCheck /> : <FiX />}
      </Notification>
    );
  }
  return null;
};

export default Notifications;
