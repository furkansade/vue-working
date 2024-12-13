const projects = [
    {
        "_id": "64d2b1295f6d4c5d807c6a78",
        "projectName": "Project 1",
        "projectExpireDate": "2024-06-15T12:00:00Z",
        "projectDescription": "This is a description for Project 1",
        "projectStatus": "active",
        "users": ["64d2b12a5f6d4c5d807c6a79", "64d2b12b5f6d4c5d807c6a7a"],
        "createdAt": "2023-12-12T12:00:00Z",
        "updatedAt": "2023-12-12T12:00:00Z"
    },
    {
        "_id": "64d2b1305f6d4c5d807c6a80",
        "projectName": "Project 2",
        "projectExpireDate": "2024-09-10T12:00:00Z",
        "projectDescription": "This is a description for Project 2",
        "projectStatus": "inactive",
        "users": ["64d2b12c5f6d4c5d807c6a7b"],
        "createdAt": "2023-12-12T12:00:00Z",
        "updatedAt": "2023-12-12T12:00:00Z"
    },
    {
        "_id": "64d2b1375f6d4c5d807c6a81",
        "projectName": "Project 3",
        "projectExpireDate": "2024-12-25T12:00:00Z",
        "projectDescription": "This is a description for Project 3",
        "projectStatus": "active",
        "users": ["64d2b12d5f6d4c5d807c6a7c", "64d2b12e5f6d4c5d807c6a7d", "64d2b12f5f6d4c5d807c6a7e"],
        "createdAt": "2023-12-12T12:00:00Z",
        "updatedAt": "2023-12-12T12:00:00Z"
    },
    {
        "_id": "64d2b1425f6d4c5d807c6a82",
        "projectName": "Project 4",
        "projectExpireDate": "2024-03-22T12:00:00Z",
        "projectDescription": "This is a description for Project 4",
        "projectStatus": "inactive",
        "users": ["64d2b1305f6d4c5d807c6a7f"],
        "createdAt": "2023-12-12T12:00:00Z",
        "updatedAt": "2023-12-12T12:00:00Z"
    },
    {
        "_id": "64d2b1495f6d4c5d807c6a83",
        "projectName": "Project 5",
        "projectExpireDate": "2024-11-18T12:00:00Z",
        "projectDescription": "This is a description for Project 5",
        "projectStatus": "active",
        "users": ["64d2b1355f6d4c5d807c6a7g"],
        "createdAt": "2023-12-12T12:00:00Z",
        "updatedAt": "2023-12-12T12:00:00Z"
    },
    {
        "_id": "64d2b1515f6d4c5d807c6a84",
        "projectName": "Project 6",
        "projectExpireDate": "2024-07-11T12:00:00Z",
        "projectDescription": "This is a description for Project 6",
        "projectStatus": "inactive",
        "users": ["64d2b1385f6d4c5d807c6a7h", "64d2b1395f6d4c5d807c6a7i"],
        "createdAt": "2023-12-12T12:00:00Z",
        "updatedAt": "2023-12-12T12:00:00Z"
    },
    {
        "_id": "64d2b1595f6d4c5d807c6a85",
        "projectName": "Project 7",
        "projectExpireDate": "2024-05-09T12:00:00Z",
        "projectDescription": "This is a description for Project 7",
        "projectStatus": "active",
        "users": ["64d2b1405f6d4c5d807c6a7j"],
        "createdAt": "2023-12-12T12:00:00Z",
        "updatedAt": "2023-12-12T12:00:00Z"
    },
    {
        "_id": "64d2b1605f6d4c5d807c6a86",
        "projectName": "Project 8",
        "projectExpireDate": "2024-10-30T12:00:00Z",
        "projectDescription": "This is a description for Project 8",
        "projectStatus": "inactive",
        "users": ["64d2b1415f6d4c5d807c6a7k", "64d2b1425f6d4c5d807c6a7l"],
        "createdAt": "2023-12-12T12:00:00Z",
        "updatedAt": "2023-12-12T12:00:00Z"
    },
    {
        "_id": "64d2b1675f6d4c5d807c6a87",
        "projectName": "Project 9",
        "projectExpireDate": "2024-04-21T12:00:00Z",
        "projectDescription": "This is a description for Project 9",
        "projectStatus": "active",
        "users": ["64d2b1435f6d4c5d807c6a7m", "64d2b1445f6d4c5d807c6a7n"],
        "createdAt": "2023-12-12T12:00:00Z",
        "updatedAt": "2023-12-12T12:00:00Z"
    },
    {
        "_id": "64d2b16f5f6d4c5d807c6a88",
        "projectName": "Project 10",
        "projectExpireDate": "2024-08-14T12:00:00Z",
        "projectDescription": "This is a description for Project 10",
        "projectStatus": "inactive",
        "users": ["64d2b1455f6d4c5d807c6a7o"],
        "createdAt": "2023-12-12T12:00:00Z",
        "updatedAt": "2023-12-12T12:00:00Z"
    },
    {
        "_id": "64d2b1785f6d4c5d807c6a89",
        "projectName": "Project 11",
        "projectExpireDate": "2024-12-01T12:00:00Z",
        "projectDescription": "This is a description for Project 11",
        "projectStatus": "active",
        "users": ["64d2b1465f6d4c5d807c6a7p", "64d2b1475f6d4c5d807c6a7q"],
        "createdAt": "2023-12-12T12:00:00Z",
        "updatedAt": "2023-12-12T12:00:00Z"
    },
    {
        "_id": "64d2b1805f6d4c5d807c6a8a",
        "projectName": "Project 12",
        "projectExpireDate": "2024-02-20T12:00:00Z",
        "projectDescription": "This is a description for Project 12",
        "projectStatus": "inactive",
        "users": ["64d2b1485f6d4c5d807c6a7r"],
        "createdAt": "2023-12-12T12:00:00Z",
        "updatedAt": "2023-12-12T12:00:00Z"
    },
    {
        "_id": "64d2b1895f6d4c5d807c6a8b",
        "projectName": "Project 13",
        "projectExpireDate": "2024-11-11T12:00:00Z",
        "projectDescription": "This is a description for Project 13",
        "projectStatus": "active",
        "users": ["64d2b1495f6d4c5d807c6a7s", "64d2b1505f6d4c5d807c6a7t"],
        "createdAt": "2023-12-12T12:00:00Z",
        "updatedAt": "2023-12-12T12:00:00Z"
    }
  ];
  
  export default projects;
  