import "./Loading.css"
const Loading = () => {
  return (
    <div className="Loading mt-8 w-full flex justify-center items-center">
      <div className="spinner flex flex-row justify-center items-center">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

export default Loading;
