const User = require("./../../app/models/User");

describe("Test de User", () => {
  test("1) Test de clase User", () => {
    const user = new User(1, "devleon", "Juan", "Bio");

    expect(user.id).toBe(1);
    expect(user.username).toBe("devleon");
    expect(user.name).toBe("Juan");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });

  test("2) Add getters", () => {
    const user = new User(1, "devleon", "Juan", "Bio");
    expect(user.getUsername).toBe("devleon");
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
  });

  test("3) Add setters", () => {
    const user = new User(1, "devleon", "Juan", "Bio");
    user.setUsername = "Pablo";
    expect(user.username).toBe("Pablo");

    user.setBio = "New Bio";
    expect(user.bio).toBe("New Bio");
  });
});
