function ButtonPlus(props) {
  const { classList, onClick } = props;
  return <button className={classList} onClick={onClick}></button>;
}

export default ButtonPlus;
