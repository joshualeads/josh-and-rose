import { Wrapper, Status } from "@googlemaps/react-wrapper";

const YOUR_API_KEY = "AIzaSyChOepRDJyXnojR4IWv5ACiGMmKYOxbzXU";

const Map = (status) => {
  switch (status) {
    case Status.LOADING:
      return <Spinner />;

    case Status.FAILURE:
      return <ErrorComponent />;

    case Status.SUCCESS:
      return <LocationMap />;
  }
};

const LocationMap = () => {
  <Wrapper apiKey={YOUR_API_KEY}>
    <MyMapComponent />
  </Wrapper>;
};

export default Map;
