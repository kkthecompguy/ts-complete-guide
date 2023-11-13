import { User, UserProps } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { Collection } from "./models/Collection";
import { UserList } from "./views/UserList";

const user = User.buildUser({ name: "NAME", age: 20 });

const userEdit = new UserEdit(document.getElementById("root"), user);

userEdit.render();

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on("change", () => {
  const root = document.getElementById("root");
  new UserList(root, users).render();
});
