import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <div className="loader">
      <h1 className="quote-1">
        God beautifully makes the lives bloom like a flower of fragrance!
      </h1>
      <h4 className="quote-2">
        His sovereign plan has brought Roselin and Joshua together!
      </h4>
      <ThreeDots
        visible={true}
        height="100"
        width="100"
        color="#fff"
        secondaryColor="#fff"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
