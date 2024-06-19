import { useEffect, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { useQuery } from 'react-query';
import { Application } from '../types/application';
import { ActionIcon } from '../assets/icons/action';
import { getRiskColor, getRiskIcon, getRiskPriority } from '../services/risk-service';
import { getStatusIcon, getStatusPriority, getStatusText } from '../services/status-service';
import { applications } from './mocked-data';
import { Table } from '../components';
import { getFormattedDate, getFormattedTime } from '../services/date';


const columnHelper = createColumnHelper<Application>()
const columns = [
  columnHelper.accessor('created', {
    header: 'Created',
    cell: info => <div>{getFormattedDate(info.getValue())}<div>{getFormattedTime(info.getValue())}</div></div>,
    sortingFn: 'datetime',
  }),
  columnHelper.accessor(row => row.applicant, {
    header: 'Name',
    cell: info => <div>{info.getValue().name}<div>{info.getValue().email}</div></div>,
    sortingFn: (rowA, rowB) => {
      return rowA.original.applicant.name.localeCompare(rowB.original.applicant.name)
    },
  }),
  columnHelper.accessor('type', {
    header: 'Type',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('riskScore', {
    header: 'Risk Score',
    cell: info => {
      const RiskIcon = getRiskIcon(info.getValue());
      return <div style={{ display: 'flex', color: getRiskColor(info.getValue()) }}><span style={{ marginRight: '.2rem' }} ><RiskIcon /></span>{info.getValue() || 'Not Calculated'}</div>;
    },
    sortingFn: (rowA, rowB) => {
      return getRiskPriority(rowA.original.riskScore) - getRiskPriority(rowB.original.riskScore)
    },
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: info => {
      const StatusIcon = getStatusIcon(info.getValue());
      return <div style={{ display: 'flex' }}><span style={{ marginRight: '.2rem' }} ><StatusIcon /></span>{getStatusText(info.getValue())}</div>;
    },
    sortingFn: (rowA, rowB) => {
      return getStatusPriority(rowA.original.status) - getStatusPriority(rowB.original.status)
    },
  }),
  columnHelper.accessor(row => row.id, {
    header: 'Action',
    cell: info => <button onClick={() => alert('Application id: ' + info.getValue())}><ActionIcon /></button>,
    enableSorting: false,
  }),

];

function ApplicationsTable() {
  const { isLoading, error, data } = useQuery('applications', () =>
    // TODO: Fetch applications from backend
    // fetch('https://api.greatgood.com/applications').then(res =>
    //   res.json()
    // )
    //
    applications
  )

  const [rows, setRows] = useState<Application[]>([])

  useEffect(() => {
    if (data) {
      setRows(data);
    }
  }, [data]);

  if (isLoading) return <>'Loading...'</>

  if (error) return <>'An error has occurred'</>

  return (
    <div>
      <Table
        data={rows}
        columns={columns}
      />
    </div>
  );
}

export default ApplicationsTable;

