import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantsService } from 'src/restaurants/restaurants.service';

@Injectable()
export class ReservationsService {

  constructor(
    @InjectRepository(Reservation) private readonly reservationsRepository: Repository<Reservation>,private readonly restaurantsService: RestaurantsService
  ) {}


  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const reservation: Reservation = new Reservation();
    Object.assign(reservation, createReservationDto)
    reservation.restaurant = await this.restaurantsService.findOne(createReservationDto.restaurantId);

    return this.reservationsRepository.save(reservation);
  }

  findAll(): Promise<Reservation[]> {
    return this.reservationsRepository.find();
  }

  findOne(id: number): Promise<Reservation> {
    return this.reservationsRepository.findOneBy({ id });
  }

  async update(id: number, updateReservationDto: UpdateReservationDto): Promise<Reservation> {
    const reservation: Reservation = new Reservation();
    Object.assign(reservation, updateReservationDto)
    
    return this.reservationsRepository.save(reservation);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.reservationsRepository.delete(id);
  }
}
