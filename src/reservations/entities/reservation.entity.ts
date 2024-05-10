import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  reservation_holder_name: string;

  @Column({ type: 'varchar', length: 30 })
  email: string;

  @Column({ type: 'varchar', length: 30 })
  phone_number: string;

  @Column({ type: 'varchar', length: 30, nullable: true})
  notes: string;

  @Column({ type: 'int'})
  number_adult: number;

  @Column({ type: 'int'})
  number_child: number;

  @Column({ type: 'date'})
  arrival_date: Date;

  @Column({ type: 'varchar'})
  arrival_hour: string;

  @ManyToOne(type => Restaurant, restaurant => restaurant.reservations)
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;
}
