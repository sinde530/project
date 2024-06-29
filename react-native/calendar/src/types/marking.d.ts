import { MarkingProps } from 'react-native-calendars/src/calendar/day/marking';

export interface CustomMarkingProps extends MarkingProps {
  // texts?: string[];
  selected?: boolean;
  marked?: boolean;
  selectedColor?: string;
  dotColor?: string;
  texts?: string[];
  activeOpacity?: number;
}
