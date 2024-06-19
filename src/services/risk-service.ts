import { DangerIcon } from '../assets/icons/danger'
import { WarningIcon } from '../assets/icons/warning'
import { RiskScore } from '../types/application'
import { Risk } from '../constants/risk';
import { CheckCircleIcon } from '../assets/icons/check-circle';

const riskIconMap = {
  [Risk.Low]: CheckCircleIcon,
  [Risk.Average]: WarningIcon,
  [Risk.High]: DangerIcon,
}

const riskColorMap = {
  [Risk.Low]: 'green',
  [Risk.Average]: '#dac01a',
  [Risk.High]: 'red',
}

const riskPriorityMap = {
  [Risk.Low]: 3,
  [Risk.Average]: 2,
  [Risk.High]: 1,
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



