type maybe_str = string | null | undefined;

export interface IJob {
  name: string;
  address: string;
  phone: maybe_str;
  email: maybe_str;
  website: maybe_str;
}
