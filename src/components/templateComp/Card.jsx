const Card = ({ children, className }) => {
  return (
    <>
      <div className={`rounded-xl m-1 mb-2 shadow-xl p-2 ${className} `}>
        {children}
      </div>
    </>
  );
};

export default Card;
