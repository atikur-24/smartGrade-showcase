import studentsData from "../../public/studentsData.json";
import ClassTitle from "./ClassTitle.jsx";
import Row from "./Row";

export default function StudentsTable() {
  // load all students data to filter class wise (class one, two & three)
  const studentOfClassOne = studentsData.filter((student) => student.class === "one");
  const studentOfClassTwo = studentsData.filter((student) => student.class === "two");
  const studentOfClassThree = studentsData.filter((student) => student.class === "three");

  return (
    <div className="max-w-[848px] mx-auto overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#FFFFFF0D]">
            <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">ID</th>
            <th className="p-5 text-sm md:text-xl font-semibold text-left">Name</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {/* class one student info show to ui */}
          <ClassTitle orderNum="Class One" />
          <Row students={studentOfClassOne} />
          {/* class two student info show to ui */}
          <ClassTitle orderNum="Class Two" />
          <Row students={studentOfClassTwo} />
          {/* class three student info show to ui */}
          <ClassTitle orderNum="Class Three" />
          <Row students={studentOfClassThree} />
        </tbody>
      </table>
    </div>
  );
}
