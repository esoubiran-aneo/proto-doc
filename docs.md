# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [agent_common.proto](#agent_common-proto)
    - [CreateTaskReply](#armonik-api-grpc-v1-agent-CreateTaskReply)
    - [CreateTaskReply.CreationStatus](#armonik-api-grpc-v1-agent-CreateTaskReply-CreationStatus)
    - [CreateTaskReply.CreationStatusList](#armonik-api-grpc-v1-agent-CreateTaskReply-CreationStatusList)
    - [CreateTaskReply.TaskInfo](#armonik-api-grpc-v1-agent-CreateTaskReply-TaskInfo)
    - [CreateTaskRequest](#armonik-api-grpc-v1-agent-CreateTaskRequest)
    - [CreateTaskRequest.InitRequest](#armonik-api-grpc-v1-agent-CreateTaskRequest-InitRequest)
    - [DataReply](#armonik-api-grpc-v1-agent-DataReply)
    - [DataReply.Init](#armonik-api-grpc-v1-agent-DataReply-Init)
    - [DataRequest](#armonik-api-grpc-v1-agent-DataRequest)
    - [Result](#armonik-api-grpc-v1-agent-Result)
    - [ResultReply](#armonik-api-grpc-v1-agent-ResultReply)
  
- [agent_service.proto](#agent_service-proto)
    - [Agent](#armonik-api-grpc-v1-agent-Agent)
  
- [applications_common.proto](#applications_common-proto)
    - [ApplicationRaw](#armonik-api-grpc-v1-applications-ApplicationRaw)
    - [ListApplicationsRequest](#armonik-api-grpc-v1-applications-ListApplicationsRequest)
    - [ListApplicationsRequest.Filter](#armonik-api-grpc-v1-applications-ListApplicationsRequest-Filter)
    - [ListApplicationsRequest.Sort](#armonik-api-grpc-v1-applications-ListApplicationsRequest-Sort)
    - [ListApplicationsResponse](#armonik-api-grpc-v1-applications-ListApplicationsResponse)
  
    - [ListApplicationsRequest.OrderByField](#armonik-api-grpc-v1-applications-ListApplicationsRequest-OrderByField)
    - [ListApplicationsRequest.OrderDirection](#armonik-api-grpc-v1-applications-ListApplicationsRequest-OrderDirection)
  
- [applications_service.proto](#applications_service-proto)
    - [Applications](#armonik-api-grpc-v1-applications-Applications)
  
- [auth_common.proto](#auth_common-proto)
    - [GetCurrentUserRequest](#armonik-api-grpc-v1-auth-GetCurrentUserRequest)
    - [GetCurrentUserResponse](#armonik-api-grpc-v1-auth-GetCurrentUserResponse)
    - [User](#armonik-api-grpc-v1-auth-User)
  
- [auth_service.proto](#auth_service-proto)
    - [Authentication](#armonik-api-grpc-v1-auth-Authentication)
  
- [events_common.proto](#events_common-proto)
    - [EventSubscriptionRequest](#armonik-api-grpc-v1-events-EventSubscriptionRequest)
    - [EventSubscriptionResponse](#armonik-api-grpc-v1-events-EventSubscriptionResponse)
    - [EventSubscriptionResponse.NewResult](#armonik-api-grpc-v1-events-EventSubscriptionResponse-NewResult)
    - [EventSubscriptionResponse.NewTask](#armonik-api-grpc-v1-events-EventSubscriptionResponse-NewTask)
    - [EventSubscriptionResponse.ResultOwnerUpdate](#armonik-api-grpc-v1-events-EventSubscriptionResponse-ResultOwnerUpdate)
    - [EventSubscriptionResponse.ResultStatusUpdate](#armonik-api-grpc-v1-events-EventSubscriptionResponse-ResultStatusUpdate)
    - [EventSubscriptionResponse.TaskStatusUpdate](#armonik-api-grpc-v1-events-EventSubscriptionResponse-TaskStatusUpdate)
  
- [events_service.proto](#events_service-proto)
    - [Events](#armonik-api-grpc-v1-events-Events)
  
- [objects.proto](#objects-proto)
    - [Configuration](#armonik-api-grpc-v1-Configuration)
    - [Count](#armonik-api-grpc-v1-Count)
    - [DataChunk](#armonik-api-grpc-v1-DataChunk)
    - [Empty](#armonik-api-grpc-v1-Empty)
    - [Error](#armonik-api-grpc-v1-Error)
    - [InitKeyedDataStream](#armonik-api-grpc-v1-InitKeyedDataStream)
    - [InitTaskRequest](#armonik-api-grpc-v1-InitTaskRequest)
    - [Output](#armonik-api-grpc-v1-Output)
    - [Output.Error](#armonik-api-grpc-v1-Output-Error)
    - [ResultRequest](#armonik-api-grpc-v1-ResultRequest)
    - [Session](#armonik-api-grpc-v1-Session)
    - [StatusCount](#armonik-api-grpc-v1-StatusCount)
    - [TaskError](#armonik-api-grpc-v1-TaskError)
    - [TaskId](#armonik-api-grpc-v1-TaskId)
    - [TaskIdList](#armonik-api-grpc-v1-TaskIdList)
    - [TaskIdWithStatus](#armonik-api-grpc-v1-TaskIdWithStatus)
    - [TaskList](#armonik-api-grpc-v1-TaskList)
    - [TaskOptions](#armonik-api-grpc-v1-TaskOptions)
    - [TaskOptions.OptionsEntry](#armonik-api-grpc-v1-TaskOptions-OptionsEntry)
    - [TaskOutputRequest](#armonik-api-grpc-v1-TaskOutputRequest)
    - [TaskRequest](#armonik-api-grpc-v1-TaskRequest)
    - [TaskRequestHeader](#armonik-api-grpc-v1-TaskRequestHeader)
  
- [result_status.proto](#result_status-proto)
    - [ResultStatus](#armonik-api-grpc-v1-result_status-ResultStatus)
  
- [results_common.proto](#results_common-proto)
    - [GetOwnerTaskIdRequest](#armonik-api-grpc-v1-results-GetOwnerTaskIdRequest)
    - [GetOwnerTaskIdResponse](#armonik-api-grpc-v1-results-GetOwnerTaskIdResponse)
    - [GetOwnerTaskIdResponse.MapResultTask](#armonik-api-grpc-v1-results-GetOwnerTaskIdResponse-MapResultTask)
    - [ListResultsRequest](#armonik-api-grpc-v1-results-ListResultsRequest)
    - [ListResultsRequest.Filter](#armonik-api-grpc-v1-results-ListResultsRequest-Filter)
    - [ListResultsRequest.Sort](#armonik-api-grpc-v1-results-ListResultsRequest-Sort)
    - [ListResultsResponse](#armonik-api-grpc-v1-results-ListResultsResponse)
    - [ResultRaw](#armonik-api-grpc-v1-results-ResultRaw)
  
    - [ListResultsRequest.OrderByField](#armonik-api-grpc-v1-results-ListResultsRequest-OrderByField)
    - [ListResultsRequest.OrderDirection](#armonik-api-grpc-v1-results-ListResultsRequest-OrderDirection)
  
- [results_service.proto](#results_service-proto)
    - [Results](#armonik-api-grpc-v1-results-Results)
  
- [session_status.proto](#session_status-proto)
    - [SessionStatus](#armonik-api-grpc-v1-session_status-SessionStatus)
  
- [sessions_common.proto](#sessions_common-proto)
    - [CancelSessionRequest](#armonik-api-grpc-v1-sessions-CancelSessionRequest)
    - [CancelSessionResponse](#armonik-api-grpc-v1-sessions-CancelSessionResponse)
    - [GetSessionRequest](#armonik-api-grpc-v1-sessions-GetSessionRequest)
    - [GetSessionResponse](#armonik-api-grpc-v1-sessions-GetSessionResponse)
    - [ListSessionsRequest](#armonik-api-grpc-v1-sessions-ListSessionsRequest)
    - [ListSessionsRequest.Filter](#armonik-api-grpc-v1-sessions-ListSessionsRequest-Filter)
    - [ListSessionsRequest.Sort](#armonik-api-grpc-v1-sessions-ListSessionsRequest-Sort)
    - [ListSessionsResponse](#armonik-api-grpc-v1-sessions-ListSessionsResponse)
    - [SessionRaw](#armonik-api-grpc-v1-sessions-SessionRaw)
    - [SessionSummary](#armonik-api-grpc-v1-sessions-SessionSummary)
  
    - [ListSessionsRequest.OrderByField](#armonik-api-grpc-v1-sessions-ListSessionsRequest-OrderByField)
    - [ListSessionsRequest.OrderDirection](#armonik-api-grpc-v1-sessions-ListSessionsRequest-OrderDirection)
  
- [sessions_service.proto](#sessions_service-proto)
    - [Sessions](#armonik-api-grpc-v1-sessions-Sessions)
  
- [submitter_common.proto](#submitter_common-proto)
    - [AvailabilityReply](#armonik-api-grpc-v1-submitter-AvailabilityReply)
    - [CreateLargeTaskRequest](#armonik-api-grpc-v1-submitter-CreateLargeTaskRequest)
    - [CreateLargeTaskRequest.InitRequest](#armonik-api-grpc-v1-submitter-CreateLargeTaskRequest-InitRequest)
    - [CreateSessionReply](#armonik-api-grpc-v1-submitter-CreateSessionReply)
    - [CreateSessionRequest](#armonik-api-grpc-v1-submitter-CreateSessionRequest)
    - [CreateSmallTaskRequest](#armonik-api-grpc-v1-submitter-CreateSmallTaskRequest)
    - [CreateTaskReply](#armonik-api-grpc-v1-submitter-CreateTaskReply)
    - [CreateTaskReply.CreationStatus](#armonik-api-grpc-v1-submitter-CreateTaskReply-CreationStatus)
    - [CreateTaskReply.CreationStatusList](#armonik-api-grpc-v1-submitter-CreateTaskReply-CreationStatusList)
    - [CreateTaskReply.TaskInfo](#armonik-api-grpc-v1-submitter-CreateTaskReply-TaskInfo)
    - [GetResultStatusReply](#armonik-api-grpc-v1-submitter-GetResultStatusReply)
    - [GetResultStatusReply.IdStatus](#armonik-api-grpc-v1-submitter-GetResultStatusReply-IdStatus)
    - [GetResultStatusRequest](#armonik-api-grpc-v1-submitter-GetResultStatusRequest)
    - [GetTaskStatusReply](#armonik-api-grpc-v1-submitter-GetTaskStatusReply)
    - [GetTaskStatusReply.IdStatus](#armonik-api-grpc-v1-submitter-GetTaskStatusReply-IdStatus)
    - [GetTaskStatusRequest](#armonik-api-grpc-v1-submitter-GetTaskStatusRequest)
    - [ResultReply](#armonik-api-grpc-v1-submitter-ResultReply)
    - [SessionFilter](#armonik-api-grpc-v1-submitter-SessionFilter)
    - [SessionFilter.StatusesRequest](#armonik-api-grpc-v1-submitter-SessionFilter-StatusesRequest)
    - [SessionIdList](#armonik-api-grpc-v1-submitter-SessionIdList)
    - [SessionList](#armonik-api-grpc-v1-submitter-SessionList)
    - [TaskFilter](#armonik-api-grpc-v1-submitter-TaskFilter)
    - [TaskFilter.IdsRequest](#armonik-api-grpc-v1-submitter-TaskFilter-IdsRequest)
    - [TaskFilter.StatusesRequest](#armonik-api-grpc-v1-submitter-TaskFilter-StatusesRequest)
    - [WaitRequest](#armonik-api-grpc-v1-submitter-WaitRequest)
    - [WatchResultRequest](#armonik-api-grpc-v1-submitter-WatchResultRequest)
    - [WatchResultStream](#armonik-api-grpc-v1-submitter-WatchResultStream)
  
- [submitter_service.proto](#submitter_service-proto)
    - [Submitter](#armonik-api-grpc-v1-submitter-Submitter)
  
- [task_status.proto](#task_status-proto)
    - [TaskStatus](#armonik-api-grpc-v1-task_status-TaskStatus)
  
- [tasks_common.proto](#tasks_common-proto)
    - [CancelTasksRequest](#armonik-api-grpc-v1-tasks-CancelTasksRequest)
    - [CancelTasksResponse](#armonik-api-grpc-v1-tasks-CancelTasksResponse)
    - [GetResultIdsRequest](#armonik-api-grpc-v1-tasks-GetResultIdsRequest)
    - [GetResultIdsResponse](#armonik-api-grpc-v1-tasks-GetResultIdsResponse)
    - [GetResultIdsResponse.MapTaskResult](#armonik-api-grpc-v1-tasks-GetResultIdsResponse-MapTaskResult)
    - [GetTaskRequest](#armonik-api-grpc-v1-tasks-GetTaskRequest)
    - [GetTaskResponse](#armonik-api-grpc-v1-tasks-GetTaskResponse)
    - [ListTasksRequest](#armonik-api-grpc-v1-tasks-ListTasksRequest)
    - [ListTasksRequest.Filter](#armonik-api-grpc-v1-tasks-ListTasksRequest-Filter)
    - [ListTasksRequest.Sort](#armonik-api-grpc-v1-tasks-ListTasksRequest-Sort)
    - [ListTasksResponse](#armonik-api-grpc-v1-tasks-ListTasksResponse)
    - [TaskRaw](#armonik-api-grpc-v1-tasks-TaskRaw)
    - [TaskRaw.Output](#armonik-api-grpc-v1-tasks-TaskRaw-Output)
    - [TaskSummary](#armonik-api-grpc-v1-tasks-TaskSummary)
  
    - [ListTasksRequest.OrderByField](#armonik-api-grpc-v1-tasks-ListTasksRequest-OrderByField)
    - [ListTasksRequest.OrderDirection](#armonik-api-grpc-v1-tasks-ListTasksRequest-OrderDirection)
  
- [tasks_service.proto](#tasks_service-proto)
    - [Tasks](#armonik-api-grpc-v1-tasks-Tasks)
  
- [worker_common.proto](#worker_common-proto)
    - [HealthCheckReply](#armonik-api-grpc-v1-worker-HealthCheckReply)
    - [ProcessReply](#armonik-api-grpc-v1-worker-ProcessReply)
    - [ProcessRequest](#armonik-api-grpc-v1-worker-ProcessRequest)
    - [ProcessRequest.ComputeRequest](#armonik-api-grpc-v1-worker-ProcessRequest-ComputeRequest)
    - [ProcessRequest.ComputeRequest.InitData](#armonik-api-grpc-v1-worker-ProcessRequest-ComputeRequest-InitData)
    - [ProcessRequest.ComputeRequest.InitRequest](#armonik-api-grpc-v1-worker-ProcessRequest-ComputeRequest-InitRequest)
  
    - [HealthCheckReply.ServingStatus](#armonik-api-grpc-v1-worker-HealthCheckReply-ServingStatus)
  
- [worker_service.proto](#worker_service-proto)
    - [Worker](#armonik-api-grpc-v1-worker-Worker)
  
- [Scalar Value Types](#scalar-value-types)



<a name="agent_common-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## agent_common.proto



<a name="armonik-api-grpc-v1-agent-CreateTaskReply"></a>

### CreateTaskReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| creation_status_list | [CreateTaskReply.CreationStatusList](#armonik-api-grpc-v1-agent-CreateTaskReply-CreationStatusList) |  |  |
| error | [string](#string) |  |  |
| communication_token | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-agent-CreateTaskReply-CreationStatus"></a>

### CreateTaskReply.CreationStatus



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_info | [CreateTaskReply.TaskInfo](#armonik-api-grpc-v1-agent-CreateTaskReply-TaskInfo) |  |  |
| error | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-agent-CreateTaskReply-CreationStatusList"></a>

### CreateTaskReply.CreationStatusList



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| creation_statuses | [CreateTaskReply.CreationStatus](#armonik-api-grpc-v1-agent-CreateTaskReply-CreationStatus) | repeated |  |






<a name="armonik-api-grpc-v1-agent-CreateTaskReply-TaskInfo"></a>

### CreateTaskReply.TaskInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  |  |
| expected_output_keys | [string](#string) | repeated |  |
| data_dependencies | [string](#string) | repeated |  |






<a name="armonik-api-grpc-v1-agent-CreateTaskRequest"></a>

### CreateTaskRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| init_request | [CreateTaskRequest.InitRequest](#armonik-api-grpc-v1-agent-CreateTaskRequest-InitRequest) |  |  |
| init_task | [armonik.api.grpc.v1.InitTaskRequest](#armonik-api-grpc-v1-InitTaskRequest) |  |  |
| task_payload | [armonik.api.grpc.v1.DataChunk](#armonik-api-grpc-v1-DataChunk) |  |  |
| communication_token | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-agent-CreateTaskRequest-InitRequest"></a>

### CreateTaskRequest.InitRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_options | [armonik.api.grpc.v1.TaskOptions](#armonik-api-grpc-v1-TaskOptions) |  |  |






<a name="armonik-api-grpc-v1-agent-DataReply"></a>

### DataReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| communication_token | [string](#string) |  |  |
| init | [DataReply.Init](#armonik-api-grpc-v1-agent-DataReply-Init) |  |  |
| data | [armonik.api.grpc.v1.DataChunk](#armonik-api-grpc-v1-DataChunk) |  |  |
| error | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-agent-DataReply-Init"></a>

### DataReply.Init



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| data | [armonik.api.grpc.v1.DataChunk](#armonik-api-grpc-v1-DataChunk) |  |  |
| error | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-agent-DataRequest"></a>

### DataRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| communication_token | [string](#string) |  |  |
| key | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-agent-Result"></a>

### Result



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| init | [armonik.api.grpc.v1.InitKeyedDataStream](#armonik-api-grpc-v1-InitKeyedDataStream) |  |  |
| data | [armonik.api.grpc.v1.DataChunk](#armonik-api-grpc-v1-DataChunk) |  |  |
| communication_token | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-agent-ResultReply"></a>

### ResultReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| communication_token | [string](#string) |  |  |
| Ok | [armonik.api.grpc.v1.Empty](#armonik-api-grpc-v1-Empty) |  |  |
| Error | [string](#string) |  |  |





 

 

 

 



<a name="agent_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## agent_service.proto


 

 

 


<a name="armonik-api-grpc-v1-agent-Agent"></a>

### Agent


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateTask | [CreateTaskRequest](#armonik-api-grpc-v1-agent-CreateTaskRequest) stream | [CreateTaskReply](#armonik-api-grpc-v1-agent-CreateTaskReply) |  |
| GetResourceData | [DataRequest](#armonik-api-grpc-v1-agent-DataRequest) | [DataReply](#armonik-api-grpc-v1-agent-DataReply) stream |  |
| GetCommonData | [DataRequest](#armonik-api-grpc-v1-agent-DataRequest) | [DataReply](#armonik-api-grpc-v1-agent-DataReply) stream |  |
| GetDirectData | [DataRequest](#armonik-api-grpc-v1-agent-DataRequest) | [DataReply](#armonik-api-grpc-v1-agent-DataReply) stream |  |
| SendResult | [Result](#armonik-api-grpc-v1-agent-Result) stream | [ResultReply](#armonik-api-grpc-v1-agent-ResultReply) |  |

 



<a name="applications_common-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## applications_common.proto
Messages describing applications and associated requests and responses.


<a name="armonik-api-grpc-v1-applications-ApplicationRaw"></a>

### ApplicationRaw
A raw application object.

Used when a list of applications is requested.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Application name. |
| version | [string](#string) |  | Application version. |
| namespace | [string](#string) |  | Application namespace used in the excecuted class. |
| service | [string](#string) |  | Application service used in the excecuted class. |






<a name="armonik-api-grpc-v1-applications-ListApplicationsRequest"></a>

### ListApplicationsRequest
Request to list applications.

Use pagination, filtering and sorting.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| page | [int32](#int32) |  | The page number. Start at 0. |
| page_size | [int32](#int32) |  | Number of items per page. |
| filter | [ListApplicationsRequest.Filter](#armonik-api-grpc-v1-applications-ListApplicationsRequest-Filter) |  | The filter.

Must be set for every request but allowed to be empty. |
| sort | [ListApplicationsRequest.Sort](#armonik-api-grpc-v1-applications-ListApplicationsRequest-Sort) |  | The sort.

Must be set for every request. |






<a name="armonik-api-grpc-v1-applications-ListApplicationsRequest-Filter"></a>

### ListApplicationsRequest.Filter
Represents a filter with all available fields.

Any fields can be used at the same time.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Application name. |
| version | [string](#string) |  | Application version. |
| namespace | [string](#string) |  | Application namespace. |
| service | [string](#string) |  | Application service. |






<a name="armonik-api-grpc-v1-applications-ListApplicationsRequest-Sort"></a>

### ListApplicationsRequest.Sort
Represents the sort object.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| field | [ListApplicationsRequest.OrderByField](#armonik-api-grpc-v1-applications-ListApplicationsRequest-OrderByField) |  | The field to order by. |
| direction | [ListApplicationsRequest.OrderDirection](#armonik-api-grpc-v1-applications-ListApplicationsRequest-OrderDirection) |  | The order direction. |






<a name="armonik-api-grpc-v1-applications-ListApplicationsResponse"></a>

### ListApplicationsResponse
Response to list applications.

Use pagination, filtering and sorting from the request.
Return a list of raw applications.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| applications | [ApplicationRaw](#armonik-api-grpc-v1-applications-ApplicationRaw) | repeated |  |
| page | [int32](#int32) |  | The current page. Start at 0. |
| page_size | [int32](#int32) |  | Number of items per page. |
| total | [int32](#int32) |  | Total number of items. |





 


<a name="armonik-api-grpc-v1-applications-ListApplicationsRequest-OrderByField"></a>

### ListApplicationsRequest.OrderByField
Represents every available field to use in order to sort applications.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_BY_FIELD_UNSPECIFIED | 0 | Unspecified. |
| ORDER_BY_FIELD_NAME | 1 | Application name. |
| ORDER_BY_FIELD_VERSION | 2 | Application version. |
| ORDER_BY_FIELD_NAMESPACE | 3 | Application namespace. |
| ORDER_BY_FIELD_SERVICE | 4 | Application service. |



<a name="armonik-api-grpc-v1-applications-ListApplicationsRequest-OrderDirection"></a>

### ListApplicationsRequest.OrderDirection
Represents every available order directions.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_DIRECTION_UNSPECIFIED | 0 | Unspecified. |
| ORDER_DIRECTION_ASC | 1 | Ascending. |
| ORDER_DIRECTION_DESC | 2 | Descending. |


 

 

 



<a name="applications_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## applications_service.proto
Applications related methods within a service.

 

 

 


<a name="armonik-api-grpc-v1-applications-Applications"></a>

### Applications
Service for handling applications.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListApplications | [ListApplicationsRequest](#armonik-api-grpc-v1-applications-ListApplicationsRequest) | [ListApplicationsResponse](#armonik-api-grpc-v1-applications-ListApplicationsResponse) | Get a applications list using pagination, filters and sorting; |

 



<a name="auth_common-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## auth_common.proto
Messages describing authentication and associated requests and responses.


<a name="armonik-api-grpc-v1-auth-GetCurrentUserRequest"></a>

### GetCurrentUserRequest
Request to get current user informations.






<a name="armonik-api-grpc-v1-auth-GetCurrentUserResponse"></a>

### GetCurrentUserResponse
Response to get current user informations.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [User](#armonik-api-grpc-v1-auth-User) |  | Return current user. If auth failed, must throw a gRPC error. |






<a name="armonik-api-grpc-v1-auth-User"></a>

### User
A user.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| username | [string](#string) |  | Username. If authentication is disabled, must be set to &#39;Anonymous&#39; |
| roles | [string](#string) | repeated | Roles. If authentication is disabled, must return []. |
| permissions | [string](#string) | repeated | Permissions. If authentication is disabled, must return every permissions. |





 

 

 

 



<a name="auth_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## auth_service.proto
Authentication related methods within a service.

 

 

 


<a name="armonik-api-grpc-v1-auth-Authentication"></a>

### Authentication
Service for authentication management.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetCurrentUser | [GetCurrentUserRequest](#armonik-api-grpc-v1-auth-GetCurrentUserRequest) | [GetCurrentUserResponse](#armonik-api-grpc-v1-auth-GetCurrentUserResponse) | Get current user |

 



<a name="events_common-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events_common.proto



<a name="armonik-api-grpc-v1-events-EventSubscriptionRequest"></a>

### EventSubscriptionRequest
Request to subscribe to the event stream.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_id | [string](#string) |  | Id of the session that will be used to subscribe events for. * |






<a name="armonik-api-grpc-v1-events-EventSubscriptionResponse"></a>

### EventSubscriptionResponse
Response containing the update event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_id | [string](#string) |  | Id of the session that will be used to subscribe events for. * |
| task_status_update | [EventSubscriptionResponse.TaskStatusUpdate](#armonik-api-grpc-v1-events-EventSubscriptionResponse-TaskStatusUpdate) |  | An update to the status of a task. * |
| result_status_update | [EventSubscriptionResponse.ResultStatusUpdate](#armonik-api-grpc-v1-events-EventSubscriptionResponse-ResultStatusUpdate) |  | An update to the status of a result. * |
| result_owner_update | [EventSubscriptionResponse.ResultOwnerUpdate](#armonik-api-grpc-v1-events-EventSubscriptionResponse-ResultOwnerUpdate) |  | An update to the owner of a result. * |
| new_task | [EventSubscriptionResponse.NewTask](#armonik-api-grpc-v1-events-EventSubscriptionResponse-NewTask) |  | A new task in ArmoniK. * |
| new_result | [EventSubscriptionResponse.NewResult](#armonik-api-grpc-v1-events-EventSubscriptionResponse-NewResult) |  | A new result in ArmoniK. * |






<a name="armonik-api-grpc-v1-events-EventSubscriptionResponse-NewResult"></a>

### EventSubscriptionResponse.NewResult
Represents the submission of a new result in ArmoniK.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result_id | [string](#string) |  | The result id. * |
| owner_id | [string](#string) |  | The owner task id. * |
| status | [armonik.api.grpc.v1.result_status.ResultStatus](#armonik-api-grpc-v1-result_status-ResultStatus) |  | The result status. * |






<a name="armonik-api-grpc-v1-events-EventSubscriptionResponse-NewTask"></a>

### EventSubscriptionResponse.NewTask
Represents the submission of a new task in ArmoniK.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  | The task id. * |
| payload_id | [string](#string) |  | The payload id. * |
| origin_task_id | [string](#string) |  | The task id before retry. * |
| status | [armonik.api.grpc.v1.task_status.TaskStatus](#armonik-api-grpc-v1-task_status-TaskStatus) |  | The task status. * |
| expected_output_keys | [string](#string) | repeated | The keys of the expected outputs * |
| data_dependencies | [string](#string) | repeated | The keys of the data dependencies. * |
| retry_of_ids | [string](#string) | repeated | The list of retried tasks from the first retry to the current. * |






<a name="armonik-api-grpc-v1-events-EventSubscriptionResponse-ResultOwnerUpdate"></a>

### EventSubscriptionResponse.ResultOwnerUpdate
Represents an update to the owner task id of a result.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result_id | [string](#string) |  | The result id. * |
| previous_owner_id | [string](#string) |  | The previous owner id. * |
| current_owner_id | [string](#string) |  | The current owner id. * |






<a name="armonik-api-grpc-v1-events-EventSubscriptionResponse-ResultStatusUpdate"></a>

### EventSubscriptionResponse.ResultStatusUpdate
Represents an update to the status of a result.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result_id | [string](#string) |  | The result id. * |
| status | [armonik.api.grpc.v1.result_status.ResultStatus](#armonik-api-grpc-v1-result_status-ResultStatus) |  | The result status. * |






<a name="armonik-api-grpc-v1-events-EventSubscriptionResponse-TaskStatusUpdate"></a>

### EventSubscriptionResponse.TaskStatusUpdate
Represents an update to the status of a task.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  | The task id. * |
| status | [armonik.api.grpc.v1.task_status.TaskStatus](#armonik-api-grpc-v1-task_status-TaskStatus) |  | The task status. * |





 

 

 

 



<a name="events_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events_service.proto
Events subscription related methods within a service.

This service can be used to receive events related to the update of tasks
and results whithin a session.
The endpoint can be called to listen to the modifications of multiple sessions
if needed.

Note: As for now, all the events of a session will be sent whithout filtering.
It is possible that the API will evolve to a more refined way to filter the events
to be received.

 

 

 


<a name="armonik-api-grpc-v1-events-Events"></a>

### Events
Service for subscribing to events representing modifications to ArmoniK result and task data

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetEvents | [EventSubscriptionRequest](#armonik-api-grpc-v1-events-EventSubscriptionRequest) | [EventSubscriptionResponse](#armonik-api-grpc-v1-events-EventSubscriptionResponse) stream | Get events that represents updates of result and tasks data. |

 



<a name="objects-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## objects.proto



<a name="armonik-api-grpc-v1-Configuration"></a>

### Configuration



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data_chunk_max_size | [int32](#int32) |  |  |






<a name="armonik-api-grpc-v1-Count"></a>

### Count



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [StatusCount](#armonik-api-grpc-v1-StatusCount) | repeated |  |






<a name="armonik-api-grpc-v1-DataChunk"></a>

### DataChunk



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  |  |
| data_complete | [bool](#bool) |  |  |






<a name="armonik-api-grpc-v1-Empty"></a>

### Empty







<a name="armonik-api-grpc-v1-Error"></a>

### Error



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_status | [task_status.TaskStatus](#armonik-api-grpc-v1-task_status-TaskStatus) |  |  |
| detail | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-InitKeyedDataStream"></a>

### InitKeyedDataStream



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| last_result | [bool](#bool) |  |  |






<a name="armonik-api-grpc-v1-InitTaskRequest"></a>

### InitTaskRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [TaskRequestHeader](#armonik-api-grpc-v1-TaskRequestHeader) |  |  |
| last_task | [bool](#bool) |  |  |






<a name="armonik-api-grpc-v1-Output"></a>

### Output



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ok | [Empty](#armonik-api-grpc-v1-Empty) |  |  |
| error | [Output.Error](#armonik-api-grpc-v1-Output-Error) |  |  |






<a name="armonik-api-grpc-v1-Output-Error"></a>

### Output.Error



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| details | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-ResultRequest"></a>

### ResultRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session | [string](#string) |  |  |
| result_id | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-Session"></a>

### Session



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-StatusCount"></a>

### StatusCount



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [task_status.TaskStatus](#armonik-api-grpc-v1-task_status-TaskStatus) |  |  |
| count | [int32](#int32) |  |  |






<a name="armonik-api-grpc-v1-TaskError"></a>

### TaskError



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  |  |
| errors | [Error](#armonik-api-grpc-v1-Error) | repeated |  |






<a name="armonik-api-grpc-v1-TaskId"></a>

### TaskId



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session | [string](#string) |  |  |
| task | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-TaskIdList"></a>

### TaskIdList



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_ids | [string](#string) | repeated |  |






<a name="armonik-api-grpc-v1-TaskIdWithStatus"></a>

### TaskIdWithStatus



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [TaskId](#armonik-api-grpc-v1-TaskId) |  |  |
| status | [task_status.TaskStatus](#armonik-api-grpc-v1-task_status-TaskStatus) |  |  |






<a name="armonik-api-grpc-v1-TaskList"></a>

### TaskList



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_ids | [TaskId](#armonik-api-grpc-v1-TaskId) | repeated |  |






<a name="armonik-api-grpc-v1-TaskOptions"></a>

### TaskOptions



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| options | [TaskOptions.OptionsEntry](#armonik-api-grpc-v1-TaskOptions-OptionsEntry) | repeated |  |
| max_duration | [google.protobuf.Duration](#google-protobuf-Duration) |  |  |
| max_retries | [int32](#int32) |  |  |
| priority | [int32](#int32) |  |  |
| partition_id | [string](#string) |  |  |
| application_name | [string](#string) |  |  |
| application_version | [string](#string) |  |  |
| application_namespace | [string](#string) |  |  |
| application_service | [string](#string) |  |  |
| engine_type | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-TaskOptions-OptionsEntry"></a>

### TaskOptions.OptionsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-TaskOutputRequest"></a>

### TaskOutputRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session | [string](#string) |  |  |
| task_id | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-TaskRequest"></a>

### TaskRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| expected_output_keys | [string](#string) | repeated |  |
| data_dependencies | [string](#string) | repeated |  |
| payload | [bytes](#bytes) |  |  |






<a name="armonik-api-grpc-v1-TaskRequestHeader"></a>

### TaskRequestHeader



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| expected_output_keys | [string](#string) | repeated |  |
| data_dependencies | [string](#string) | repeated |  |





 

 

 

 



<a name="result_status-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## result_status.proto


 


<a name="armonik-api-grpc-v1-result_status-ResultStatus"></a>

### ResultStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| RESULT_STATUS_UNSPECIFIED | 0 | Result is in an unspecified state. |
| RESULT_STATUS_CREATED | 1 | Result is created and task is created, submitted or dispatched. |
| RESULT_STATUS_COMPLETED | 2 | Result is completed with a completed task. |
| RESULT_STATUS_ABORTED | 3 | Result is aborted. |
| RESULT_STATUS_NOTFOUND | 127 | NOTFOUND is encoded as 127 to make it small while still leaving enough room for future status extensions

see https://developers.google.com/protocol-buffers/docs/proto3#enum |


 

 

 



<a name="results_common-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## results_common.proto



<a name="armonik-api-grpc-v1-results-GetOwnerTaskIdRequest"></a>

### GetOwnerTaskIdRequest
Request for getting the id of the task that should create this result


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_id | [string](#string) |  |  |
| result_id | [string](#string) | repeated |  |






<a name="armonik-api-grpc-v1-results-GetOwnerTaskIdResponse"></a>

### GetOwnerTaskIdResponse
Response for getting the id of the task that should create this result


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result_task | [GetOwnerTaskIdResponse.MapResultTask](#armonik-api-grpc-v1-results-GetOwnerTaskIdResponse-MapResultTask) | repeated |  |
| session_id | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-results-GetOwnerTaskIdResponse-MapResultTask"></a>

### GetOwnerTaskIdResponse.MapResultTask



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result_id | [string](#string) |  |  |
| task_id | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-results-ListResultsRequest"></a>

### ListResultsRequest
Request to list results.

Use pagination, filtering and sorting.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| page | [int32](#int32) |  | The page number. Start at 0. |
| page_size | [int32](#int32) |  | The page size. |
| filter | [ListResultsRequest.Filter](#armonik-api-grpc-v1-results-ListResultsRequest-Filter) |  | The filter.

Must be set for every request but allowed to be empty. |
| sort | [ListResultsRequest.Sort](#armonik-api-grpc-v1-results-ListResultsRequest-Sort) |  | The sort.

Must be set for every request. |






<a name="armonik-api-grpc-v1-results-ListResultsRequest-Filter"></a>

### ListResultsRequest.Filter
Represents a filter with all available fields.

Any fields can be used at the same time.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_id | [string](#string) |  | The session ID. |
| name | [string](#string) |  | The result name. |
| owner_task_id | [string](#string) |  | The owner task ID. |
| status | [armonik.api.grpc.v1.result_status.ResultStatus](#armonik-api-grpc-v1-result_status-ResultStatus) |  | The result status. |
| created_after | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Use the creation date of a result to filter results created after the input. |
| created_before | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Use the creation date of a result to filter results created before the input. |






<a name="armonik-api-grpc-v1-results-ListResultsRequest-Sort"></a>

### ListResultsRequest.Sort
Represents the sort object.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| field | [ListResultsRequest.OrderByField](#armonik-api-grpc-v1-results-ListResultsRequest-OrderByField) |  | The field to order by. |
| direction | [ListResultsRequest.OrderDirection](#armonik-api-grpc-v1-results-ListResultsRequest-OrderDirection) |  | The order direction. |






<a name="armonik-api-grpc-v1-results-ListResultsResponse"></a>

### ListResultsResponse
Response to list results.

Use pagination, filtering and sorting from the request.
Retunr a list of raw results.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| results | [ResultRaw](#armonik-api-grpc-v1-results-ResultRaw) | repeated | The list of raw results. |
| page | [int32](#int32) |  | The page number. Start at 0. |
| page_size | [int32](#int32) |  | The page size. |
| total | [int32](#int32) |  | The total number of results. |






<a name="armonik-api-grpc-v1-results-ResultRaw"></a>

### ResultRaw
A raw result object.

Used when a list or a single result is returned.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_id | [string](#string) |  | The session ID. |
| name | [string](#string) |  | The result name. |
| owner_task_id | [string](#string) |  | The owner task ID. |
| status | [armonik.api.grpc.v1.result_status.ResultStatus](#armonik-api-grpc-v1-result_status-ResultStatus) |  | The result status. |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The result creation date. |





 


<a name="armonik-api-grpc-v1-results-ListResultsRequest-OrderByField"></a>

### ListResultsRequest.OrderByField
Represents every available field to use in order to sort results.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_BY_FIELD_UNSPECIFIED | 0 | Unspecified. |
| ORDER_BY_FIELD_SESSION_ID | 1 | The session ID. |
| ORDER_BY_FIELD_NAME | 2 | The result name. |
| ORDER_BY_FIELD_OWNER_TASK_ID | 3 | The owner task ID. |
| ORDER_BY_FIELD_STATUS | 4 | The result status. |
| ORDER_BY_FIELD_CREATED_AT | 5 | The result creation date. |



<a name="armonik-api-grpc-v1-results-ListResultsRequest-OrderDirection"></a>

### ListResultsRequest.OrderDirection
Represents every available order directions.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_DIRECTION_UNSPECIFIED | 0 | Unspecified. |
| ORDER_DIRECTION_ASC | 1 | Ascending. |
| ORDER_DIRECTION_DESC | 2 | Descending. |


 

 

 



<a name="results_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## results_service.proto


 

 

 


<a name="armonik-api-grpc-v1-results-Results"></a>

### Results
The ResultsService provides methods for interacting with results

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListResults | [ListResultsRequest](#armonik-api-grpc-v1-results-ListResultsRequest) | [ListResultsResponse](#armonik-api-grpc-v1-results-ListResultsResponse) | Get a results list using pagination, filters and sorting |
| GetOwnerTaskId | [GetOwnerTaskIdRequest](#armonik-api-grpc-v1-results-GetOwnerTaskIdRequest) | [GetOwnerTaskIdResponse](#armonik-api-grpc-v1-results-GetOwnerTaskIdResponse) | Get the id of the task that should produce the result |

 



<a name="session_status-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## session_status.proto
Status of a session.

 


<a name="armonik-api-grpc-v1-session_status-SessionStatus"></a>

### SessionStatus
Session status.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SESSION_STATUS_UNSPECIFIED | 0 | Session is in an unknown state. |
| SESSION_STATUS_RUNNING | 1 | Session is open and accepting tasks for execution. |
| SESSION_STATUS_CANCELLED | 2 | Session is cancelled. No more tasks can be submitted and no more tasks will be executed. |


 

 

 



<a name="sessions_common-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## sessions_common.proto
Messages describing sessions and associated requests and responses.


<a name="armonik-api-grpc-v1-sessions-CancelSessionRequest"></a>

### CancelSessionRequest
Request for cancelling a single session.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_id | [string](#string) |  | The session ID. |






<a name="armonik-api-grpc-v1-sessions-CancelSessionResponse"></a>

### CancelSessionResponse
Response for cancelling a single session.

Return a raw session.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session | [SessionRaw](#armonik-api-grpc-v1-sessions-SessionRaw) |  | The session. |






<a name="armonik-api-grpc-v1-sessions-GetSessionRequest"></a>

### GetSessionRequest
Request for getting a single session.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_id | [string](#string) |  | The session ID. |






<a name="armonik-api-grpc-v1-sessions-GetSessionResponse"></a>

### GetSessionResponse
Response for getting a single session.

Return a raw session.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session | [SessionRaw](#armonik-api-grpc-v1-sessions-SessionRaw) |  | The session. |






<a name="armonik-api-grpc-v1-sessions-ListSessionsRequest"></a>

### ListSessionsRequest
Request to list sessions.

Use pagination, filtering and sorting.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| page | [int32](#int32) |  | The page number. Start at 0. |
| page_size | [int32](#int32) |  | The page size. |
| filter | [ListSessionsRequest.Filter](#armonik-api-grpc-v1-sessions-ListSessionsRequest-Filter) |  | The filter.

Must be set for every request but allowed to be empty. |
| sort | [ListSessionsRequest.Sort](#armonik-api-grpc-v1-sessions-ListSessionsRequest-Sort) |  | The sort.

Must be set for every request. |
| with_task_options | [bool](#bool) |  | Flag to tell if server must return task options in summary sessions |






<a name="armonik-api-grpc-v1-sessions-ListSessionsRequest-Filter"></a>

### ListSessionsRequest.Filter
Represents a filter with all available fields.

Any fields can be used at the same time.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| application_name | [string](#string) |  | The application name. |
| application_version | [string](#string) |  | The application version. |
| session_id | [string](#string) |  | The session ID. |
| created_after | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Use the creation date of a session to filter sessions created after the input. |
| created_before | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Use the creation date of a session to filter sessions created before the input. |
| cancelled_after | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Use the cancellation date of a session to filter sessions cancelled after the input. |
| cancelled_before | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Use the cancellation date of a session to filter sessions cancelled before the input. |
| status | [armonik.api.grpc.v1.session_status.SessionStatus](#armonik-api-grpc-v1-session_status-SessionStatus) |  | The session status. |






<a name="armonik-api-grpc-v1-sessions-ListSessionsRequest-Sort"></a>

### ListSessionsRequest.Sort
Represents the sort object.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| field | [ListSessionsRequest.OrderByField](#armonik-api-grpc-v1-sessions-ListSessionsRequest-OrderByField) |  | The field to order by. |
| direction | [ListSessionsRequest.OrderDirection](#armonik-api-grpc-v1-sessions-ListSessionsRequest-OrderDirection) |  | The order direction. |






<a name="armonik-api-grpc-v1-sessions-ListSessionsResponse"></a>

### ListSessionsResponse
Response to list sessions.

Use pagination, filtering and sorting from the request.
Return a list of summary sessions.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sessions | [SessionSummary](#armonik-api-grpc-v1-sessions-SessionSummary) | repeated | The list of sessions. |
| page | [int32](#int32) |  | The current page. Start at 0. |
| page_size | [int32](#int32) |  | The page size. |
| total | [int32](#int32) |  | The total number of sessions. |






<a name="armonik-api-grpc-v1-sessions-SessionRaw"></a>

### SessionRaw
A raw session object.

Used when a single session is returned.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_id | [string](#string) |  | The session ID. |
| status | [armonik.api.grpc.v1.session_status.SessionStatus](#armonik-api-grpc-v1-session_status-SessionStatus) |  | The session status. |
| partition_ids | [string](#string) | repeated | The partition IDs. |
| options | [armonik.api.grpc.v1.TaskOptions](#armonik-api-grpc-v1-TaskOptions) |  | The task options. In fact, these are used as default value in child tasks. |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The creation date. |
| cancelled_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The cancellation date. Only set when status is &#39;cancelled&#39;. |






<a name="armonik-api-grpc-v1-sessions-SessionSummary"></a>

### SessionSummary
A summary session object.

Does not contain all the fields of the object.
Used when a list of sessions is returned.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_id | [string](#string) |  | The session ID. |
| status | [armonik.api.grpc.v1.session_status.SessionStatus](#armonik-api-grpc-v1-session_status-SessionStatus) |  | The session status. |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The creation date. |
| cancelled_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The cancellation date. Only set when status is &#39;cancelled&#39;. |
| options | [armonik.api.grpc.v1.TaskOptions](#armonik-api-grpc-v1-TaskOptions) |  | The default task options. |





 


<a name="armonik-api-grpc-v1-sessions-ListSessionsRequest-OrderByField"></a>

### ListSessionsRequest.OrderByField
Represents every available field to use in order to sort sessions.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_BY_FIELD_UNSPECIFIED | 0 | Unspecified. |
| ORDER_BY_FIELD_SESSION_ID | 1 | The session ID. |
| ORDER_BY_FIELD_STATUS | 2 | The session status. |
| ORDER_BY_FIELD_CREATED_AT | 3 | The creation date. |
| ORDER_BY_FIELD_CANCELLED_AT | 4 | The cancellation date. |



<a name="armonik-api-grpc-v1-sessions-ListSessionsRequest-OrderDirection"></a>

### ListSessionsRequest.OrderDirection
Represents every available order directions.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_DIRECTION_UNSPECIFIED | 0 | Unspecified. |
| ORDER_DIRECTION_ASC | 1 | Ascending. |
| ORDER_DIRECTION_DESC | 2 | Descending. |


 

 

 



<a name="sessions_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## sessions_service.proto
Tasks related methods within a service.

 

 

 


<a name="armonik-api-grpc-v1-sessions-Sessions"></a>

### Sessions
Service for handling sessions.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListSessions | [ListSessionsRequest](#armonik-api-grpc-v1-sessions-ListSessionsRequest) | [ListSessionsResponse](#armonik-api-grpc-v1-sessions-ListSessionsResponse) | Get a sessions list using pagination, filters and sorting. |
| GetSession | [GetSessionRequest](#armonik-api-grpc-v1-sessions-GetSessionRequest) | [GetSessionResponse](#armonik-api-grpc-v1-sessions-GetSessionResponse) | Get a session by its id. |
| CancelSession | [CancelSessionRequest](#armonik-api-grpc-v1-sessions-CancelSessionRequest) | [CancelSessionResponse](#armonik-api-grpc-v1-sessions-CancelSessionResponse) | Cancel a session by its id. |

 



<a name="submitter_common-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## submitter_common.proto



<a name="armonik-api-grpc-v1-submitter-AvailabilityReply"></a>

### AvailabilityReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ok | [armonik.api.grpc.v1.Empty](#armonik-api-grpc-v1-Empty) |  |  |
| error | [armonik.api.grpc.v1.TaskError](#armonik-api-grpc-v1-TaskError) |  |  |
| not_completed_task | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-submitter-CreateLargeTaskRequest"></a>

### CreateLargeTaskRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| init_request | [CreateLargeTaskRequest.InitRequest](#armonik-api-grpc-v1-submitter-CreateLargeTaskRequest-InitRequest) |  |  |
| init_task | [armonik.api.grpc.v1.InitTaskRequest](#armonik-api-grpc-v1-InitTaskRequest) |  |  |
| task_payload | [armonik.api.grpc.v1.DataChunk](#armonik-api-grpc-v1-DataChunk) |  |  |






<a name="armonik-api-grpc-v1-submitter-CreateLargeTaskRequest-InitRequest"></a>

### CreateLargeTaskRequest.InitRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_id | [string](#string) |  |  |
| task_options | [armonik.api.grpc.v1.TaskOptions](#armonik-api-grpc-v1-TaskOptions) |  |  |






<a name="armonik-api-grpc-v1-submitter-CreateSessionReply"></a>

### CreateSessionReply
Reply after session creation.
We have this reply in case of success.
When the session creation is not successful, there is an rpc exception.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_id | [string](#string) |  | Session id of the created session if successful |






<a name="armonik-api-grpc-v1-submitter-CreateSessionRequest"></a>

### CreateSessionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| default_task_option | [armonik.api.grpc.v1.TaskOptions](#armonik-api-grpc-v1-TaskOptions) |  |  |
| partition_ids | [string](#string) | repeated | List of partitions allowed during the session |






<a name="armonik-api-grpc-v1-submitter-CreateSmallTaskRequest"></a>

### CreateSmallTaskRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_id | [string](#string) |  |  |
| task_options | [armonik.api.grpc.v1.TaskOptions](#armonik-api-grpc-v1-TaskOptions) |  |  |
| task_requests | [armonik.api.grpc.v1.TaskRequest](#armonik-api-grpc-v1-TaskRequest) | repeated |  |






<a name="armonik-api-grpc-v1-submitter-CreateTaskReply"></a>

### CreateTaskReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| creation_status_list | [CreateTaskReply.CreationStatusList](#armonik-api-grpc-v1-submitter-CreateTaskReply-CreationStatusList) |  |  |
| error | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-submitter-CreateTaskReply-CreationStatus"></a>

### CreateTaskReply.CreationStatus



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_info | [CreateTaskReply.TaskInfo](#armonik-api-grpc-v1-submitter-CreateTaskReply-TaskInfo) |  |  |
| error | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-submitter-CreateTaskReply-CreationStatusList"></a>

### CreateTaskReply.CreationStatusList



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| creation_statuses | [CreateTaskReply.CreationStatus](#armonik-api-grpc-v1-submitter-CreateTaskReply-CreationStatus) | repeated |  |






<a name="armonik-api-grpc-v1-submitter-CreateTaskReply-TaskInfo"></a>

### CreateTaskReply.TaskInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  |  |
| expected_output_keys | [string](#string) | repeated |  |
| data_dependencies | [string](#string) | repeated |  |






<a name="armonik-api-grpc-v1-submitter-GetResultStatusReply"></a>

### GetResultStatusReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id_statuses | [GetResultStatusReply.IdStatus](#armonik-api-grpc-v1-submitter-GetResultStatusReply-IdStatus) | repeated |  |






<a name="armonik-api-grpc-v1-submitter-GetResultStatusReply-IdStatus"></a>

### GetResultStatusReply.IdStatus



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result_id | [string](#string) |  |  |
| status | [armonik.api.grpc.v1.result_status.ResultStatus](#armonik-api-grpc-v1-result_status-ResultStatus) |  |  |






<a name="armonik-api-grpc-v1-submitter-GetResultStatusRequest"></a>

### GetResultStatusRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result_ids | [string](#string) | repeated |  |
| session_id | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-submitter-GetTaskStatusReply"></a>

### GetTaskStatusReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id_statuses | [GetTaskStatusReply.IdStatus](#armonik-api-grpc-v1-submitter-GetTaskStatusReply-IdStatus) | repeated |  |






<a name="armonik-api-grpc-v1-submitter-GetTaskStatusReply-IdStatus"></a>

### GetTaskStatusReply.IdStatus



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  |  |
| status | [armonik.api.grpc.v1.task_status.TaskStatus](#armonik-api-grpc-v1-task_status-TaskStatus) |  |  |






<a name="armonik-api-grpc-v1-submitter-GetTaskStatusRequest"></a>

### GetTaskStatusRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_ids | [string](#string) | repeated |  |






<a name="armonik-api-grpc-v1-submitter-ResultReply"></a>

### ResultReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [armonik.api.grpc.v1.DataChunk](#armonik-api-grpc-v1-DataChunk) |  |  |
| error | [armonik.api.grpc.v1.TaskError](#armonik-api-grpc-v1-TaskError) |  |  |
| not_completed_task | [string](#string) |  |  |






<a name="armonik-api-grpc-v1-submitter-SessionFilter"></a>

### SessionFilter



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sessions | [string](#string) | repeated |  |
| included | [SessionFilter.StatusesRequest](#armonik-api-grpc-v1-submitter-SessionFilter-StatusesRequest) |  |  |
| excluded | [SessionFilter.StatusesRequest](#armonik-api-grpc-v1-submitter-SessionFilter-StatusesRequest) |  |  |






<a name="armonik-api-grpc-v1-submitter-SessionFilter-StatusesRequest"></a>

### SessionFilter.StatusesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| statuses | [armonik.api.grpc.v1.session_status.SessionStatus](#armonik-api-grpc-v1-session_status-SessionStatus) | repeated |  |






<a name="armonik-api-grpc-v1-submitter-SessionIdList"></a>

### SessionIdList



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_ids | [string](#string) | repeated |  |






<a name="armonik-api-grpc-v1-submitter-SessionList"></a>

### SessionList



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sessions | [armonik.api.grpc.v1.Session](#armonik-api-grpc-v1-Session) | repeated |  |






<a name="armonik-api-grpc-v1-submitter-TaskFilter"></a>

### TaskFilter



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session | [TaskFilter.IdsRequest](#armonik-api-grpc-v1-submitter-TaskFilter-IdsRequest) |  |  |
| task | [TaskFilter.IdsRequest](#armonik-api-grpc-v1-submitter-TaskFilter-IdsRequest) |  |  |
| included | [TaskFilter.StatusesRequest](#armonik-api-grpc-v1-submitter-TaskFilter-StatusesRequest) |  |  |
| excluded | [TaskFilter.StatusesRequest](#armonik-api-grpc-v1-submitter-TaskFilter-StatusesRequest) |  |  |






<a name="armonik-api-grpc-v1-submitter-TaskFilter-IdsRequest"></a>

### TaskFilter.IdsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [string](#string) | repeated |  |






<a name="armonik-api-grpc-v1-submitter-TaskFilter-StatusesRequest"></a>

### TaskFilter.StatusesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| statuses | [armonik.api.grpc.v1.task_status.TaskStatus](#armonik-api-grpc-v1-task_status-TaskStatus) | repeated |  |






<a name="armonik-api-grpc-v1-submitter-WaitRequest"></a>

### WaitRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| filter | [TaskFilter](#armonik-api-grpc-v1-submitter-TaskFilter) |  |  |
| stop_on_first_task_error | [bool](#bool) |  |  |
| stop_on_first_task_cancellation | [bool](#bool) |  |  |






<a name="armonik-api-grpc-v1-submitter-WatchResultRequest"></a>

### WatchResultRequest
Request to watch result states
It contains the list of result ids you want to watch
  and some options to filter out some events.
Chunking is achieved by sending multiple messages with different result ids.
It is the responsability of the client to chunk the messages properly and avoid messages too large.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fetch_statuses | [armonik.api.grpc.v1.result_status.ResultStatus](#armonik-api-grpc-v1-result_status-ResultStatus) | repeated | list of statuses to check results against for the initial fetch |
| watch_statuses | [armonik.api.grpc.v1.result_status.ResultStatus](#armonik-api-grpc-v1-result_status-ResultStatus) | repeated | list of statuses to check results against for the watch |
| result_ids | [string](#string) | repeated | result ids to fetch/watch |






<a name="armonik-api-grpc-v1-submitter-WatchResultStream"></a>

### WatchResultStream
List of Result statuses
Result Ids are grouped by status. One message contains result Ids that have the same status.
Chunking is achieved by receiving several messages with the same status and the list of ids in multiple parts.
As chunking is implicit, there is no way to distinguish between chunked messages and actually separate messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [armonik.api.grpc.v1.result_status.ResultStatus](#armonik-api-grpc-v1-result_status-ResultStatus) |  | Status of the results |
| result_ids | [string](#string) | repeated | List of result ids that triggered the event |





 

 

 

 



<a name="submitter_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## submitter_service.proto


 

 

 


<a name="armonik-api-grpc-v1-submitter-Submitter"></a>

### Submitter


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetServiceConfiguration | [.armonik.api.grpc.v1.Empty](#armonik-api-grpc-v1-Empty) | [.armonik.api.grpc.v1.Configuration](#armonik-api-grpc-v1-Configuration) |  |
| CreateSession | [CreateSessionRequest](#armonik-api-grpc-v1-submitter-CreateSessionRequest) | [CreateSessionReply](#armonik-api-grpc-v1-submitter-CreateSessionReply) |  |
| CancelSession | [.armonik.api.grpc.v1.Session](#armonik-api-grpc-v1-Session) | [.armonik.api.grpc.v1.Empty](#armonik-api-grpc-v1-Empty) |  |
| CreateSmallTasks | [CreateSmallTaskRequest](#armonik-api-grpc-v1-submitter-CreateSmallTaskRequest) | [CreateTaskReply](#armonik-api-grpc-v1-submitter-CreateTaskReply) |  |
| CreateLargeTasks | [CreateLargeTaskRequest](#armonik-api-grpc-v1-submitter-CreateLargeTaskRequest) stream | [CreateTaskReply](#armonik-api-grpc-v1-submitter-CreateTaskReply) |  |
| ListTasks | [TaskFilter](#armonik-api-grpc-v1-submitter-TaskFilter) | [.armonik.api.grpc.v1.TaskIdList](#armonik-api-grpc-v1-TaskIdList) |  |
| ListSessions | [SessionFilter](#armonik-api-grpc-v1-submitter-SessionFilter) | [SessionIdList](#armonik-api-grpc-v1-submitter-SessionIdList) |  |
| CountTasks | [TaskFilter](#armonik-api-grpc-v1-submitter-TaskFilter) | [.armonik.api.grpc.v1.Count](#armonik-api-grpc-v1-Count) |  |
| TryGetResultStream | [.armonik.api.grpc.v1.ResultRequest](#armonik-api-grpc-v1-ResultRequest) | [ResultReply](#armonik-api-grpc-v1-submitter-ResultReply) stream |  |
| TryGetTaskOutput | [.armonik.api.grpc.v1.TaskOutputRequest](#armonik-api-grpc-v1-TaskOutputRequest) | [.armonik.api.grpc.v1.Output](#armonik-api-grpc-v1-Output) |  |
| WaitForAvailability | [.armonik.api.grpc.v1.ResultRequest](#armonik-api-grpc-v1-ResultRequest) | [AvailabilityReply](#armonik-api-grpc-v1-submitter-AvailabilityReply) |  |
| WaitForCompletion | [WaitRequest](#armonik-api-grpc-v1-submitter-WaitRequest) | [.armonik.api.grpc.v1.Count](#armonik-api-grpc-v1-Count) |  |
| CancelTasks | [TaskFilter](#armonik-api-grpc-v1-submitter-TaskFilter) | [.armonik.api.grpc.v1.Empty](#armonik-api-grpc-v1-Empty) |  |
| GetTaskStatus | [GetTaskStatusRequest](#armonik-api-grpc-v1-submitter-GetTaskStatusRequest) | [GetTaskStatusReply](#armonik-api-grpc-v1-submitter-GetTaskStatusReply) |  |
| GetResultStatus | [GetResultStatusRequest](#armonik-api-grpc-v1-submitter-GetResultStatusRequest) | [GetResultStatusReply](#armonik-api-grpc-v1-submitter-GetResultStatusReply) |  |
| WatchResults | [WatchResultRequest](#armonik-api-grpc-v1-submitter-WatchResultRequest) stream | [WatchResultStream](#armonik-api-grpc-v1-submitter-WatchResultStream) stream | This endpoint allows a user to watch a list of results and be notified when there is any change. The user sends the list of ids they want to watch. The submitter will then send the statuses for all requested ids immediately and keep the stream open. Ids not present in DB will be returned at that time with the special state NOTFOUND. The submitter will send updates to the client via the opened stream. Any reply can be implicitely chunked if there are too many event to report at the same time (or for the first reply). It is possible to filter out specific statuses from events. |

 



<a name="task_status-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## task_status.proto
Status of a task.

 


<a name="armonik-api-grpc-v1-task_status-TaskStatus"></a>

### TaskStatus
Task status.

| Name | Number | Description |
| ---- | ------ | ----------- |
| TASK_STATUS_UNSPECIFIED | 0 | Task is in an unknown state. |
| TASK_STATUS_CREATING | 1 | Task is being created in database. |
| TASK_STATUS_SUBMITTED | 2 | Task is submitted to the queue. |
| TASK_STATUS_DISPATCHED | 3 | Task is dispatched to a worker. |
| TASK_STATUS_COMPLETED | 4 | Task is completed. |
| TASK_STATUS_ERROR | 5 | Task is in error state. |
| TASK_STATUS_TIMEOUT | 6 | Task is in timeout state. |
| TASK_STATUS_CANCELLING | 7 | Task is being cancelled. |
| TASK_STATUS_CANCELLED | 8 | Task is cancelled. |
| TASK_STATUS_PROCESSING | 9 | Task is being processed. |
| TASK_STATUS_PROCESSED | 10 | Task is processed. |


 

 

 



<a name="tasks_common-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tasks_common.proto
Messages describing tasks and associated requests and responses.


<a name="armonik-api-grpc-v1-tasks-CancelTasksRequest"></a>

### CancelTasksRequest
Request to cancel one or many tasks


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_ids | [string](#string) | repeated | Ids of the tasks to cancel |






<a name="armonik-api-grpc-v1-tasks-CancelTasksResponse"></a>

### CancelTasksResponse
Response from canceling one or many tasks


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tasks | [TaskSummary](#armonik-api-grpc-v1-tasks-TaskSummary) | repeated | Tasks that have been asked to cancel |






<a name="armonik-api-grpc-v1-tasks-GetResultIdsRequest"></a>

### GetResultIdsRequest
Request for getting result ids of tasks ids.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) | repeated | The task IDs. |






<a name="armonik-api-grpc-v1-tasks-GetResultIdsResponse"></a>

### GetResultIdsResponse
Response for getting result ids of tasks ids.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_results | [GetResultIdsResponse.MapTaskResult](#armonik-api-grpc-v1-tasks-GetResultIdsResponse-MapTaskResult) | repeated | The task results. |






<a name="armonik-api-grpc-v1-tasks-GetResultIdsResponse-MapTaskResult"></a>

### GetResultIdsResponse.MapTaskResult
Represents a task result.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  | The task ID. |
| result_ids | [string](#string) | repeated | The result IDs. |






<a name="armonik-api-grpc-v1-tasks-GetTaskRequest"></a>

### GetTaskRequest
Request for getting a single task.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  | The task ID. |






<a name="armonik-api-grpc-v1-tasks-GetTaskResponse"></a>

### GetTaskResponse
Response for getting a single task.

Return a raw task.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task | [TaskRaw](#armonik-api-grpc-v1-tasks-TaskRaw) |  | The task. |






<a name="armonik-api-grpc-v1-tasks-ListTasksRequest"></a>

### ListTasksRequest
Request to list tasks.

Use pagination, filtering and sorting.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| page | [int32](#int32) |  | The page number. Start at 0. |
| page_size | [int32](#int32) |  | The page size. |
| filter | [ListTasksRequest.Filter](#armonik-api-grpc-v1-tasks-ListTasksRequest-Filter) |  | The filter.

Must be set for every request but can be empty. |
| sort | [ListTasksRequest.Sort](#armonik-api-grpc-v1-tasks-ListTasksRequest-Sort) |  | The sort.

Must be set for every request. |
| with_errors | [bool](#bool) |  | Request error message in case of error in task |






<a name="armonik-api-grpc-v1-tasks-ListTasksRequest-Filter"></a>

### ListTasksRequest.Filter
Represents a filter with every available fields.

Every field can be used as the same time.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_id | [string](#string) |  | The session ID of related tasks. |
| status | [armonik.api.grpc.v1.task_status.TaskStatus](#armonik-api-grpc-v1-task_status-TaskStatus) |  | The task status. |
| created_after | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Use the creation date of a task to filter tasks created after the input. |
| created_before | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Use the creation date of a task to filter tasks created before the input. |
| started_after | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Use the start date of a task to filter tasks started after the input. |
| started_before | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Use the start date of a task to filter tasks started before the input. |
| ended_after | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Use the end date of a task to filter tasks ended after the input. |
| ended_before | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Use the end date of a task to filter tasks ended before the input. |






<a name="armonik-api-grpc-v1-tasks-ListTasksRequest-Sort"></a>

### ListTasksRequest.Sort
Represents the sort object.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| field | [ListTasksRequest.OrderByField](#armonik-api-grpc-v1-tasks-ListTasksRequest-OrderByField) |  | The field to order by. |
| direction | [ListTasksRequest.OrderDirection](#armonik-api-grpc-v1-tasks-ListTasksRequest-OrderDirection) |  | The order direction. |






<a name="armonik-api-grpc-v1-tasks-ListTasksResponse"></a>

### ListTasksResponse
Response to list tasks.

Use pagination, filtering and sorting from the request.
Return a list of formated tasks.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tasks | [TaskSummary](#armonik-api-grpc-v1-tasks-TaskSummary) | repeated | The list of tasks. |
| page | [int32](#int32) |  | The page number. Start at 0. |
| page_size | [int32](#int32) |  | The page size. |
| total | [int32](#int32) |  | The total number of tasks. |






<a name="armonik-api-grpc-v1-tasks-TaskRaw"></a>

### TaskRaw
A raw task object.

Used when a single task is returned.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The task ID. |
| session_id | [string](#string) |  | The session ID. A task have only one related session but a session have many tasks. |
| owner_pod_id | [string](#string) |  | The owner pod ID. |
| parent_task_ids | [string](#string) | repeated | The parent task IDs. A tasks can be a child of another task. |
| data_dependencies | [string](#string) | repeated | The data dependencies. A task have data dependencies. |
| expected_output_ids | [string](#string) | repeated | The expected output IDs. A task have expected output IDs. |
| retry_of_ids | [string](#string) | repeated | The retry of IDs. When a task fail, retry will use these set of IDs. |
| status | [armonik.api.grpc.v1.task_status.TaskStatus](#armonik-api-grpc-v1-task_status-TaskStatus) |  | The task status. |
| status_message | [string](#string) |  | The status message. |
| options | [armonik.api.grpc.v1.TaskOptions](#armonik-api-grpc-v1-TaskOptions) |  | The task options. |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The task creation date. |
| submitted_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The task submission date. |
| started_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The task start date. |
| ended_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The task end date. Also used when task failed. |
| pod_ttl | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The pod TTL (Time To Live). |
| output | [TaskRaw.Output](#armonik-api-grpc-v1-tasks-TaskRaw-Output) |  | The task output. |
| pod_hostname | [string](#string) |  | The hostname of the container running the task. |
| received_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | When the task is received by the agent. |
| acquired_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | When the task is acquired by the agent. |






<a name="armonik-api-grpc-v1-tasks-TaskRaw-Output"></a>

### TaskRaw.Output
Represents the task output.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  | To know if a task have failed or succeed. |
| error | [string](#string) |  | The error message. Only set if task have failed. |






<a name="armonik-api-grpc-v1-tasks-TaskSummary"></a>

### TaskSummary
A summary task object.

It contains only a subset of the fields from the underlying task object.
Used when a list of tasks are returned.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The task ID. |
| session_id | [string](#string) |  | The session ID. A task have only one related session but a session have many tasks. |
| options | [armonik.api.grpc.v1.TaskOptions](#armonik-api-grpc-v1-TaskOptions) |  | The task options. |
| status | [armonik.api.grpc.v1.task_status.TaskStatus](#armonik-api-grpc-v1-task_status-TaskStatus) |  | The task status. |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The task creation date. |
| started_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The task start date. |
| ended_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The task end date. Also used when task failed. |
| error | [string](#string) |  | The error message. Only set if task have failed. |





 


<a name="armonik-api-grpc-v1-tasks-ListTasksRequest-OrderByField"></a>

### ListTasksRequest.OrderByField
Represents every available field to use in order to sort tasks.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_BY_FIELD_UNSPECIFIED | 0 | Unspecified. |
| ORDER_BY_FIELD_TASK_ID | 1 | The task ID. |
| ORDER_BY_FIELD_SESSION_ID | 2 | The session ID. |
| ORDER_BY_FIELD_STATUS | 3 | The task status. |
| ORDER_BY_FIELD_CREATED_AT | 4 | The task creation date. |
| ORDER_BY_FIELD_STARTED_AT | 5 | The task start date. |
| ORDER_BY_FIELD_ENDED_AT | 6 | The task end date. |



<a name="armonik-api-grpc-v1-tasks-ListTasksRequest-OrderDirection"></a>

### ListTasksRequest.OrderDirection
Represents every available order directions.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_DIRECTION_UNSPECIFIED | 0 | Unspecified. Do not use. |
| ORDER_DIRECTION_ASC | 1 | Ascending. |
| ORDER_DIRECTION_DESC | 2 | Descending. |


 

 

 



<a name="tasks_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tasks_service.proto
Tasks related methods within a service.

 

 

 


<a name="armonik-api-grpc-v1-tasks-Tasks"></a>

### Tasks
Service for handling tasks.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListTasks | [ListTasksRequest](#armonik-api-grpc-v1-tasks-ListTasksRequest) | [ListTasksResponse](#armonik-api-grpc-v1-tasks-ListTasksResponse) | Get a tasks list using pagination, filters and sorting. |
| GetTask | [GetTaskRequest](#armonik-api-grpc-v1-tasks-GetTaskRequest) | [GetTaskResponse](#armonik-api-grpc-v1-tasks-GetTaskResponse) | Get a task by its id. |
| CancelTasks | [CancelTasksRequest](#armonik-api-grpc-v1-tasks-CancelTasksRequest) | [CancelTasksResponse](#armonik-api-grpc-v1-tasks-CancelTasksResponse) | Cancel tasks using ids. |
| GetResultIds | [GetResultIdsRequest](#armonik-api-grpc-v1-tasks-GetResultIdsRequest) | [GetResultIdsResponse](#armonik-api-grpc-v1-tasks-GetResultIdsResponse) | Get ids of the result that tasks should produce. |

 



<a name="worker_common-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## worker_common.proto



<a name="armonik-api-grpc-v1-worker-HealthCheckReply"></a>

### HealthCheckReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [HealthCheckReply.ServingStatus](#armonik-api-grpc-v1-worker-HealthCheckReply-ServingStatus) |  |  |






<a name="armonik-api-grpc-v1-worker-ProcessReply"></a>

### ProcessReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| communication_token | [string](#string) |  |  |
| output | [armonik.api.grpc.v1.Output](#armonik-api-grpc-v1-Output) |  |  |






<a name="armonik-api-grpc-v1-worker-ProcessRequest"></a>

### ProcessRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| communication_token | [string](#string) |  |  |
| compute | [ProcessRequest.ComputeRequest](#armonik-api-grpc-v1-worker-ProcessRequest-ComputeRequest) |  |  |






<a name="armonik-api-grpc-v1-worker-ProcessRequest-ComputeRequest"></a>

### ProcessRequest.ComputeRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| init_request | [ProcessRequest.ComputeRequest.InitRequest](#armonik-api-grpc-v1-worker-ProcessRequest-ComputeRequest-InitRequest) |  |  |
| payload | [armonik.api.grpc.v1.DataChunk](#armonik-api-grpc-v1-DataChunk) |  |  |
| init_data | [ProcessRequest.ComputeRequest.InitData](#armonik-api-grpc-v1-worker-ProcessRequest-ComputeRequest-InitData) |  |  |
| data | [armonik.api.grpc.v1.DataChunk](#armonik-api-grpc-v1-DataChunk) |  |  |






<a name="armonik-api-grpc-v1-worker-ProcessRequest-ComputeRequest-InitData"></a>

### ProcessRequest.ComputeRequest.InitData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| last_data | [bool](#bool) |  |  |






<a name="armonik-api-grpc-v1-worker-ProcessRequest-ComputeRequest-InitRequest"></a>

### ProcessRequest.ComputeRequest.InitRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| configuration | [armonik.api.grpc.v1.Configuration](#armonik-api-grpc-v1-Configuration) |  |  |
| session_id | [string](#string) |  |  |
| task_id | [string](#string) |  |  |
| task_options | [armonik.api.grpc.v1.TaskOptions](#armonik-api-grpc-v1-TaskOptions) |  |  |
| expected_output_keys | [string](#string) | repeated |  |
| payload | [armonik.api.grpc.v1.DataChunk](#armonik-api-grpc-v1-DataChunk) |  |  |





 


<a name="armonik-api-grpc-v1-worker-HealthCheckReply-ServingStatus"></a>

### HealthCheckReply.ServingStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| SERVING | 1 |  |
| NOT_SERVING | 2 |  |


 

 

 



<a name="worker_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## worker_service.proto


 

 

 


<a name="armonik-api-grpc-v1-worker-Worker"></a>

### Worker


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Process | [ProcessRequest](#armonik-api-grpc-v1-worker-ProcessRequest) stream | [ProcessReply](#armonik-api-grpc-v1-worker-ProcessReply) |  |
| HealthCheck | [.armonik.api.grpc.v1.Empty](#armonik-api-grpc-v1-Empty) | [HealthCheckReply](#armonik-api-grpc-v1-worker-HealthCheckReply) |  |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

