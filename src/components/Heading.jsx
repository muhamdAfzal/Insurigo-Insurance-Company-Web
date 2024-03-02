const Heading = ({
  element1,
  element2,
  color1 = "text-primary",
  color2,
  smallText = "text-[40px]",
  largeText = "xl:text-[50px]",
}) => {
  return (
    <h2
      className={`${smallText} ${largeText} font-bold leading-[55px] xl:leading-[70px] ${color1}`}
    >
      <span className={`${color2}`}>{element2}</span> {element1}
    </h2>
  );
};

export default Heading;
