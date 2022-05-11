const UserService = require("../../app/services/UserService");

describe("Tests for UserService", () => {
  test("1) Create a new ser using the UserService", () => {
    const user = UserService.create(1, "devleon", "Juan");
    expect(user.username).toBe("devleon");
    expect(user.name).toBe("Juan");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });

  test("2) Get all user data in a list", () => {
    const user = UserService.create(1, "devleon", "Juan");
    const userInfoInList = UserService.getInfo(user);
    expect(userInfoInList[0]).toBe(1);
    expect(userInfoInList[1]).toBe("devleon");
    expect(userInfoInList[2]).toBe("Juan");
    expect(userInfoInList[3]).toBe("Sin bio");
  });

  test("3) Update username", () => {
    const user = UserService.create(1, "devleon", "Juan");
    UserService.updateUserUsername(user, "devleones");
    expect(user.username).toBe("devleones");
  });

  test("4) Given a list of users give me the list of usernames", () => {
    const user1 = UserService.create(1, "devleon1", "juan");
    const user2 = UserService.create(1, "devleon2", "juan");
    const user3 = UserService.create(1, "devleon3", "juan");
    const usernames = UserService.getAllUsernames([user1, user2, user3]);
    expect(usernames).toContain("devleon1");
    expect(usernames).toContain("devleon2");
    expect(usernames).toContain("devleon3");
  });
});
