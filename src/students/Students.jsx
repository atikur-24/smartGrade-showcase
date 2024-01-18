import Search from "./Search";
import StudentsTable from "./StudentsTable";

export default function Students() {
  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <Search />
        <StudentsTable />
      </div>
    </section>
  );
}
