import { Status as StatusType } from '../types/application'
import { Status } from '../constants/status';
import { CheckIcon } from '../assets/icons/check';
import { MoreHorizontal } from '../assets/icons/more-horizontal';

const statusIconMap = {
  [Status.Approved]: CheckIcon,
  [Status.Processing]: MoreHorizontal,
  [Status.Invited]: MoreHorizontal,
};

export const getStatusIcon = (status: StatusType) => {
  const StatusIcon = status in statusIconMap ? statusIconMap[status] : () => null;
  return StatusIcon;
};


const statusTextMap = {
  [Status.Approved]: 'Approved',
  [Status.Processing]: 'Customer Processing',
  [Status.Invited]: 'User Accepted KYC Invitation',
};

const statusPriorityMap = {
  [Status.Approved]: 3,
  [Status.Processing]: 2,
  [Status.Invited]: 1,
};

export const getStatusText = (status: StatusType) => {
  return status in statusTextMap ? statusTextMap[status] : 'Unknown';
};


export const getStatusPriority = (status: StatusType): number => {
  if (!status) {
    return 0;
  }
  return status in statusPriorityMap ? statusPriorityMap[status] : 0;
}



