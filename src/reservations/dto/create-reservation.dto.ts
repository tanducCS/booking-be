import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReservationDto {

  @IsString()
  @IsNotEmpty()
  reservation_holder_name: string;

  @IsString()
  @IsNotEmpty()
  phone_number: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  notes: string;


  @IsNumber()
  @IsNotEmpty()
  number_adult: number;

  @IsNumber()
  @IsNotEmpty()
  number_child: number;

  @IsDate()
  @IsNotEmpty()
  arrival_date: Date;

  @IsString()
  @IsNotEmpty()
  arrival_hour: string;

  @IsNumber()
  @IsNotEmpty()
  restaurantId: number;
}
