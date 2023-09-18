import classes from './Input.module.css';

const Input = (props) => {
  return (
    <input 
      className={classes.input} 
      onChange={props.onChange} 
      value={props.value} 
      type={props.type || 'text'} 
      id={props.id}  
      min={props.min} 
      max={props.max}
    />
  )
}

export default Input;