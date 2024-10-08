import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationException } from 'src/exceptions/validation.exceptions';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    if (!metadata.metatype || !this.toValidate(metadata.metatype)) {
      return value;
    }

    const obj = plainToClass(metadata.metatype, value);
    const errors = await validate(obj);

    if (errors.length > 0) {
      const messages = errors.map(err => {
        return `${err.property} - ${Object.values(err.constraints).join(', ')}`;
      });
      throw new ValidationException(messages);
    }
    return obj;
  }

  private toValidate(metatype: Function): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.some(type => metatype === type);
  }
}
