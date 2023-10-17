export type MockGetUsersAPIResponse = typeof mockGetUsersAPIResponse;

export const mockGetUsersAPIResponse = [
  {
    id: 1,
    email: "john@mail.com",
    password: "changeme",
    name: "Jhon",
    role: "customer",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867"
  }
];
