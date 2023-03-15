import { Module } from '@nestjs/common';
import { CameraGateway } from './camera/camera.controller';

@Module({
  imports: [],
  controllers: [CameraGateway],
  providers: [],
})
export class AppModule {}
