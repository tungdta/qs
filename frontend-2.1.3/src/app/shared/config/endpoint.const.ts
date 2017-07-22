export const SERVICE_BASE = 'http://localhost:8080';
export const ENDPOINT_SERVICE = {
  /* agent-queue setting */
  GET_AGENT_QUEUE_LIST: SERVICE_BASE + '/agent_queue_list',
  UPDATE_AGENT_QUEUE: SERVICE_BASE + '/update_agent_queue',
  GET_AGENT_LIST: SERVICE_BASE + '/agent_list',
  GET_QUEUE_LIST: SERVICE_BASE + '/queue_list',
  GET_QUEUE_LIST_FULL: SERVICE_BASE + '/queue_list_full',
  DELETE_AGENT_QUEUE: SERVICE_BASE + '/delete_agent_queue',
  ADD_AGENT_QUEUE: SERVICE_BASE + '/add_agent_queue',
  GET_DATA_BLACKLIST: SERVICE_BASE + '/get_data_blacklist',
  /* Company Management */
  GET_COMPANY_LIST: SERVICE_BASE + '/get_company_list',
  GET_COMPANY_ITEM: SERVICE_BASE + '/get_company_item',
  ADD_COMPANY: SERVICE_BASE + '/add_company',
  UPDATE_COMPANY: SERVICE_BASE + '/update_company',
  DELETE_COMPANY: SERVICE_BASE + '/delete_company',
}

export const CREDENTIAL = {
  USER_NAME: 'tueldddddddaaaaaaaa',
  PASSWORD: 'abc@123',
  ROLE_ID: '123',
  ORG_ID: '60056',
  CLIENT_ID: '101',
}
