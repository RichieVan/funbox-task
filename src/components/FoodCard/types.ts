export interface FoodCardListItem {
  numberValue?: number;
  text: string;
}

export interface FoodCardProps {
  selected?: boolean;
  disabled?: boolean;
  name?: string;
  filling?: string;
  features?: FoodCardListItem[];
  weightValue?: string;
  weightUnit?: string;
  slogan?: string;
  deselectSlogan?: string;
  footerText?: string;
}
