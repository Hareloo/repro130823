import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TestEntity')
export class TestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 15 })
  softwareVersion: string;

  @Column('timestamp')
  timestamp: Date;
}
