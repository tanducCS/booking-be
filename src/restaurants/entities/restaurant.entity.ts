import { Reservation } from 'src/reservations/entities/reservation.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Restaurant {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 40 })
  address: string;

  @Column({ type: 'varchar', length: 40 })
  type: string;

  @Column({ type: 'int' })
  price_min: number;

  @Column({ type: 'int' })
  price_max: number;

  @Column({ type: 'varchar' })
  open_hour: string;

  @Column({ type: 'varchar' })
  close_hour: string;

  @OneToMany(() => Reservation, reservation => reservation.restaurant)
  reservations: Reservation[];
}