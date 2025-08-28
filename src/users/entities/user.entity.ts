import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

export enum ROLE {
  TENANT = "TENANT",
  PG_OWNER = "PG-OWNER",
}

@Entity("users")
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  fullName: string;

  @Column({ unique: true })
  username: string;

  @Column()
  phoneNumber: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: ROLE.TENANT })
  role: ROLE;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
