import ChartBox from "@/Component/Shared/DashboardComponent/ChartBox/ChartBox";
import StatCard from "@/Component/Shared/DashboardComponent/StatCard/StatCard";

import TutorTable from "@/Component/Shared/DashboardComponent/TutorTable/TutorTable";



export default function AdminDashboard() {
  return (
    <>
      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-25 mt-25">
        <StatCard title="Total Tutors" value="1245" />
        <StatCard title="Guardians" value="3520" />
        <StatCard title="Active Jobs" value="320" />
        <StatCard title="Revenue" value="৳1,25,000" />
        
      </div>

      {/* CHART + TABLE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartBox />
        <TutorTable />
      </div>
    </>
  );
}
