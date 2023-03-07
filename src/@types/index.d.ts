type CategoryType = {
  id: number;
  name: string;
};

type HouseholdType = {
  id: number;
  amount: number;
  registered_at: string;
  memo: string;
  category: CategoryType;
};

type PropType = {
  categories: CategoryType[];
  households: HouseholdType[];
};

type FillType = {
  match: {
    id: string;
  };
  id: string;
};

type ConvType = {
  id: string;
  label: string;
  value: number;
  color: string;
};
