import { createColumnHelper } from '@tanstack/react-table';
import { useQuery } from 'react-query';
import { Application } from '../types/application';
import { ActionIcon } from '../assets/icons/action';
import { getRiskColor, getRiskIcon, getRiskPriority } from '../services/risk-service';
import { getStatusIcon, getStatusPriority } from '../services/status-service';
import { Table } from '../components';
import { getFormattedDate, getFormattedTime } from '../services/date';
import { getApplications } from '../api/api';
import { getAttributeLabelValue } from '../services/application-service';


const columnHelper = createColumnHelper<Application>()
const columns = [
  columnHelper.accessor('createdAt', {
    header: 'Created',
    cell: info => <div>{getFormattedDate(info.getValue())}<div>{getFormattedTime(info.getValue())}</div></div>,
    sortingFn: 'datetime',
  }),
  columnHelper.accessor(row => Object.values(row.attributes), {
    header: 'Name',
    cell: info => {
      const firstName = getAttributeLabelValue("First name", info.getValue())
      const lastName = getAttributeLabelValue("Last name", info.getValue())
      const email = getAttributeLabelValue("Email", info.getValue())
      return <div>{firstName} {lastName}<div>{email}</div></div>;
    },
    sortingFn: (rowA, rowB) => {
      const aAttributes = Object.values(rowA.original.attributes);
      const bAttributes = Object.values(rowB.original.attributes);

      const firstNameA = getAttributeLabelValue("First name", aAttributes);
      const lastNameA = getAttributeLabelValue("Last name", aAttributes);

      const firstNameB = getAttributeLabelValue("First name", bAttributes);
      const lastNameB = getAttributeLabelValue("Last name", bAttributes);

      return (firstNameA + '' + lastNameA).localeCompare(firstNameB + lastNameB);
    },
  }),
  columnHelper.accessor('type', {
    header: 'Type',
    cell: info => info.getValue(),
    sortingFn: (rowA, rowB) => rowA.original.type.localeCompare(rowB.original.type),
  }),
  columnHelper.accessor('riskScoring.currentCategory', {
    header: 'Risk Score',
    cell: info => {
      const RiskIcon = getRiskIcon(info.getValue());
      return <div style={{ display: 'flex', color: getRiskColor(info.getValue()) }}><span style={{ marginRight: '.2rem' }} ><RiskIcon /></span>{info.getValue() || 'Not Calculated'}</div>;
    },
    sortingFn: (rowA, rowB) => {
      return getRiskPriority(rowA.original.riskScoring.currentCategory) - getRiskPriority(rowB.original.riskScoring.currentCategory)
    },
  }),
  columnHelper.accessor('statusName', {
    header: 'Status',
    cell: info => {
      const StatusIcon = getStatusIcon(info.getValue());
      return <div style={{ display: 'flex' }}><span style={{ marginRight: '.2rem' }} ><StatusIcon /></span>{info.getValue()}</div>;
    },
    sortingFn: (rowA, rowB) => {
      return getStatusPriority(rowA.original.statusName) - getStatusPriority(rowB.original.statusName)
    },
  }),
  columnHelper.accessor(row => row.id, {
    header: 'Action',
    cell: info => <button onClick={() => alert('Application id: ' + info.getValue())}><ActionIcon /></button>,
    enableSorting: false,
  }),
];

function ApplicationsTable() {
  const { status, data } = useQuery('applications', () => getApplications())

  if (status === 'loading') return <>'Loading...'</>

  if (status === 'error') return <>'An error has occurred'</>

  return (
    <div>
      <Table
        data={data.items || []}
        columns={columns}
      />
    </div>
  );
}

export default ApplicationsTable;

