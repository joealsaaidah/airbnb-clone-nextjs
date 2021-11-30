import { format } from "date-fns";
import InfoCard from "./InfoCard";
const Search = ({
  location,
  startDate,
  endDate,
  noOfGuests,
  searchResults,
}) => {
  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  return (
    <section className='flex-grow pt-14 px-6'>
      <p className='text-xs'>
        300+ Stays - {range} - for {noOfGuests} guests
      </p>
      <h1 className='text-3xl font-semibold mt-2 mb-6 '>Stays in {location}</h1>
      <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
        <p className='button'>Cancellation Flexibility</p>
        <p className='button'>Type of Places</p>
        <p className='button'>Price</p>
        <p className='button'>Rooms and Beds</p>
        <p className='button'>More Filters</p>
      </div>
      <div className='flex flex-col'>
        {searchResults.map((item) => (
          <InfoCard
            key={item.id}
            img={item.img}
            location={item.location}
            title={item.title}
            desc={item.description}
            star={item.star}
            price={item.price}
            total={item.total}
          />
        ))}
      </div>
    </section>
  );
};

export default Search;