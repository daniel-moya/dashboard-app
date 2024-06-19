import ApplicationMetrics from './application-metrics';
import ApplicationsTable from './applications-table';

function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="dashboard">
        <h2>KYC Application Reports</h2>
        <ApplicationMetrics />
        <ApplicationsTable />
      </div>
    </div>
  );
}

export default Dashboard;

