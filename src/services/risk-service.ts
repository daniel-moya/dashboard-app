import { DangerIcon } from '../assets/icons/danger'
import { WarningIcon } from '../assets/icons/warning'
import { RiskScore } from '../types/application'
import { Risk } from '../constants/risk';
import { CheckCircleIcon } from '../assets/icons/check-circle';

const riskIconMap = {
  [Risk.low]: CheckCircleIcon,
  [Risk.medium]: WarningIcon,
  [Risk.high]: DangerIcon,
}

const riskColorMap = {
  [Risk.low]: 'green',
  [Risk.medium]: '#dac01a',
  [Risk.high]: 'red',
}

const riskPriorityMap = {
  [Risk.low]: 3,
  [Risk.medium]: 2,
  [Risk.high]: 1,
}



export const getRiskIcon = (risk: RiskScore) => {
  if (!risk) {
    return () => null;
  }
  const RiskIcon = risk in riskIconMap ? riskIconMap[risk] : () => null;
  return RiskIcon;
}


export const getRiskColor = (risk: RiskScore) => {
  if (!risk) {
    return 'black';
  }
  return risk in riskColorMap ? riskColorMap[risk] : 'black';
}

export const getRiskPriority = (risk: RiskScore): number => {
  if (!risk) {
    return 0;
  }
  return risk in riskPriorityMap ? riskPriorityMap[risk] : 0;
}



