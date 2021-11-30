import { useRouter } from "next/dist/client/router";
import Map from "../components/Map";
import Search from "../components/Search";

const search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  return (
    <Search
      location={location}
      startDate={startDate}
      endDate={endDate}
      noOfGuests={noOfGuests}
      searchResults={searchResults}
    />
  );
};

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://joealsaaidah.github.io/data/airbnb-data-3.json"
  ).then((res) => res.json());

  return {
    props: { searchResults },
  };
}
