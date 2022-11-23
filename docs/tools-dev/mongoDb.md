# MongoDB

## 创建用户

```
 db.createUser({ user: "root", pwd: "root", roles: [{ role: "userAdminAnyDatabase", db: "admin" }] })
```