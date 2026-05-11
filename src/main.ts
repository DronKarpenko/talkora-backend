import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://talkora-one.vercel.app/'
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  })

  const config = new DocumentBuilder()
      .setTitle('Talkora API')
      .setDescription('API documentation: <a href="/v1/api-json" target="_blank">/v1/api-json</a>')
      .setVersion('1.0')
      .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, document, {
    jsonDocumentUrl: '/v1/api-json',
    explorer: true,
  })

  await app.listen(process.env.PORT ?? 3000)
}

bootstrap()
