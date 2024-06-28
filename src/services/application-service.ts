import { Attribute } from '../types/application'

export const getAttributeLabelValue = (label: string, attributes: Array<Attribute>): string => {
  return attributes.find((attr: Attribute) => attr.label === label)?.value || '';
}
