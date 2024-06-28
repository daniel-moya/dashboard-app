import { Status } from '../constants/status';
import { CheckIcon } from '../assets/icons/check';
import { MoreHorizontal } from '../assets/icons/more-horizontal';
import { WarningIcon } from '../assets/icons/warning';
import { DangerIcon } from '../assets/icons/danger';

const statusIconMap = {
  [Status.Approved]: CheckIcon,
  [Status['Ready For Review']]: WarningIcon,
  [Status['In Progress']]: MoreHorizontal,
  [Status['Rejected']]: DangerIcon,

};

export const getStatusIcon = (status: string) => {
  const StatusIcon = status in statusIconMap ? statusIconMap[status] : () => null;
  return StatusIcon;
};

const statusPriorityMap = {
  [Status.Approved]: 4,
  [Status['Ready For Review']]: 3,
  [Status['In Progress']]: 2,
  [Status.Rejected]: 1,
};

export const getStatusPriority = (status: string): number => {
  if (!status) {
    return 0;
  }
  return status in statusPriorityMap ? statusPriorityMap[status] : 0;
}



