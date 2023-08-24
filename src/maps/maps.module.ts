import { Module } from '@nestjs/common';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';
import { Client } from '@googlemaps/google-maps-services-js';
import { DirectionsController } from './directions/directions.controller';
import { DirectionsService } from './directions/directions.service';

@Module({
  controllers: [PlacesController, DirectionsController],
  providers: [PlacesService, {
    provide: Client,
    useValue: new Client()
  }, DirectionsService],
  exports: [DirectionsService]
})
export class MapsModule {}
 