// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

import { IsString, MinLength } from 'class-validator';

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {

//     // hace todas las propiedades opcionales el PartialType, al extender del CreateBrandDto
// }

export class UpdateBrandDto {
  @IsString()
  @MinLength(1)
  name: string;
}
