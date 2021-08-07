export interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  verified: boolean;
  created_at: string;
  middle_initial: string;
  district: number;
  active: boolean;
}

export interface UsersState {
  users: UserData[];
  status: 'idle' | 'loading' | 'successful';
}

export interface District {
  users: UserData[];
  districtValue: number | null;
}

export interface Users {
  users: UserData[];
}

export interface FilterProps {
  handleChangeDistrict: React.ChangeEventHandler<HTMLSelectElement>;
  districtInput: number;
  handleChangeCheckbox: React.ChangeEventHandler<HTMLInputElement>;
  isChecked: boolean;
}
