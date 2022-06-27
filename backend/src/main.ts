import {HttpAdapterHost, NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {PrismaClientExceptionFilter, PrismaService} from 'nestjs-prisma';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    // enable shutdown hook
    const prismaService: PrismaService = app.get(PrismaService);
    await prismaService.enableShutdownHooks(app);
    const {httpAdapter} = app.get(HttpAdapterHost);
    app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

    await app.listen(process.env.PORT);
}

bootstrap();
