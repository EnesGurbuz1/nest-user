import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';


@ObjectType() 

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  email: string;
}
