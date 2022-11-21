import BookingTable from "./BookingTable";
import AwaitPriceTable from "./AwaitPriceTable";
import QuoteTable from "./QuoteTable";
import CreateJob from "./CreateJob";

export default function Page() {
  return (
    <div className="bg-[#F8F8F8] h-screen">
      {/* <AwaitPriceTable /> */}
      {/* if awaiting price tab is selected show this table */}

      <QuoteTable />
      {/* if quote price tab is selected show this table */}

      {/* <BookingTable />
      {/* if booking tab is selected show this table */}

      <CreateJob />
    </div>
  );
}
