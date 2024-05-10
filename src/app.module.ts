import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { Restaurant } from './restaurants/entities/restaurant.entity';
import { User } from './user/entities/user.entity';
import { ReservationsModule } from './reservations/reservations.module';
import { Reservation } from './reservations/entities/reservation.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://booking_05f6_user:p9dsacz2e7Ad3jQ2zMsbwedehNvPsUm7@dpg-cour1p8l6cac73b9djmg-a/booking_05f6',
      port: 5432,
      password: 'p9dsacz2e7Ad3jQ2zMsbwedehNvPsUm7',
      username: 'booking_05f6_user',
      entities: [User, Restaurant,Reservation],
      database: 'booking_05f6',  
      synchronize: true,
      logging: true,
    }),
    RestaurantsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    ReservationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
