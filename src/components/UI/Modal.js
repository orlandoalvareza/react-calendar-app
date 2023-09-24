import { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = () => {
  return <div className={classes.backdrop}/>
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Tab") {
        const focusableElements = portalElement.querySelectorAll(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
  
        if (event.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    };
  
    document.addEventListener("keydown", keyDownHandler);
  
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);  

  return <Fragment>
    {ReactDOM.createPortal(<Backdrop/>, portalElement)}
    {ReactDOM.createPortal(<div className={classes.modal}>{props.children}</div>, portalElement)}
  </Fragment>
}

export default Modal;