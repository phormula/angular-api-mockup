export interface Work {
  exec_time: number;
  response: WorkResponse;
}

interface WorkResponse {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
  data: WorkResponseData[];
}

export interface WorkResponseData {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: WorkAssignedTo[];
  status: string;
  priority: string;
}

interface WorkAssignedTo {
  person_name: string;
  status: string;
}
